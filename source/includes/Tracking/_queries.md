<h2 id="tracking_queries">Queries</h2>

> The command below tracks a user search. This is only necessary if you don't use the CludoJS script.

```shell
curl
-x POST \
-G https://api.cludo.com/api/v3/{CustomerId}/{EngineId}/search/pushstat/querylog \
-d sz=1440x900 \
-d ua=Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_11_6)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F52.0.2743.116%20Safari%2F537.36 \
-d refurl=https%3A%2F%2Fwww.cludo.com%2Fen%2F \
-d refpt=Cloud-based%20search%20solutions%20%7C%20Cludo \
-d sw=search \
-d brl=en-US \
-d pn=1 \
-d hn=www.cludo.com \
-d rc=11 \
-d enid=58 \
-d fquery= \
-d ban=0 \
-d rt=623 \
-d ql= \
-d qid=68a3ce27d3294f3c97935e518f9daaeb \
-d sid=ab303795fb1b406cab2a9bcc91f9626f \
-d qsid=e041994fac76436388569ca9e4704cc0 \
-d a=1471868584533 \
```

Use this endpoint to track search statistics.

#### HTTP Request

`POST https://api.cludo.com/api/v3/{CustomerId}/{EngineId}/search/pushstat/querylog`

Parameter | Abbreviation&nbsp;for | Description
----- | ------ | ------
CustomerId  |                       | Your customer id
EngineId    |                       | The id of the search engine to use for the search
sz          | Screen size           | e.g. *2560x1440*
ua          | User agent            | The users user agent<br>E.g.<br>*Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36*
refurl      | Referal url           | The URL the user was at when doing the initial search.<br>E.g.<br>*https://www.cludo.com/en/*
refpt       | Referal page title    | The title of the page the user was at when doing the intial search<br>E.g.<br>*Cloud-based search solutions &#124; Cludo*
sw          | search word           | The sentence searched for
brl         | browser language      | The browser language
pn          | Page number           | The page number requested in the search
hn          | Host name             | The host name of the page where the search is done at.<br>E.g.<br>*www.cludo.com*
rc          | Result count          | How many searches were returned to the user.<br>E.g.<br>*5*
enid        | Engine id             | The search engine the search was processed by
fquery      | Fixed Query           | If we catch spelling mistakes the fixed query will be set to the fixed spelling mistakes.<br>E.g.<br>If the search word is *carz*, the fixed query would be *cars*
ban         | Banners               | The number of banners shown
rt          | Response time         | How fast was the search done
ql          | Quicklink             | If a Quicklink is used in the search, you can supply the id here so we can track it
qid         | Query id              | The unique id of the query
sid         | Session id            | The unique id of the user session
qsid        | Query session id      | 
a           |                       | Random ID used for cache busting