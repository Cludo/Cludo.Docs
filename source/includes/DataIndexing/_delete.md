<h2 id="data-indexing_delete">Deleting data</h2>

If a page or file is removed from your website, you don't want for it to appear in your search results anymore, as it will lead to dead links. It will be removed upon a recrawl regardless, but if it can't wait, you can use this endpoint to manually delete it.

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

#### HTTP body

> An example of a HTTP body for a data delete request:

```json
[
    {
        "123456": "PageContent"
    },
    {
        "123456": "FileContent"
    }
]
```

The body consists of an array of key/value pairs. The key is the ID of the resource and the value is the type of the resource.