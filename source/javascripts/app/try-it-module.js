var tryItDefinitions;
var TRY_IT_PANE = document.getElementById("try-it-pane");

var TryIt = {
    activeKey: "",
    startY: null,
    yDelta: null,
    dragEvent: null,
    lastY: null,

    init: function () {
        var tryItElements = document.getElementsByClassName("try-it");
        TRY_IT_PANE = document.getElementById("try-it-pane");
        for (var i = 0; i < tryItElements.length; i++) {
            var tryItElement = tryItElements[i];

            tryItElement.addEventListener("click", function() {
                var key = this.dataset.definition;
                TryIt.activeKey = key;
                var definition = tryItDefinitions[key];
                
                // POPULATE REQUEST

                // url
                document.getElementById("static-url").innerText = definition.endpoint;

                // request params
                var requestParamsHtml = "";
                for (var i = 0; i < definition.variables.length; i++) {
                    var defaultstring = "";
                    if (definition.variables[i].default) {
                        defaultstring = definition.variables[i].default;
                    }
                    requestParamsHtml += TryIt.getParamInput(definition.variables[i].name, defaultstring);
                }

                // url params
                if (!definition.coreVariables) {
                    definition.coreVariables = [];
                }
                
                var urlParams = helper.parseUrlVariables(definition.endpoint);
                var paramsHtml = "";
                for (var i = 0; i < urlParams.length; i++) {
                    if (!helper.isInArray(definition.coreVariables, "name", urlParams[i])) {
                        definition.coreVariables.push({
                            "name": urlParams[i]
                        });
                    }
                }

                for (var i = 0; i < definition.coreVariables.length; i++) {
                    var defaultstring = "";
                    if (definition.coreVariables[i].default) {
                        defaultstring = definition.coreVariables[i].default;
                    }

                    var cookieValue = helper.getCookie(definition.coreVariables[i].name)
                    if (cookieValue) defaultstring = cookieValue;

                    paramsHtml += TryIt.getParamInput(definition.coreVariables[i].name, defaultstring);
                }

                document.getElementById("static-url-parameters").innerHTML = paramsHtml;
                document.getElementById("static-request-parameters").innerHTML = requestParamsHtml;

                // clear response
                document.getElementById("response-code").innerHTML = "";
                document.getElementById("response-code").classList.remove("loaded");

                TryIt.show();
            });
        }

        var submitButton = document.getElementById("static-submit-button");

        // submitButton.addEventListener("click", submitRequest);
    },

    submitRequest: function(e) {
        // serialize the form.
        // send it
        e.preventDefault();

        var key = TryIt.activeKey;
        var definition = tryItDefinitions[key];
        var url = definition.endpoint;
        var body = {};
        
        for (var i = 0; i < definition.variables.length; i++) {
            var label = definition.variables[i].name;
            var value = document.getElementById("try-it-param-" + label).value;
            body[label] = value;
        }

        var CustomerID;
        var CustomerKey;
        var method;

        if (!definition.method) {
            method = "POST";
        }
        else {
            method = definition.method;
        }

        for (var i = 0; i < definition.coreVariables.length; i++) {
            var label = definition.coreVariables[i].name;
            var value = document.getElementById("try-it-param-" + label).value;

            if (label == "CustomerId") {
                CustomerID = value;
            }
            else if (label == "CustomerKey") {
                CustomerKey = value;
            }

            url = url.replace("{" + label + "}", value);

            // store core variables in cookie
            helper.storeCookie(label, value, 10);
        }       



        if (!CustomerID || !CustomerKey) {
            //console.log("Can't make request. Missing necessary values.");
            document.getElementById("response-code").innerHTML = "<div class='error'>CustomerId and CustomerKey are required.</div>";
            document.getElementById("response-code").classList.add("loaded");
        }
        else {
            TryIt.makeRequest(url, body, CustomerID, CustomerKey, method);

            // activate loader
            document.getElementById("response").classList.add("loading");            
        }
    },

    getParamInput: function(label, value) {
        return "<div class='try-it-input'><label for='" + label + "'>" + label + "</label><input id='try-it-param-" + label + "' name='" + label + "' type='textbox' value='"+value+"'></input></div>";
    },

    keyPressed: function(keyEvent) {
        if (keyEvent.keyCode === 27) {
            TryIt.hide();
        }
    },

    makeRequest: function(url, body, customerId, customerKey, method) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open(method, url);

        var b64auth = btoa(customerId + ":" + customerKey);
        xmlhttp.setRequestHeader("authorization", "Basic " + b64auth);
        xmlhttp.setRequestHeader("content-type", "application/json; charset=utf-8");
        
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var jsonObject = JSON.parse(this.responseText);
                document.getElementById("response-code").innerHTML = "<pre>"+JSON.stringify(jsonObject,undefined, 2) +"</pre>";
                document.getElementById("response-code").classList.add("loaded");
                document.getElementById("response").classList.remove("loading");
            }
            else if (this.readyState == 4) {
                // there was a problem
                if (helper.isValidJson(this.responseText)) {
                    var jsonObject = JSON.parse(this.responseText);
                    document.getElementById("response-code").innerHTML = "<pre>"+JSON.stringify(jsonObject,undefined, 2) +"</pre>";
                    document.getElementById("response-code").classList.add("loaded");
                }
                else {
                    document.getElementById("response-code").innerHTML = "<div class='error'>" + this.responseText + "</div>";
                }
                document.getElementById("response").classList.remove("loading");
            }
        };
        xmlhttp.send(JSON.stringify(body));
    },

    hide: function() {
        document.removeEventListener("keyup", this.keyPressed);
        if (!TRY_IT_PANE.classList.contains("hide")) {
            TRY_IT_PANE.classList.add("hide");
        }
    },

    startDragging: function() {        
        document.body.classList.add("no-select");
        TRY_IT_PANE.classList.add("dragging");
        document.body.addEventListener("mouseup", this.stopDragging);
        document.addEventListener("mousemove", this.dragEvent);
    },

    dragEvent: function(e) {
        if (!TryIt.startY) {
            TryIt.startY = e.clientY;
            if (TRY_IT_PANE.style.top) {                
                TryIt.yDelta = (TRY_IT_PANE.style.top.replace(/[^-\d\.]/g, '')) - TryIt.startY;
            }
            else {
                TryIt.yDelta = .5 * window.innerHeight - TryIt.startY;
            }
        }

         TryIt.setTop((e.clientY + TryIt.yDelta));
    },

    stopDragging: function() {
        document.body.classList.remove("no-select");
        TRY_IT_PANE.classList.remove("dragging");
        TryIt.startY = null;
        TryIt.yDelta = null;
        document.body.removeEventListener("mouseup", TryIt.stopDragging);
        document.removeEventListener("mousemove", TryIt.dragEvent);

        if (window.innerHeight - TRY_IT_PANE.style.top.replace(/[^-\d\.]/g, '') < 200) {
            TryIt.hide();
        }
    },

    setTop: function (val) {
        TRY_IT_PANE.style.top = val + "px";
    },

    show: function() {
        this.setTop(window.innerHeight * .4);
        if (TRY_IT_PANE.classList.contains("hide")) {
            TRY_IT_PANE.classList.remove("hide");
        }
        document.addEventListener("keyup", this.keyPressed);
    },

     loadJSON: function (callback) {   
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', '/definitions/api.json', true); // Replace 'my_data' with the path to your file
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                callback(xobj.responseText);
            }
        };
       xobj.send(null);  
    }
}

var helper = {
    parseUrlVariables: function(url) {
        return url.match(/[^{}]+(?=\})/g);
    },
    storeCookie: function(name, value, days) {
        name = "Cludo-" + name;
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    },
    getCookie: function(name) {
        name = "Cludo-" + name;
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    },
    isInArray: function(array, property, propertyValue) {
        var found = false;
        for(var i = 0; i < array.length; i++) {
            if (array[i][property] == propertyValue) {
                found = true;
                return true;
            }
        }
        return false;
    },
    isValidJson: function IsJsonString(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }
}

TryIt.loadJSON(function(results) {
    tryItDefinitions = JSON.parse(results);
    TryIt.init();
})

// setTimeout(function() { // stupid workaround
//     //TryIt.init();
// }, 200);