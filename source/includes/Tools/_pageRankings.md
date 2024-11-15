<h2 id="tools_pageRankings">Page rankings</h2>

Page rankings are useful if you want to control the top search results for your visitors when they search for a pre-defined term.

<aside class="notice">You can read more about page rankings <a href="https://help.cludo.com/tools/page-rankings/" target="_blank">here</a>.</aside>

<h3 id="tools_pageRankings_dataStructures">Data structures</h3>

<h4>Ranking group</h4>

```json
{
    "id": 1689348,
    "WebsiteId": 7578030,
    "name": "Hello, World!",
    "pages": [],
    "rankingterms": []
}
```

Key | Type | Description
--- | --- | ---
id | int | The ID of the ranking group
WebsiteId | int | The ID of the engine the ranking group belongs to
name | string | The name of the ranking group
pages | array | An array of **Ranked page**s
rankingterms | array | An array of **Term**s

<h4>Ranked page</h4>

```json
{
    "id": 6512590,
    "websiteid": 7578030,
    "RankingId": 1689348,
    "rank": 1,
    "showpage": true,
    "page": {}
}
```

Key | Type | Description
--- | --- | ---
id | int | The ID of the ranked page
websiteid | int | The ID of the engine the ranked page belongs to
RankingId | int | The ID of the ranking group the ranked page belongs to
rank | int | The rank of the ranked page
showpage | bool | Whether the ranked page should be included
page | **Page** | A **Page**

<h4>Page</h4>

```json
{
    "id": 9728711,
    "websiteid": 7578030,
    "pageid": "https://www.cludo.com/contact",
    "pageurl": "https://www.cludo.com/contact/",
    "searchable": true,
    "url": "http://cludo.com/9728711/",
    "website": "http://cludo.com/7578030/"
}
```

Key | Type | Description
--- | --- | ---
id | int | The ID of the page
websiteid | int | The ID of the engine the page belongs to
pageid | string | The unique identifier of the page. Usually the URL but could be any string
pageurl | string | The URL of the page
searchable | bool | Whether the page is searchable
url | string | Legacy, disregard
website | string | Legacy, disregard

<h4>Term</h4>

```json
{
    "id": 8720627,
    "rankingId": 1689348,
    "name": "hello"
}
```

Key | Type | Description
--- | --- | ---
id | int | The ID of the term
rankingId | int | The ID of the ranking group this term belongs to
name | string | The actual term

<h4>Indexed document</h4>

```json
{
    "url": "https://www.cludo.com/contact/",
    "title": "Contact",
    "documentId": "https://www.cludo.com/contact",
    "pageId": -1,
    "hasPageId": false,
    "isAddedAlready": false
}
```

Key | Type | Description
--- | --- | ---
url | string | The URL of the original resource
title | string | The title of the original resource
documentId | string | The unique identifier of the document
pageId | int | Legacy, disregard
hasPageId | bool | Legacy, disregard
isAddedAlready | bool | Whether the document is already added to a ranking group

<h3 id="tools_pageRankings_getAll">Get all page rankings</h3>

Get all page rankings for the entire account.

<h4>Request</h4>

```shell
$ curl "https://api.cludo.com/api/rankings"
    -u 4545589:3ede38fdc0824e18bb3adb9a21fbbdc8
```

`GET https://api.cludo.com/api/rankings`

<h4>Response</h4>

