<h2 id="statistics_searchcounts">Click counts</h2>

```shell
curl 
-X GET \
-I -G https://api.cludo.com/api/v3/{customerId}/{engineId}/statistics/clickcounts \
-d from=2016-08-14T22:00:00.000Z \
-d to=2016-08-22T12:44:38.799Z \
```

> The above command returns daily aggregated data in the following json structure:

```json
[
    {
        "pageNumber": 0,
        "pageSize": 10,
        "totalItems": 1,
        "items": [
            {
                "title": "Cludo click tracking statistics",
                "clickTarget": "http://cludo.com/all-about-clicktracking.pdf",
                "count": 22,
                "previousCount": 10
            }
        ]
    }
]
```

Retrieves a list of clicked targets for a specified period, ordered by popularity by default.





#### HTTP Request

`GET https://api.cludo.com/api/v3/{customerId}/{engineId}/statistics/clickcounts?from=2017-05-17T22:00:00.000Z&to=2017-05-25T14:06:36.412Z`

Parameter | Default | Description 
--------- | ------- | -----------
from |  |  Datetime when you want statistics from eg. 2016-08-14T22:00:00.000Z
to |  | Datetime when you want the statistics to eg. 2016-08-18T22:00:00.000Z
searchWord | _optional_ | A search word to filter results by to only get results for a single search term
clickTarget | page | Click type to get results for, currently only supports 'page' which means ordinary search results
orderBy | count | Property to order by
sortOrder | desc | Sort direction (asc, desc)
pageSize | 10 | Number of results pr. page
pageNumber | 0 | Page number, zero indexed