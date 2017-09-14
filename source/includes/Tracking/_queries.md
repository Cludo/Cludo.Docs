<h2 id="tracking_queries">Queries</h2>

> The command below tracks a user search. This is only necessary if you don't use the CludoJS script.

```shell
curl -X POST \
    https://api.cludo.com/api/v3/{CustomerId}/{EngineId}/search/pushstat/querylog \
    -H 'content-type: application/json' \
    -d '{
        "sz" : "1440x900",
        "ua" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36",
        "refurl" : "https://www.mysite.com/article/monkeys.html",
        "refpt" : "Article about monkeys | My Site",
        "sw" : "robots",
        "brl" : "en-US",
        "pn" : "1",
        "hn" : "www.mysite.com",
        "rc" : "29",
        "fquery" : "",
        "ban" : "0",
        "rt" : "13",
        "ql" : "",
        "qid" : "{QueryId}",
        "sid" : "{SessionId}",
        "qsid" : "{QuerySessionId}"
    }' \
```

Use this endpoint to track search statistics.

#### HTTP Request

`POST https://api.cludo.com/api/v3/{CustomerId}/{EngineId}/search/pushstat/querylog`

Parameter | Description
----- | ------
CustomerId | Your customer id
EngineId | The id of the search engine to use for the search

#### HTTP Payload

The payload of the query log request must be in `json` format. The properties are described below.

Parameter | Abbreviation&nbsp;for | Description
----- | ------ | ------
sz          | Screen size           | The resolution of the users screen<br>E.g.<br>*2560x1440*
ua          | User agent            | The users user agent<br>E.g.<br>*Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36*
refurl      | Referal url           | The URL of the page the user was at when doing the initial search.<br>E.g.<br>*https://www.mysite.com/article/monkeys.html*
refpt       | Referal page title    | The title of the page the user was at when doing the intial search<br>E.g.<br>*Article about monkeys &#124; My Site*
sw          | search word           | The sentence searched for
brl         | browser language      | The browser language
pn          | Page number           | The page number requested in the search
hn          | Host name             | The host name of the page where the search is done at.<br>E.g.<br>*www.mysite.com*
rc          | Result count          | How many searches were returned to the user.<br>E.g.<br>*5*
fquery      | Fixed Query           | If we catch spelling mistakes the fixed query will be set to the fixed spelling mistakes.<br>E.g.<br>If the search word is *carz*, the fixed query would be *cars*
ban         | Banners               | The number of banners shown
rt          | Response time         | How fast was the search done
ql          | Quicklink             | If a Quicklink redirection occur, then set the ql parameter with the quicklink id, so we can track it
qid         | Query id              | A unique string used as the id of the query
sid         | Session id            | A unique string used as the id of the user sesson
qsid        | Query session id      | A unique string used as the id of the query within the user session
