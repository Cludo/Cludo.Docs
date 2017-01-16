# Statistics

## Track searches

```bash
curl "https://api.cludo.com/api/v3/36/58/search/pushstat/querylog?sz=1440x900&ua=Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_11_6)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F52.0.2743.116%20Safari%2F537.36&refurl=https%3A%2F%2Fwww.cludo.com%2Fen%2F&refpt=Cloud-based%20search%20solutions%20%7C%20Cludo&sw=search&brl=en-US&pn=1&hn=www.cludo.com&rc=11&enid=58&fquery=&ban=0&rt=623&ql=&qid=68a3ce27d3294f3c97935e518f9daaeb&sid=ab303795fb1b406cab2a9bcc91f9626f&qsid=e041994fac76436388569ca9e4704cc0&a=1471868584533"
```

> The above command tracks a user search. This is only necessary if you don't use the CludoJS script.


Use this endpoint to track statistics.

### HTTP Request

`POST https://api.cludo.com/api/v3/36/58/search/pushstat/querylog`

### Query Parameters

Parameter  | Description
---------  | -----------
sz  | Screensize – e.g. 2560x1440.
ua  | The users user agent e.g.Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36
refurl | The URL the user was at when doing the initial search. E.g. https://www.cludo.com/en/
refpt | The title of the page the user was at when doing the intial search ”Cloud-based search solutions | Cludo”
sw | The search word
brl | The browser language
pn | Page number
hn | The host name of the page where the search is done at. E.g. “www.cludo.com”.
rc | Result count – how many searches were returned to the user. E.g. “5”.
enid | The engine id.
fquery | Fixed Query. If we catch spelling mistakes the fixed query will be set to the fixed spelling mistakes. If the search word is “carz”, the fixed query would be “cars”.
rt | Response time. How fast was the search done.
ql | If a Quicklink is used in the search, you can supply the id here so we can track it.
a | Random ID used for cache busting.


## Get search statistics

```bash

curl "https://api.cludo.com/api/v3/36/58/statistics/GetOveralStatistics?from=2016-08-14T22:00:00.000Z&to=2016-08-22T12:44:38.799Z&type=successful"
```

> The above command returns daily aggregated data in the following json structure:

```json
[
    {
        "Key": "2016-08-15", 
        "Value": 201
    },
    {
        "Key": "2016-08-16", 
        "Value": 993
    },
    {
        "Key": "2016-08-17", 
        "Value": 0
    }
]
```

### HTTP Request
`GET https://api.cludo.com/api/v3/36/58/statistics/GetOveralStatistics``

### Query Parameters
Parameter | Default | Description
--------- | ------- | -----------
from | undefined | Datetime when you want statistics from eg. 2016-08-14T22:00:00.000Z
to | undefined | Datetime when you want the statistics to eg. 2016-08-18T22:00:00.000Z
type | all | What statistics do you want. Options are "all" - all statistics, "unsuccessfull" - only retrive search statistics without any results, "successful" - only retrieve search statistics which returned results