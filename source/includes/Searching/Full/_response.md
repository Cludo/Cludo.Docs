<h3 id="full-searches_response">HTTP Response</h3>



Depending on the requested `responseType` described [here](#full-searches_rendering), one of the two types of responses may be received. Their differences lies within how the search results, facets and suggestions are returned.

<aside class="notice">
To se a full table of all HTTP response body properties, click [here](#full-searches_response-table).
</aside>


#### *JsonObject* response

The *JsonObject* response returns all data as json models, to be processed client side by JavaScript or other code.

#### *JsonHtml* response

The *JsonHtml* response returns search results and facets as pre-rendered HTML code, ready to be injected into a HTML page.
