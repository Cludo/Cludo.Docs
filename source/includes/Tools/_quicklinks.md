<h2 id="tools_quicklinks">Quicklinks</h2>

Quicklinks are useful if you want to redirect your visitors to a specific url when they search for a pre-defined term.

<aside class="notice">You can read more about quicklinks <a href="https://cludo.zendesk.com/hc/en-us/articles/115002466252-Quicklinks" target="_blank">here</a>.</aside>

<h3 id="tools_quicklinks_structures">Structures</h3>

<h4>Quicklink</h4>

```json
{
    "id": 5807805,
    "websiteId": 7578030,
    "url": "https://www.cludo.com/contact/",
    "terms": []
}
```

Key | Type | Description
--- | --- | ---
id | int | The ID of the quicklink
websiteId | int | The ID of the engine the quicklink belongs to
url | string | The URL to redirect to
terms | array | An array of terms

<h4>Term</h4>

```json
{
    "name": "contact"
}
```

Key | Type | Description
--- | --- | ---
name | string | The term that should trigger the redirect

<h3 id="tools_quicklinks_getbyid">Get quicklink</h3>

Get a specific quicklink.

<h4>Request</h4>

```shell
$ curl "https://api.cludo.com/api/quicklinks/5807805"
    -u 4545589:3ede38fdc0824e18bb3adb9a21fbbdc8
```

`GET https://api.cludo.com/api/quicklinks/<Quicklink ID>`

<h5>URL parameters</h5>

Parameter | Type | Description
--- | --- | ---
Quicklink ID | int | The ID of the specific quicklink

<h4>Response</h4>

Will return a single quicklink. See [structures](#tools_quicklinks_structures).

<h3 id="tools_quicklinks_getbyengine">Get quicklinks by engine</h3>

Get all quicklinks for a specific engine.

<h4>Request</h4>

```shell
$ curl "https://api.cludo.com/api/engine/7578030/quicklinks"
    -u 4545589:3ede38fdc0824e18bb3adb9a21fbbdc8
```

`GET https://api.cludo.com/api/engine/<Engine ID>/quicklinks`

<h5>URL parameters</h5>

Parameter | Type | Description
--- | --- | ---
Engine ID | int | The ID of the specific engine

<h4>Response</h4>

Will return an array of quicklinks. See [structures](#tools_quicklinks_structures).

<h3 id="tools_quicklinks_getbyengineandterm">Get quicklinks by engine and term</h3>

Get all quicklinks for a specific engine and term.

<h4>Request</h4>

```shell
$ curl "https://api.cludo.com/api/engine/7578030/quicklinkterms?searchword=contact"
    -u 4545589:3ede38fdc0824e18bb3adb9a21fbbdc8
```

`GET https://api.cludo.com/api/engine/<Engine ID>/quicklinkterms?searchword=<Term>`

<h5>URL parameters</h5>

Parameter | Type | Description
--- | --- | ---
Engine ID | int | The ID of the specific engine

<h5>Query parameters</h5>

Parameter | Type | Description
--- | --- | ---
Term | string | The specific term.

<h4>Response</h4>

Will return an array of quicklinks. See [structures](#tools_quicklinks_structures).

<h3 id="tools_quicklinks_create">Create quicklink</h3>

Create a quicklink.

<h4>Request</h4>

```shell
$ curl "https://api.cludo.com/api/quicklinks"
    -X POST
    -u 4545589:3ede38fdc0824e18bb3adb9a21fbbdc8
    -H "Content-Type: application/json"
    -d '{
           "websiteId": 7578030,
           "url": "https://www.cludo.com/contact/",
           "terms": [
               {
                   "name": "contact"
               }
           ]
       }'
```

`POST https://api.cludo.com/api/quicklinks`

<h5>Body</h5>

<aside class="warning">The id key **must** be omitted.</aside>

A single quicklink. See [structures](#tools_quicklinks_structures).

<h4>Response</h4>

Will return the created quicklink. See [structures](#tools_quicklinks_structures).

<h3 id="tools_quicklinks_update">Update quicklink</h3>

Update a specific quicklink.

<h4>Request</h4>

```shell
$ curl "https://api.cludo.com/api/quicklinks/5807805"
    -X PUT
    -u 4545589:3ede38fdc0824e18bb3adb9a21fbbdc8
    -H "Content-Type: application/json"
    -d '{
           "websiteId": 7578030,
           "url": "https://www.cludo.com/contact/",
           "terms": [
               {
                   "name": "contact"
               }
           ]
       }'
```

```shell
$ curl "https://api.cludo.com/api/quicklinks"
    -X POST
    -u 4545589:3ede38fdc0824e18bb3adb9a21fbbdc8
    -H "Content-Type: application/json"
    -d '{
           "id": 5807805,
           "websiteId": 7578030,
           "url": "https://www.cludo.com/contact/",
           "terms": [
               {
                   "name": "contact"
               }
           ]
       }'
```

`PUT https://api.cludo.com/api/quicklinks/<Quicklink ID>`

`POST https://api.cludo.com/api/quicklinks`

<h5>URL parameters</h5>

Parameter | Type | Description
--- | --- | ---
Quicklink ID | int | The ID of the specific quicklink

<h5>Body</h5>

<aside class="notice">The id key can be omitted with a PUT request, as it won't be respected.</aside>
<aside class="warning">The id key **must** be included with a POST request.</aside>

A single quicklink. See [structures](#tools_quicklinks_structures).

<h4>Response</h4>

Will return the updated quicklink. See [structures](#tools_quicklinks_structures).

<h3 id="tools_quicklinks_delete">Delete quicklink</h3>

Delete a quicklink.

<h4>Request</h4>

```shell
$ curl "https://api.cludo.com/api/quicklinks/5807805"
    -X DELETE
    -u 4545589:3ede38fdc0824e18bb3adb9a21fbbdc8
```

`DELETE https://api.cludo.com/api/quicklinks/<Quicklink ID>`

<h5>URL parameters</h5>

Parameter | Type | Description
--- | --- | ---
Quicklink ID | int | The ID of the specific quicklink