<h2 id="tools_quicklinks">Quicklinks</h2>

Quicklinks are useful if you want to redirect users to a specific url when they enter a pre-defined search term.

In this section we explain how to POST, GET & DELETE quicklinks.

<aside class="notice">
Read more about Quicklinks <a href="https://cludo.zendesk.com/hc/en-us/articles/115002466252-Quicklinks">here</a>
</aside>


#### HTTP requests

> The command below creates a quicklink on a specific engine

```shell
curl
-X POST \
-I https://api.cludo.com/api/quicklinks \
-u {CustomerId}:{CustomerKey} \
-d '{
	    terms: [{name: "searchWord"}],
        websiteid: {engineId},
        url: "https://urlToRedirectTo.com"
    }'
```

`POST https://api.cludo.com/api/quicklinks`

`GET https://api.cludo.com/api/engine/{engineId}/quicklinks`

`DELETE https://api.cludo.com/api/quicklinks/{quicklinkId}`

Parameter | Description
----- | ------
id | The id of the quicklink, usually a 4 digit number
engineId | The id of the engine where the quicklink should be added on
quicklinkId | The id of the quicklink.
terms | List of words to trigger the quicklink
name | Word to trigger the quicklink
url | The url to link to from the terms


> This command gets quicklink data from a specific engine

```shell
curl
-X GET \
-I https://api.cludo.com/api/engine/{engineId}/quicklinks \
-u {CustomerId}:{CustomerKey} \
```
> The above command returns data in the following JSON structure:

```json
[
    {
        "id": "{quickLinkId}",
        "url": "https://urlToRedirectTo.com",
        "terms": [
            {
                "name": "searchWord"
            }
        ],
        "websiteid": "{engineId}"
    }
]
```

> This command deletes quicklink data from a specific engine

```shell
curl
-X DELETE \
-I https://api.cludo.com/api/quicklinks/{quicklinkId} \
-u {CustomerId}:{CustomerKey} \
```
