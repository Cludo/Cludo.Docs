<h2 id="data-indexing_delete">Deleting data</h2>

If a page or file is removed from your website, you then no longer wish for it to appear in searchresults, since it will lead to dead links. Dead search results will be removed upon a recrawl, but if it cannot wait, then use this endpoint.





#### HTTP request

> The command below deletes search results:

```shell
curl
-X POST \
-I https://api.cludo.com/api/v3/{CustomerId}/content/{CrawlerId}/delete \
-u {CustomerId}:{CustomerKey} \
```

`POST https://api.cludo.com/api/v3/{CustomerId}/content/{CrawlerId}/delete`

Parameter | Description
----- | ------
CustomerId | Your customer id
CrawlerId | The id of the crawler to delete the results from



