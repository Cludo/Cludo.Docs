<h2 id="data-indexing_push">Data pushing</h2>

If you don't have any crawlers setup, or know exactly how your data is stored, you may directly push search results into your data storage with this endpoint.





#### HTTP request

> The command below indexes data directly:

```shell
curl
-X POST \
-I https://api.cludo.com/api/v3/{CustomerId}/content/{CrawlerId}/push \
-u {CustomerId}:{API_Key} \
```

`POST https://api.cludo.com/api/v3/{CustomerId}/content/{CrawlerId}/push`

Parameter | Description
----- | ------
CustomerId | Your customer id
CrawlerId | The id of the crawler to index the data into






#### HTTP body

> An example of a HTTP body for a data index request:

```json
[
  {
    "Title":"My title",
    "Description":"Description",
    "Type": "PageContent",
    "CustomField1":222,
    "CustomField2":"News"
  },
  {
    "Title":"My title",
    "Description":"Description",
    "Type": "PageContent",
    "CustomField1":123,
    "CustomField2":"Events",
  }
]
```

The body consists of result models of the data you wish to index. Each model consist of the field name with the associated value to set.

See an example in the code menu.

<h5>Body/query parameters</h5>

Key | Type | Description
--- | --- | ---
Title | string | The title of a search result
Description | string | The description of a search result
Type | string | Must be <b>PageContent</b> for pages and <b>FileContent</b> for files
CustomField | string | Custom field, can be set to anything
