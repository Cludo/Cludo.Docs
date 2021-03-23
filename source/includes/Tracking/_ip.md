<h2 id="tracking_ip">IP addresses</h2>

Some of our features are driven directly by the IP address of the visitor, like excluding analytics from certain ranges in My Cludo or our geo analytics. Usually we get that automatically as the tracking is initiated by our script on the visitor's machine, but if the tracking request to us doesn't originate from the visitor, you will need to provide the real IP address to us separately.

You can do so by providing an additional HTTP header with the tracking request.

<h4>Header</h4>

```shell
$ curl "https://api.cludo.com/api/v3/4545589/7578030/search/pushstat/querylog"
    -H "X-Real-IP: 127.0.0.1"

$ curl "https://api.cludo.com/api/v3/4545589/7578030/search/pushstat/clicklog"
    -H "X-Real-IP: 127.0.0.1"
```

`X-Real-IP: <IP address>`

<h5>Parameters</h5>

Key | Type | Description
--- | --- | ---
IP address | string | The IP address of the visitor
