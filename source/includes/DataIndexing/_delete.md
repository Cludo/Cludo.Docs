<h2 id="data-indexing_delete">Deleting data</h2>

If a page or file is removed from your website, you don't want for it to appear in your search results anymore, as it will lead to dead links. It will be removed upon a recrawl regardless, but if it can't wait, you can use this endpoint to manually delete it.

#### HTTP request

> The command below deletes search results:

```shell
curl
-X POST \
-I https://api.cludo.com/api/v3/{CustomerId}/content/{CrawlerId}/delete \
-u {CustomerId}:{API_Key} \
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
        "https://www.cludo.com/some-page/": "PageContent"
    },
    {
        "some-string": "PageContent"
    },
    {
        "https://www.cludo.com/some-file.pdf": "FileContent"
    }
]
```

The body consists of an array of key/value pairs. The key is the ID of the resource and the value is the type of the resource.

<table>
<thead>
<tr>
<th>Data</th>
<th>Type</th>
<th>Valid values</th>
</tr>
</thead>
<tbody>
<tr>
<td>Resource ID</td>
<td>String</td>
<td>Any. The ID of page and file resources will be their URL by default.</td>
</tr>
<tr>
<td>Resource Type</td>
<td>String</td>
<td>
<ul>
<li>FileContent</li>
<li>PageContent</li>
</ul>
</td>
</tr>
</tbody>
</table>