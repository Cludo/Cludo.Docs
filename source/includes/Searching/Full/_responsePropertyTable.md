<h3 id="full-searches_response-table">Table of response properties</h3>

Depending on the `responseType` property on the request, the reponse have different properties.





#### Common properties

Common properties for both response types are:

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
      <td>FixedQuery</td>
      <td>string</td>
      <td>If no results where found for the original query, the searchengine will attempt another search with spelling corrections. If so, the corrected terms will be displayed here.</td>
    </tr>
    <tr>
      <td>TotalDocument</td>
      <td>uint32</td>
      <td>The total amount of matches found.</td>
    </tr>
    <tr>
      <td>Banners</td>
      <td>Banner&nbsp;model&nbsp;array</td>
      <td>An array of banners matching the search query.</td>
    </tr>
    <tr>
      <td>Synonyms</td>
      <td>string array</td>
      <td>An array of synonyms matching the search query.</td>
    </tr>
    <tr>
      <td>GenerativeAnswerAvailable</td>
      <td>bool</td>
      <td>True/False indicating the likelihood for providing a good generative answer for the query.</td>
    </tr>
  </tbody>
</table>





#### *JsonObject* response

> Full JsonObject HTTP response example:

```json
{
  "QueryId": "c77f19d9a4b243b182466ca31cf9848c",
  "ResponseTime": 40,
  "FixedQuery": "tollroad",
  "Suggestions": [
    {
      "Text": "roadpricing",
    }
  ],
  "TotalDocument": 80,
  "TypedDocuments": [ 
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
  "Banners": [
    {
      "Banner":"<A HMTL STRING>",
      "Name":"My banner"
    }
  ],
  "Synonyms": [
    "highwaypricing"
  ],
  "RelatedSearchDocuments": [  
      {  
         "SearchTerm": "search term 1",
         "DocsCount": 10
      },
	  {  
         "SearchTerm": "search term 2",
         "DocsCount": 5
      }
   ]
}
```

Unique to the *JsonObject* response:

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
      <td>Suggestions</td>
      <td>suggestion model array</td>
      <td>An array of suggestions for alternative searches.</td>
    </tr>
    <tr>
      <td>TypedDocuments</td>
      <td>Typed&nbsp;document&nbsp;model&nbsp;array</td>
      <td>An array of the search results.</td>
    </tr>   
    <tr>
      <td>Facets</td>
      <td>Facet model</td>
      <td>Model containg all facets currently implemented on the engine.</td>
    </tr>
	<tr>
      <td>RelatedSearchDocuments</td>
      <td>Related searches model</td>
      <td>An array of related searches.</td>
    </tr>
  </tbody>
</table>





#### *JsonHtml* response

> Full JsonHtml HTTP response example:

```json
{
  "QueryId": "c77f19d9a4b243b182466ca31cf9848c",
  "ResponseTime": 40,
  "FixedQuery": "tollroad",
  "DidYouMean": "roadpricing",
  "TotalDocument": 80,
  "SearchResult": "<A HTML STRING>", 
  "Facets": "<A HTML STRING>",
  "RelatedSearchesResult": "<A HTML STRING>",
  "Banners": [
    {
      "Banner":"<A HMTL STRING>",
      "Name":"My banner"
    }
  ],
    "Synonyms": [
    "highwaypricing"
  ]
}
```

Unique to the *JsonHtml* response:

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
      <td>DidYouMean</td>
      <td>string</td>
      <td>The first suggestion, if any.</td>
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
	  <tr>
      <td>RelatedSearchesResult</td>
      <td>string</td>
      <td>The html generated string of the related searches results, created with the template set in the request.</td>
    </tr> 
  </tbody>
</table>