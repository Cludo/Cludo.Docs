<h3 id="full-searches_query">Query</h3>

```shell
-d query=My search string \
-d operator=or \
```

```json
{
  "query": "My search string",
  "operator": "or"
}
```

When making a search, the main feature is the user text input, specified with the `query` property. This property is used by the searchengine to filter and rank the search results based on importance. A query is simply just the terms you wish to exist in the search result, such as:

`school activity`

In this example search results containing either *school* or *activity* will be returned, but if a search result contains both terms, it will be considered more important, and will be shown before search results containin only one of the terms.

<aside class="success">
Plurizations of words are taken care of, by the search engine, so *activity* will also search for *activities*, and vice versa.
</aside>

The default behavior for all searches is to match at least one term. The alternative is to require all terms to match. To change the behavior for a search, just set the `operator` property.<br>Possible values for the `operator` are:

* **or**
* **and**

<aside class="notice">
It is possible to change the default operator behavior for all searches by [contacting](https://www.cludo.com/en/contact-us/) Cludo.
</aside>

#### Advanced queries 

If more advanced queries are needed, either use the other [HTTP request properties](#full-searches_query-parameters), or use the [query string syntax](#query-string-syntax).