Will return an array of ranking groups. See [data structures](#tools_pageRankings_dataStructures).

<h3 id="tools_pageRankings_getAllByEngine">Get all page rankings by engine</h3>

Get all page rankings for a specific engine.

<h4>Request</h4>

```shell
$ curl "https://api.cludo.com/api/rankings/site/7578030"
    -u 4545589:3ede38fdc0824e18bb3adb9a21fbbdc8
```

`GET https://api.cludo.com/api/rankings/site/<Engine ID>`

<h5>URL parameters</h5>

Parameter | Type | Description
--- | --- | ---
Engine ID | int | The ID of the specific engine

<h4>Response</h4>

Will return an array of ranking groups. See [data structures](#tools_pageRankings_dataStructures).

<h3 id="tools_pageRankings_getSingle">Get single page ranking</h3>

Get a specific page ranking.

<h4>Request</h4>

```shell
$ curl "https://api.cludo.com/api/rankings/1689348"
    -u 4545589:3ede38fdc0824e18bb3adb9a21fbbdc8
```

`GET https://api.cludo.com/api/rankings/<Page ranking ID>`

<h5>URL parameters</h5>

Parameter | Type | Description
--- | --- | ---
Page ranking ID | int | The ID of the specific page ranking

<h4>Response</h4>

Will return a single ranking group. See [data structures](#tools_pageRankings_dataStructures).

<h3 id="tools_pageRankings_getIndexedDocuments">Get indexed documents</h3>

Get indexed documents for an engine by either title or URL similarity.

<h4>Request</h4>

```shell
$ curl "https://api.cludo.com/api/v3/9056485/7578030/search/alldocuments?filter=contact&type=title&functionType=pageranking&page=1&perpage=25"
    -X POST
    -u 4545589:3ede38fdc0824e18bb3adb9a21fbbdc8
    -H "Content-Type: application/json"
    -d '[
            "https://www.cludo.com/site-search-features",
            "https://www.cludo.com/intranet"
        ]'
```

`POST https://api.cludo.com/api/v3/<Customer ID>/<Engine ID>/search/alldocuments?filter=<Filter>&type=<Type>&functionType=<Function type>&page=<Page>&perpage=<Per page>`

<h5>URL parameters</h5>

Parameter | Type | Description
--- | --- | ---
Customer ID | int | Your ID
Engine ID | int | The ID of the specific engine
Filter | string | The search term
Type | string | How you want it to match on the filter. Either **any**, **title**, or **url**
Function type | string | In this context, this **must** be **pageranking**
Page | int | Used for pagination. If omitted, it will default to **1**
Per page | int | Used for pagination. If omitted, it will default to **25**

<h5>Body</h5>

An array of unique identifiers for documents that you want to exclude from the results. Otherwise, just an empty array.

<h4>Response</h4>

Will return an array of indexed documents. See [data structures](#tools_pageRankings_dataStructures).

<h3 id="tools_pageRankings_create">Create page ranking</h3>

Create a page ranking.

<h4>Request</h4>

```shell
$ curl "https://api.cludo.com/api/rankings"
    -X POST
    -u 4545589:3ede38fdc0824e18bb3adb9a21fbbdc8
    -H "Content-Type: application/json"
    -d '{
            "WebsiteId": 7578030,
            "name": "Hello, World!",
            "pages": [
                {
                    "websiteid": 7578030,
                    "rank": 1,
                    "showpage": true,
                    "page": {
                        "name": "Contact Cludo",
                        "websiteid": 7578030,
                        "pageid": "https://www.cludo.com/contact",
                        "pageurl": "https://www.cludo.com/contact/",
                        "searchable": true
                    }
                }
            ],
            "rankingterms": [
                {
                    "name": "hello"
                }
            ]
        }'
```

`POST https://api.cludo.com/api/rankings`

<h5>Body</h5>

<aside class="warning">The id key **must** be omitted.</aside>
<aside class="warning">It's important that the pageid key is an exact match with the unique identifier we have for the document internally. It's usually the same as the URL, but it could be any string. See <a href="#tools_pageRankings_getIndexedDocuments">Get indexed documents</a> for a way to obtain it.</aside>

A single ranking group. See [data structures](#tools_pageRankings_dataStructures).

<h4>Response</h4>

Will return the created ranking group. See [data structures](#tools_pageRankings_dataStructures).

<h3 id="tools_pageRankings_update">Update page ranking</h3>

Update a specific page ranking.

<h4>Request</h4>

```shell
$ curl "https://api.cludo.com/api/rankings/1689348"
    -X PUT
    -u 4545589:3ede38fdc0824e18bb3adb9a21fbbdc8
    -H "Content-Type: application/json"
    -d '{
            "WebsiteId": 7578030,
            "name": "Hello, World!",
            "pages": [
                {
                    "websiteid": 7578030,
                    "rank": 1,
                    "showpage": true,
                    "page": {
                        "name": "The next generation of site search", 
                        "websiteid": 7578030,
                        "pageid": "https://www.cludo.com",
                        "pageurl": "https://www.cludo.com/",
                        "searchable": true
                    }
                },
                {
                    "id": 6512590,
                    "websiteid": 7578030,
                    "rank": 2,
                    "showpage": true,
                    "page": {
                        "name": "Contact Cludo",
                        "id": 9728711,
                        "websiteid": 7578030,
                        "pageid": "https://www.cludo.com/contact",
                        "pageurl": "https://www.cludo.com/contact/",
                        "searchable": true
                    }
                }
            ],
            "rankingterms": [
                {
                    "id": 8720627,
                    "rankingId": 1689348,
                    "name": "hello"
                },
                {
                    "name": "world"
                }
            ]
        }'
```

```shell
$ curl "https://api.cludo.com/api/rankings"
    -X POST
    -u 4545589:3ede38fdc0824e18bb3adb9a21fbbdc8
    -H "Content-Type: application/json"
    -d '{
            "id": 1689348,
            "WebsiteId": 7578030,
            "name": "Hello, World!",
            "pages": [
                {
                    "websiteid": 7578030,
                    "rank": 1,
                    "showpage": true,
                    "page": {
                        "name": "The next generation of site search", 
                        "websiteid": 7578030,
                        "pageid": "https://www.cludo.com",
                        "pageurl": "https://www.cludo.com/",
                        "searchable": true
                    }
                },
                {
                    "id": 6512590,
                    "websiteid": 7578030,
                    "rank": 2,
                    "showpage": true,
                    "page": {
                        "name": "Contact Cludo",
                        "id": 9728711,
                        "websiteid": 7578030,
                        "pageid": "https://www.cludo.com/contact",
                        "pageurl": "https://www.cludo.com/contact/",
                        "searchable": true
                    }
                }
            ],
            "rankingterms": [
                {
                    "id": 8720627,
                    "rankingId": 1689348,
                    "name": "hello"
                },
                {
                    "name": "world"
                }
            ]
        }'
```

`PUT https://api.cludo.com/api/rankings/<Page ranking ID>`

`POST https://api.cludo.com/api/rankings`

<h5>URL parameters</h5>

Parameter | Type | Description
--- | --- | ---
Page ranking ID | int | The ID of the specific page ranking

<h5>Body</h5>

<aside class="notice">The id key can be omitted with a PUT request, as it won't be respected.</aside>
<aside class="warning">The id key **must** be included with a POST request.</aside>
<aside class="warning">It's important that the pageid key is an exact match with the unique identifier we have for the document internally. It's usually the same as the URL, but it could be any string. See <a href="#tools_pageRankings_getIndexedDocuments">Get indexed documents</a> for a way to obtain it.</aside>

A single ranking group. See [data structures](#tools_pageRankings_dataStructures).

<h4>Response</h4>

Will return the updated ranking group. See [data structures](#tools_pageRankings_dataStructures).

<h3 id="tools_pageRankings_delete">Delete page ranking</h3>

Delete a specific page ranking.

<h4>Request</h4>

```shell
$ curl "https://api.cludo.com/api/rankings/1689348"
    -X DELETE
    -u 4545589:3ede38fdc0824e18bb3adb9a21fbbdc8
```

`DELETE https://api.cludo.com/api/rankings/<Page ranking ID>`

<h5>URL parameters</h5>

Parameter | Type | Description
--- | --- | ---
Page ranking ID | int | The ID of the specific page ranking