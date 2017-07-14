<h2 id="statistics_searchcounts">Search counts per day</h2>

```shell
curl 
-X GET \
-I -G https://api.cludo.com/api/v3/{customerId}/{engineId}/statistics/GetOveralStatistics \
-d from=2016-08-14T22:00:00.000Z \
-d to=2016-08-22T12:44:38.799Z \
-d type=successful \
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

Retrieves a list of search counts summed by day for a specified period.





#### HTTP request

`GET https://api.cludo.com/api/v3/{customerId}/{engineId}/statistics/GetOveralStatistics`

Parameter | Default | Description
--------- | ------- | -----------
from    |       | Datetime when you want statistics from eg. 2016-08-14T22:00:00.000Z
to      |       | Datetime when you want the statistics to eg. 2016-08-18T22:00:00.000Z
type    | all   | What statistics do you want. Options are<br>`all` - all statistics<br>`unsuccessfull` - only retrive search statistics without any results<br>`successful` - only retrieve search statistics which returned results