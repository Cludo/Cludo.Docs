<h1 id="intents">Intents</h1>

Intents purpose is to give users an overview of commonly searched queries terms and bundle them together based on machine learning.

<aside class="notice">
Intents requires [basic authentication](#authentication_basic).
</aside>


The following endpoints are currently available:

* [Historgram](#intents_historgram)
* [Overall](#intents_overall)
* [Trending](#intents_trending)
* [Ineffective](#intents_ineffective)
* [Top](#intents_top)
* [Details](#intents_details)








<h2 id="intents_historgram">Histogram</h2>

Get total amount of clicks and searches for an intent recorded for the specified time period

#### HTTP request

> The command below receives histogram for an intent

```shell
curl
-X GET \
-I http://api.cludo.com/api/v3/{customerId}/{engineId}/intents/histogram?intent={intent}&from={startTime}&to={endTime} \
-u {CustomerId}:{API_Key} \
```

`GET http://api.cludo.com/api/v3/{customerId}/{engineId}/intents/histogram?<Query parameters>`

<h5>Query parameters</h5>

Key | Type | Description
--- | --- | ---
intent | string | The name of the intent (required)
from | string | Start date (required)
to | string | End date (required)
timeZone | string | The time zone offset (+02:00, -02:00, etc.) (optional)


Both date-time values must be strings and in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format, such as:

* 2017-06-13T02:50:25+00:00
* 2017-06-13T02:50:25Z
* 20170613T025025Z
* 2017-06-13

> Example of an HTTP response

```
{
    clicks: [
        {
                "Key":"2019-03-04",
                "Value":5
        },
        ...
    ],
    searches: [
        {
            "Key":"2019-03-04",
            "Value":11
        },
        ...
    ]
}
```





<h2 id="intents_overall">Overall</h2>

Recieves an overall count of all intents created.

#### HTTP request

> The command below receives the total count of all intents

```shell
curl
-X GET \
-I http://api.cludo.com/api/v3/{customerId}/{engineId}/intents/overall \
-u {CustomerId}:{API_Key} \
```


`GET http://api.cludo.com/api/v3/{customerId}/{engineId}/intents/overall`

> Example of an HTTP response

```
{
    "totalIntents": 11,
    "lastUpdated": "2019-03-06T22:44:15.73Z"
}
```





<h2 id="intents_trending">Trending</h2>

This endpoint returns the trending intents value, by using this endpoint you can recieve stats for clicks and searches on the intents

#### HTTP request

> The command below is an example on how to receive trending intents for a specific time period

```shell
curl
-X GET \
-I http://api.cludo.com/api/v3/{customerId}/{engineId}/intents/trending?from=2018-01-31T23:00:00.000Z&to=2019-03-14T22:59:59.999Z&limit=5&pageNumber=1&query={filterForIntent}&sortOrder=1&orderBy=trending \
-u {CustomerId}:{API_Key} \
```

`GET http://api.cludo.com/api/v3/{customerId}/{engineId}/intents/trending?<Query parameters>`

<h5>Query parameters</h5>

Key | Type | Description
--- | --- | ---
from | string | Start date of when to recieve stats (required)
to | string | End date of when to receive stats (required)
limit | int | Max number of intents to return (optional - default is 1000)
pageNumber | int | Page number (optional - default is 1)
query | string | Filter on specific intents - works with wildcards as well (optional)
sortOrder | int/string | The order of which the intents will be sorted, can be set to string desc/asc or 1/0 (optional - default is desc / 1)
orderBy | string | How the results should be ordered (optional - default is trending)


> Example of an HTTP response

```
{
    "pageNumber": 1,
    "pageSize": 10,
    "totalItems": 165,
    "items": [
        {
            "intent": "intent 1",
            "trending": 18,
            "hits": 20,
            "oldHits": 2,
            "searchCount": 10,
            "clickCount": 5,
            "ctr": 0.5,
            "topQueries": [ (no more than 3 items)
                "intent",
                "1",
                "something"
            ]
        }
        ... 
    ]
}
```





<h2 id="intents_ineffective">Ineffective</h2>

This endpoint is used to return ineffective intents, it's quite similar to the trending endpoint.


#### HTTP request

> The command below is an example on how to receive ineffective intents for a specific time period

```shell
curl
-X GET \
-I http://api.cludo.com/api/v3/{customerId}/{engineId}/intents/ineffective?from=2018-01-31T23:00:00.000Z&to=2019-03-14T22:59:59.999Z&limit=5&pageNumber=1&query={filterForIntent}&sortOrder=1&orderBy=ctr\
-u {CustomerId}:{API_Key} \
```

`GET http://api.cludo.com/api/v3/{customerId}/{engineId}/intents/ineffective?<Query parameters>`

<h5>Query parameters</h5>

Key | Type | Description
--- | --- | ---
from | string | Start date of when to recieve stats (required)
to | string | End date of when to receive stats (required)
limit | int | Max number of intents to return (optional - default is 1000)
pageNumber | int | Page number (optional - default is 1)
query | string | Filter on specific intents - works with wildcards as well (optional)
sortOrder | int/string | The order of which the intents will be sorted, can be set to string desc/asc or 1/0 (optional - default is asc / 0)
orderBy | string | How the results should be ordered (optional - default is ctr)


> Example of an HTTP response

```
{
    "pageNumber": 1,
    "pageSize": 10,
    "totalItems": 165,
    "items": [
        {
            "intent": "intent 1",
            "importance": 0.98775,
            "uniqueClickCount": 4,
            "searchCount": 10,
            "clickCount": 5,
            "ctr": 0.5,
            "topQueries": [ (no more than 3 items)
                "intent",
                "1",
                "something"
            ]
        }
        ... 
    ]
}
```


<h2 id="intents_top">Top</h2>

Shows top intents??

#### HTTP request

> The command below is an example on how to receive top intents for a specific time period

```shell
curl
-X GET \
-I http://api.cludo.com/api/v3/{customerId}/{engineId}/intents/top?from=2018-01-31T23:00:00.000Z&to=2019-03-14T22:59:59.999Z&limit=5&pageNumber=1&query={filterForIntent}&sortOrder=1&orderBy=ctr\
-u {CustomerId}:{API_Key} \
```

`GET http://api.cludo.com/api/v3/{customerId}/{engineId}/intents/top?<Query parameters>`

<h5>Query parameters</h5>

Key | Type | Description
--- | --- | ---
from | string | Start date of when to recieve stats (required)
to | string | End date of when to receive stats (required)
limit | int | Max number of intents to return (optional - default is 1000)
pageNumber | int | Page number (optional - default is 1)
query | string | Filter on specific intents - works with wildcards as well (optional)
sortOrder | int/string | The order of which the intents will be sorted, can be set to string desc/asc or 1/0 (optional - default is asc / 0)
orderBy | string | How the results should be ordered (optional - default is searchCount)


> Example of an HTTP response

```
{
    "pageNumber": 1,
    "pageSize": 10,
    "totalItems": 165,
    "items": [
        {
            "intent": "intent 1",
            "importance": 0.98775,
            "uniqueClickCount": 4,
            "searchCount": 10,
            "clickCount": 5,
            "ctr": 0.5,
            "topQueries": [ (no more than 3 items)
                "intent",
                "1",
                "something"
            ]
        }
        ... 
    ]
}
```




<h2 id="intents_details">Details</h2>

Shows details about an intent

#### HTTP request

> The command below is an example on how to receive details on a specific intent

```shell
curl
-X GET \
-I http://api.cludo.com/api/v3/{customerId}/{engineId}/intents/details?from=2018-01-31T23:00:00.000Z&to=2019-03-14T22:59:59.999Z&limit=5&pageNumber=1&query={filterForIntent}&sortOrder=1&orderBy=ctr\
-u {CustomerId}:{API_Key} \
```

`GET http://api.cludo.com/api/v3/{customerId}/{engineId}/intents/details?<Query parameters>`

<h5>Query parameters</h5>

Key | Type | Description
--- | --- | ---
intent | string | The intent of which you want to recieve details for
from | string | Start date of when to recieve stats (required)
to | string | End date of when to receive stats (required)
limit | int | Max number of intents to return (optional - default is 1000)
pageNumber | int | Page number (optional - default is 1)
query | string | Filter on specific intents - works with wildcards as well (optional)
sortOrder | int/string | The order of which the intents will be sorted, can be set to string desc/asc or 1/0 (optional - default is asc / 0)
orderBy | string | How the results should be ordered (optional - default is searchCount)

> Example of an HTTP response

```
{
    "intent": "intent 1",
    "searchCount": 10,
    "clickCount": 5,
    "ctr": 0.5,
    "searchCountPrevPeriod": 6,
    "clickCountPrevPeriod": 1,
    "ctrPrevPeriod": 0.16666,
    "topQueries": [ (no more than 3 items)
        "intent",
        "1",
        "something"
    ],
    "intentQueriesDetails": {
        "pageNumber": 1,
        "pageSize": 10,
        "totalItems": 4,
        "items": [
            {
                "query": "intent 1",
                "searchCount": 2,
                "clickCount": 1,
                "ctr": 0.5,
                "attachmentInfo": {
                    "hasPagerank": true,
                    "hasBanner": false,
                    "hasSpellcorrection": false,
                    "hasSynonyms": true,
                    "hasQuicklink": false,
                    "pageRankings": [
                    {
                        "Name": "page ranking",
                        "Id": 1,
                        "SearchWord": "intent 1",
                        "Terms": ["intent", 1]
                    }],
                    "banners": [],
                    "spellCorrections": [],
                    "synonyms": [
                    {
                        "Name": "synonym",
                        "Id": 1,
                        "SearchWord": "intent 1 synonym",
                        "Terms": []
                    }],
                    "quickLinks": []
                }
            },
            {
                "query": "intent",
                "searchCount": 2,
                "clickCount": 1,
                "ctr": 0.5,
                "attachmentInfo": {
                    "hasPagerank": true,
                    "hasBanner": false,
                    "hasSpellcorrection": false,
                    "hasSynonyms": true,
                    "hasQuicklink": false,
                    "pageRankings": [
                    {
                        "Name": "page ranking",
                        "Id": 2,
                        "SearchWord": "intent",
                        "Terms": ["intent"]
                    }],
                    "banners": [],
                    "spellCorrections": [],
                    "synonyms": [
                    {
                        "Name": "synonym",
                        "Id": 2,
                        "SearchWord": "intent synonym",
                        "Terms": []
                    }],
                    "quickLinks": []
                }
            }
            ... (4 items as this is the totalItems)
        ]
    }
}
```

<h2 id="intents_list">List</h2>

Shows list of intents??

#### HTTP request

> The command below is an example on how to receive details on a specific intent

```shell
curl
-X GET \
-I https://api-eu1.cludo.com/api/v3/36/58/intents/list?sort={typeOfIntent}&limit=5&pageNumber=1&query={filteringIntentQuery}\
-u {CustomerId}:{API_Key} \
```

`GET http://api.cludo.com/api/v3/{customerId}/{engineId}/intents/details?<Query parameters>`

<h5>Query parameters</h5>

Key | Type | Description
--- | --- | ---
sort | string | Type of intent (top, trending or ineffective) (required)
limit | int | Number of intents to return (optional - default is 1000)
pageNumber | int | The page (optional - default is 1)
query | string | Intents filter. Works with wildcards (optional - default is empty)


Response:
Object ({...}), the same as the object corresponding to the enpoint representing the Type/sort of the intent (top, trending or ineffective).