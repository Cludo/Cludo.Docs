### HTTP response

Depending on the `responseType` set in the request, different types of responses may be received.





#### *Not specified* response

> An example of a HTTP response with no response type:

```json
[
    "Feats",
    "Feets",
    "Features"
]
```

If no response type is set, then an array of titles will be returned





#### *JsonHtml* response

> Full JsonHtml HTTP response example:

```json
{
  "QueryId": "c77f19d9a4b243b182466ca31cf9848c",
  "ResponseTime": 40,
  "TotalResults": 8,
  "TotalSuggestions": 2,
  "Facets": "<A HTML STRING>",
  "SearchResult": "<A HTML STRING>"
}
```

  <thead>
    <tr>
      <th>Parameter</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>QueryId</td>
      <td>string</td>
      <td>A random string identifying the search query.</td>
    </tr>
    <tr>
      <td>ResponseTime</td>
      <td>uint64</td>
      <td>The time in milliseconds it took the Cludo servers to make the search.</td>
    </tr>
    <tr>
      <td>TotalResults</td>
      <td>uint32</td>
      <td>The total amount of matches found.</td>
    </tr>
    <tr>
      <td>TotalSuggestions</td>
      <td>uint32</td>
      <td>The total amount of suggestions.</td>
    </tr>
    <tr>
      <td>Facets</td>
      <td>string</td>
      <td>The html generated string of the facets, created with the template set in the request.</td>
    </tr>
    <tr>
      <td>SearchResult</td>
      <td>string</td>
      <td>The html generated string of the search results, created with the template set in the request.</td>
    </tr>
  </tbody>
</table>





#### *JsonObject* response

> Full JsonObject HTTP response example:

```json
{
  "QueryId": "c77f19d9a4b243b182466ca31cf9848c",
  "ResponseTime": 40,
  "TotalResults": 8,
  "TotalSuggestions": 2,
  "Facets": {
    "Category": {
      "FieldName": "Category",
      "MissingCount": 0,
      "AllCount": 35,
      "Items": [
        {
          "Key": "News",
          "Count": 30,
          "Facets": {
             "NewsArea": {
              "FieldName": "NewsArea",
              "MissingCount": 0,
              "AllCount": 30,
              "Items": [
                {
                  "Key": "Sports",
                  "Count": 20,
                  "Facets": {}
                },
                {
                  "Key": "Politics",
                  "Count": 10,
                  "Facets": {}
                }
              ]
            }
          }
        },
          {
          "Key": "Events",
          "Count": 5,
          "Facets": {}
        }
      ]
    }  
  },
  "Results":[
    {
      "ResultIndex": 1,
      "Fields": {
        "Title": {
          "Field": "Title",
          "Value": "Amazing title about tollroads",
          "Values": [ "Amazing title about tollroads"],
          "Highlights": ["Amazing title about <b>tollroads</b>"],
          "IsArray": false
        },
        "Description":{
          "Field": "Description",
          "Value": "A long description",
          "Values": [ "A long description"],
          "Highlights": ["A long description"],
          "IsArray": false
        },
        "NewsArea":{
          "Field": "NewsArea",
          "Value": "Sports",
          "Values": ["Sports"],
          "Highlights": ["Sports"],
          "IsArray": false
        }
      },
      "FieldNames": [
        "Title",
        "Description",
        "NewsArea"
      ]
    }
  ],
  "Suggestions": [
    {
      "ResultIndex": 1,
      "Fields": {
        "Title": {
          "Field": "Title",
          "Value": "Amazing title about tollroads",
          "Values": [ "Amazing title about tollroads"],
          "Highlights": ["Amazing title about <b>tollroads</b>"],
          "IsArray": false
        },
        "Description":{
          "Field": "Description",
          "Value": "A long description",
          "Values": [ "A long description"],
          "Highlights": ["A long description"],
          "IsArray": false
        },
        "NewsArea":{
          "Field": "NewsArea",
          "Value": "Sports",
          "Values": ["Sports"],
          "Highlights": ["Sports"],
          "IsArray": false
        }
      },
      "FieldNames": [
        "Title",
        "Description",
        "NewsArea"
      ]
    }
  ]
}
```


<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>QueryId</td>
      <td>string</td>
      <td>A random string identifying the search query.</td>
    </tr>
    <tr>
      <td>ResponseTime</td>
      <td>uint64</td>
      <td>The time in milliseconds it took the Cludo servers to make the search.</td>
    </tr>
    <tr>
      <td>TotalResults</td>
      <td>uint32</td>
      <td>The total amount of matches found.</td>
    </tr>
    <tr>
      <td>TotalSuggestions</td>
      <td>uint32</td>
      <td>The total amount of suggestions.</td>
    </tr>
    <tr>
      <td>Facets</td>
      <td>Facet model</td>
      <td>Model containg all facets currently implemented on the engine.</td>
    </tr>
    <tr>
      <td>Results</td>
      <td>uint32</td>
      <td>The total amount of suggestions.</td>
    </tr>
    <tr>
      <td>Suggestions</td>
      <td>uint32</td>
      <td>The total amount of suggestions.</td>
    </tr>
  </tbody>
</table>