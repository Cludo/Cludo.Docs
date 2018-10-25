<h3 id="full-searches_request-table">Table of request properties</h3>

> Full HTTP request example:

```json
{
  "query": "The search string here",
  "operator": "or",

  "filters": {
    "range": ["Price", 20, 100]
  },
  "notFilters": {
    "date": ["EventDate", "20170601", "20170630"]
  },
  "postFilters": {
    "Category": ["Publications", "Events"]
  },
  "postFilterOperator": "or",
  "enableFacetFiltering": true,
  "enableRelatedSearches": true,

  "sort": {
    "City": "asc"
  },
  "valueBoost": [
    {
      "fieldName": "Category",
      "Boosts": [
        {
          "Boost": 23.4,
          "Values": ["A", "B", "C"]
        }
      ]
    }
  ],

  "responseType": "JsonHtml",
  "template": "MainSite Template",
  "overlay": "Overlay Template V2"
}
```

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Required</th>
      <th>Type</th>
      <th>Default&nbsp;value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <!-- QUERY -->
    <tr>
      <td colspan="5" style="text-align:center">**[Query](#full-searches_query)**</td>
    </tr>
    <tr>
      <td>query</td>
      <td>yes</td>
      <td>string</td>
      <td></td>
      <td>The text you want to search for.</td>
    </tr>
    <tr>
      <td>operator</td>
      <td>no</td>
      <td>enum</td>
      <td>*Engine specific*</td>
      <td>Specify if one or more query terms should match, or all terms must match.<br>
      Possible values are:
        <ul>
          <li>**or**</li>
          <li>**and**</li>
        </ul>
      </td>
    </tr>
    <!-- FILTERING -->
    <tr>
      <td colspan="5" style="text-align:center">**[Filtering](#full-searches_filtering)**</td>
    </tr>
    <tr>
      <td>filters</td>
      <td>no</td>
      <td>Filter Model</td>
      <td></td>
      <td>Specify `range` and `date` filters to limit the search results.</td>
    </tr>
    <tr>
      <td>notFilters</td>
      <td>no</td>
      <td>Filter Model</td>
      <td></td>
      <td>Specify exclusion `range` and `date` filters to limit the search results.</td>
    </tr>
    <tr>
      <td>postFilters</td>
      <td>no</td>
      <td>postFilter Model</td>
      <td></td>
      <td>Specify facet filters to limit the search results.</td>
    </tr>
    <tr>
      <td>postFiltersOperator</td>
      <td>no</td>
      <td>enum</td>
      <td>and</td>
      <td>The relation between post filters.<br>
      Possible values are:
        <ul>
          <li>**or**</li>
          <li>**and**</li>
        </ul>
      </td>
    </tr> 
    <tr>
      <td>enableFacetFiltering</td>
      <td>no</td>
      <td>bool</td>
      <td>false</td>
      <td>If you require post filters to be set on the HTTP response facets. 
      See also [Response facets](#full-searches_response_facets).</td>
    </tr>
    <!--RANKING-->
    <tr>
      <td colspan="5" style="text-align:center">**[Ranking](#full-searches_ranking)**</td>
    </tr>
    <tr>
      <td>sort</td>
      <td>no</td>
      <td>Sort Model</td>
      <td></td>
      <td>Set a value to override the default sort behavior with an explicit one.</td>
    </tr>
    <tr>
      <td>valueBoost</td>
      <td>no</td>
      <td>ValueBoost Model</td>
      <td></td>
      <td>Allows explicit search result boosting based on specific values.</td>
    </tr>
    <!--GROUPING-->
    <tr>
      <td colspan="5" style="text-align:center">**[Grouping](#full-searches_grouping)**</td>
    </tr>
    <tr>
      <td>perPage</td>
      <td>no</td>
      <td>uint32</td>
      <td>10</td>
      <td>Amount of search results in the response. Use together with `page` to batch the results.</td>
    </tr>
    <tr>
      <td>page</td>
      <td>no</td>
      <td>uint32</td>
      <td>1</td>
      <td>The page index of search results to return. Use together with `perPage` to batch the results.</td>
    </tr>
    <!-- RENDERING -->
    <tr>
      <td colspan="5" style="text-align:center">**[Rendering](#full-searches_rendering)**</td>
    </tr>
    <tr>
      <td>responseType</td>
      <td>no</td>
      <td>enum</td>
      <td>JsonObject</td>
      <td>The resulting format to return the search results as in the HTTP Response.</td>
    </tr>
    <tr>
      <td>template</td>
      <td>no</td>
      <td>string</td>
      <td></td>
      <td>The name of the template to use for rendering JsonHTML.</td>
    </tr>
    <tr>
      <td>overlay</td>
      <td>no</td>
      <td>string</td>
      <td></td>
      <td>The name of the overlay template to use for rendering JsonHTML.</td>
    </tr>
	<!--Not Available For Everybody-->
    <tr>
      <td colspan="5" style="text-align:center">**[Not Available For Everybody](#full-searches_relatedSearches)**</td>
    </tr>
	<tr>
      <td>enableRelatedSearches*</td>
      <td>no</td>
      <td>bool</td>
      <td>false</td>
      <td>If you want to be able to get Related Searches for specific search term.</td>
    </tr>
  </tbody>
</table>