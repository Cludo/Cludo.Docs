<h2 id="statistics_searchcounttotals">Search count totals</h2>

Retrieves the search count, for a specified period.

<h4>Request</h4>

```shell
$ curl "https://api.cludo.com/api/v3/4545589/7578030/statistics/totalSearches?from=2019-03-28T22:00:00.000Z&to=2019-04-30T21:59:59.999Z&onlyIncludeUnique=false&includePreviousPeriod=false"
    -u 4545589:3ede38fdc0824e18bb3adb9a21fbbdc8
```

> The above command returns the following JSON structure:

```json
{
    "withinCurrentPeriod": 25000,
    "withinPreviousPeriod": null
}
```

`GET https://api.cludo.com/api/v3/<Customer ID>/<Engine ID>/statistics/totalSearches?from=<From>&to=<To>&onlyIncludeUnique=<Only Include Unique>&includePreviousPeriod=<Include Previous Period>`

<h5>URL parameters</h5>

Parameter | Type | Default | Description
--------- | ------- | -----------
Customer ID | int | | Your ID
Engine ID | int | | The ID of the specific engine
From | string | | Datetime when you want statistics from eg. 2016-08-14T22:00:00.000Z
To | string | | Datetime when you want the statistics to eg. 2016-08-18T22:00:00.000Z
Only Include Unique | bool | false | Whether you want to retrieve the unique count only
Include Previous Period | bool | false | Whether you want to also retrieve the count for the previous period