# AutoComplete&nbsp;searches


<h2 id="autocomplete-searches_request">Request</h2>

<h2 id="autocomplete-searches_response">Response</h2>






## Get autocomplete items


```shell
curl "https://api.cludo.com/api/v3/36/58/Autocomplete?text=fe"
  -H "Authorization: SiteKey MzY6NTg6U2VhcmNoS2V"
```

> The above command returns suggestions structured like this:

```json
[ "features", "feed", "feel" ]
```

This endpoint retrieves content for autocomplete.



### HTTP Request

`GET https://api.cludo.com/api/v3/{CustomerID}/{EngineID/Autocomplete?text={query}<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
CustomerID | The ID of your account.
EngineID | The ID of the engine you want to get autocomplete results from.
text | The search query.
