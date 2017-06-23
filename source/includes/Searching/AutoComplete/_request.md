### HTTP request

There are two ways you may make a Autocomplete request. `GET` or `POST`. 

#### HTTP GET request

```shell
curl 
-X GET \
-I -G https://api.cludo.com/api/v3/{CustomerId}/{EngineId}/autocomplete \
-u {CustomerId}:{CustomerKey} \
-d query={query} \
-d responsetype={responseType} \
-d filters={filters} \
-d results={results} \
```

`GET https://api.cludo.com/api/v3/{CustomerId}/{EngineId}/autocomplete?query={query}&responsetype={responseType}&filters={filters}&results={results}`

Parameter | Description
----- | ------
CustomerId | Your customer id
EngineId | The id of the search engine to use for the search





#### HTTP POST request

```shell
curl 
-X POST \
-I https://api.cludo.com/api/v3/{CustomerId}/{EngineId}/autocomplete \
-u {CustomerId}:{CustomerKey} \
-H "Content-Type: application/json" \
-d <JSON BODY> \
```

`POST https://api.cludo.com/api/v3/{CustomerId}/{EngineId}/autocomplete`

Parameter | Description
----- | ------
CustomerId | Your customer id
EngineId | The id of the search engine to use for the search

<p><button id="search-try-it" class="try-it" data-definition="autocomplete">Try it</button></p>




#### Query parameters


Parameter | Description
----- | ------
query           | The string query to search for
responsetype    | the format to return the search results in.
filters         | filters to add to the search
results         | the amount of search results to return
template        | The template to render rich autocomplete
overlay         | The overlay template to render rich autocomplete