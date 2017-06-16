# Searching

## Do a search

```
```

```bash
curl "https://api.cludo.com/api/v3/{CustomerId}/{EngineID}/search"
  -H "Authorization: SiteKey XXXXXXX"
```

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


This endpoint makes a search.

### HTTP Request

`POST https://api.cludo.com/api/v3/{CustomerId}/{EngineID}/search`

<p><button id="search-try-it" class="try-it" data-definition="search">Try it</button></p>

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
ResponseType | Json | Use Json to return Json objects. If Cludo has done the search template use JsonHTML which will return the HTML you can output.
Template | SearchContent | If you just have one search template you can just use the default setting. Otherwise set the template which you would use here.
applyMultiLevelFacets | True | If you need to have several levels of categories which should be filtered independently then set this to false.
facets | Category: [] | As default we search in categories in the field "Category". If you want to only show results for two categories supply the name of the field eg. Category: [ "Category", "Years" ]. This will still supply you with the option to show results from other categories as well. If you need to remove some results from the search results, use filters instead.
filters | {} | If you want to limit searches you can use filters. If you want to filter based upon domain name you can do it by { "DomainName": [ "https://mysubsite.domain.com ]}. If you need to filter by e.g. language it can be done by { "Language": ["En"] }. To search between two dates simply supply { "daterange": ["Start_date", "End_date", "2013-01-01", "2016-01-01"] } 
page | 1 | Current page
perPage | 10 | Amount of results returned
query | "" | The text you want to search.


<aside class="success">
Remember — this is the basis for all searching with Cludo. When you get around this API call you can do a lot of flexible searching yourself.
</aside>

## Get autocomplete items


```bash
curl "https://api.cludo.com/api/v3/36/58/Autocomplete?text=fe"
  -H "Authorization: SiteKey MzY6NTg6U2VhcmNoS2V"
```

> The above command returns suggestions structured like this:

```json
[ "features", "feed", "feel" ]
```

This endpoint retrieves content for autocomplete.



### HTTP Request

`GET https://api.cludo.com/api/v3/{CustomerID}/{EngineID}/Autocomplete?text={query}<ID>`

<p><button id="search-try-it" class="try-it" data-definition="autocomplete">Try it</button></p>

### URL Parameters

Parameter | Description
--------- | -----------
CustomerID | The ID of your account.
EngineID | The ID of the engine you want to get autocomplete results from.
text | The search query.
