<h2 id="statistics_searchcounttotals">Search count totals</h2>

```shell
curl 
-X GET \
-I -G https://api.cludo.com/api/v3/{customerId}/{engineId}/statistics/GetTotalSearches \
-d from=2016-08-14T22:00:00.000Z \
-d to=2016-08-22T12:44:38.799Z \
-d type=Autocomplete \
```
> The above command returns just a single digit with the sum for the given period:

```json
1500
```

Retrieves a list of search counts for a specific requst type, for a specified period.





#### HTTP request

`GET https://api.cludo.com/api/v3/{customerId}/{engineId}/statistics/GetTotalSearches`

Parameter | Default | Description
--------- | ------- | -----------
from    |       | Datetime when you want statistics from eg. 2016-08-14T22:00:00.000Z
to      |       | Datetime when you want the statistics to eg. 2016-08-18T22:00:00.000Z
type    | Search   | Options are<br>`Search` - Regular searches<br>`Autocomplete` - Regular autocomplete<br>`RichAutocomplete` - Rich Autocomplete that does both regular autocomplete and search in one call.