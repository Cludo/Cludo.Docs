<h3 id="full-searches_grouping">Grouping</h3>

```shell
-d perPage=10 \
-d page=2 \
```

```json
{
  "perPage": 10,
  "page": 2
}
```

Grouping allows you to slice a search result into batches, and return each bach in a controlled manner. This allows paging of search results. 

The `perPage` property controls the amount of search results returned in the HTTP response, wheras the `page` property selects the page to return.

Both properties must be a positive integer.