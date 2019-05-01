<h2 id="statistics_searchcounts">Search counts per day</h2>

Retrieves a list of search counts summed by day for a specified period.

<h4>Request</h4>

```shell
$ curl "https://api.cludo.com/api/v3/4545589/7578030/statistics/searchHistogram?type=successful&from=2016-08-14T22:00:00.000Z&to=2016-08-22T12:44:38.799Z&timezone=00:00"
    -u 4545589:3ede38fdc0824e18bb3adb9a21fbbdc8
```

> The above command returns daily aggregated data in the following JSON structure:

```json
{
    "totalSearches": [
        {
            "Key": "2016-08-14", 
            "Value": 200
        },
        {
            "Key": "2016-08-15", 
            "Value": 900
        },
        {
            "Key": "2016-08-16", 
            "Value": 0
        }
    ],
    "uniqueSearches": [
        {
            "Key": "2016-08-14", 
            "Value": 100
        },
        {
            "Key": "2016-08-15", 
            "Value": 450
        },
        {
            "Key": "2016-08-16", 
            "Value": 0
        }
    ]
}
```

`GET https://api.cludo.com/api/v3/<Customer ID>/<Engine ID>/statistics/searchHistogram?type=<Type>&from=<From>&to=<To>&timezone=<Timezone>`

<h5>URL parameters</h5>

Parameter | Type | Default | Description
--------- | ------- | -----------
Customer ID | int | | Your ID
Engine ID | int | | The ID of the specific engine
Type    | string | all | What statistics do you want. Options are<br>`all` - all statistics<br>`unsuccessfull` - only retrive search statistics without any results<br>`successful` - only retrieve search statistics which returned results
From    | string | | Datetime when you want statistics from eg. 2016-08-14T22:00:00.000Z
To      | string | | Datetime when you want the statistics to eg. 2016-08-18T22:00:00.000Z
Timezone | string | 00:00 (UTC) | The timezone (UTC offset) the histogram should be formatted with, eg.:<br>`00:00` - UTC<br>`02:00` - UTC+2 (CEST)<br>`-05:00` - UTC-5 (CDT)