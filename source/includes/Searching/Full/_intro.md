<h2 id="full-searches">Full&nbsp;searches</h2>

Full searches is the standard way to search with Cludo. With these requests you have a great variety of functions available to express your search. To read more about the HTTP response, click [here](#full-searches_response). 





#### HTTP request

```shell
curl 
-x POST \
-i https://api.cludo.com/api/v3/{CustomerId}/{EngineId}/search \
-H "Content-Type: application/json" \
-u {CustomerId}:{API_Key} \
-d <JSON BODY> \
```
> Go [here](#full-searches_request-table) to se a full example of a request body and [here](#full-searches_response) to se a response body.

<h5>EU CLUSTER:</h5>

`POST https://api.cludo.com/api/v3/{CustomerId}/{EngineId}/search`

<h5>US CLUSTER:</h5>

`POST https://api-us1.cludo.com/api/v3/{CustomerId}/{EngineId}/search`

<aside class="warning">
If you are located on the US cluster <b>ALL</b> your HTTP requests should start with `https://api-us1.cludo.com/api/v3/`. Feel free to <a href="https://www.cludo.com/contact/">contact us</a> if you have any questions!
</aside>


Parameter | Description
----- | ------
CustomerId | Your customer id
EngineId | The id of the search engine to use for the search

<p><button id="search-try-it" class="try-it" data-definition="search">Try it</button></p>



<h4 id="full-searches_query-parameters">Query parameters</h4>

There are several features available when making a full search. The features can be grouped into these five categories, each controling a different element of the search:

* [Query](#full-searches_query)
* [Filtering](#full-searches_filtering)
* [Ranking](#full-searches_ranking)
* [Grouping](#full-searches_grouping)
* [Rendering](#full-searches_rendering)

<aside class="notice">
To se a full table of all HTTP request body properties, click [here](#full-searches_request-table).
</aside>





<!--```shell
-d query=My test earch \
-d responseType=JsonObject \
-d perPage=25 \
-d page=2 \
```-->

<!--```json
{
  "query" : "My test search",
  "responseType" : "JsonObject",
  "perPage" : "25",
  "page" : "2",
  "facets" : "",
}
```-->





<!--
> The above command returns JSON structured like this for the JSON request:

```json
{
  "TypedDocuments": [
    {
      "ResultIndex": 1,
      "Fields": {
        "Description": {
          "Field": "Description",
          "Value": "Content of the description",
          "Values": [
            "Serialised content of the description"
          ],
          "Highlights": [],
          "IsArray": false
        },
        "Category": {
          "Field": "Category",
          "Value": "Citizen",
          "Values": [
            "Citizen"
          ],
          "Highlights": [],
          "IsArray": false
        },
        "DomainName": {
          "Field": "DomainName",
          "Value": "http://mydomain.com",
          "Values": [
            "http://mydomain.com"
          ],
          "Highlights": [],
          "IsArray": false
        },
        "Title": {
          "Field": "Title",
          "Value": "Some title",
          "Values": [
            "Serialised version of the title"
          ],
          "Highlights": [
            "<b>Highlight found</b>"
          ],
          "IsArray": false
        },
        "Id": {
          "Field": "Id",
          "Value": "http://vejen.dk/borger/familie,-boern-og-unge/skoler",
          "Values": [
            "http://vejen.dk/borger/familie,-boern-og-unge/skoler"
          ],
          "Highlights": [],
          "IsArray": false
        },
        "Url": {
          "Field": "Url",
          "Value": "http://mydomain.com/page/found",
          "Values": [
            "http://mydomain.com/page/found"
          ],
          "Highlights": [],
          "IsArray": false
        },
        "_boostedScore": {
          "Field": "_boostedScore",
          "Value": "16.4478468418121;10.611514",
          "Values": [
            "16.4478468418121;10.611514"
          ],
          "Highlights": [],
          "IsArray": false
        },
        "_score": {
          "Field": "_score",
          "Value": "10.611514",
          "Values": [
            "10.611514"
          ],
          "Highlights": [],
          "IsArray": false
        },
        "_type": {
          "Field": "_type",
          "Value": "PageContent",
          "Values": [
            "PageContent"
          ],
          "Highlights": [],
          "IsArray": false
        }
      },
      "FieldNames": [
        "Description",
        "Category",
        "DomainName",
        "Title",
        "Host",
        "Breadcrumb",
        "Id",
        "ParentUrl",
        "Url",
        "_boostedScore",
        "_score",
        "_type"
      ]
    }
  ]
}
```

> The content in a JsonHTML structure looks like this:

```
{
    "Banners": [
        "Id": 1
        "Banner": "<p>Some content",
        "Name": "Price",
        "Did you mean": "Some alternative",
        "Facets": "<ul><li>Facet 1</li><li>Facet 2</li></ul>"
        "FixedQuery": "If we fixed spelling mistake the correct spelling is this"
    ]   
}
```


-->


<!--


Parameter | Required | Type | Default&nbsp;value | Description
--------- | ------- | -----------
facets || | Category: [] | As default we search in categories in the field "Category". If you want to only show results for two categories supply the name of the field eg. Category: [ "Category", "Years" ]. This will still supply you with the option to show results from other categories as well. If you need to remove some results from the search results, use filters instead.

filters | {} | If you want to limit searches you can use filters. If you want to filter based upon domain name you can do it by { "DomainName": [ "https://mysubsite.domain.com ]}. If you need to filter by e.g. language it can be done by { "Language": ["En"] }. To search between two dates simply supply { "daterange": ["Start_date", "End_date", "2013-01-01", "2016-01-01"] } -->
