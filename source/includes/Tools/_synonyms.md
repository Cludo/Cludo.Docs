<h2 id="tools_synonyms">Synonyms</h2>

Synonyms are useful if you have the content your visitors are looking for, but they're searching for other words for the same thing.

<aside class="notice">You can read more about synonyms <a href="https://cludo.zendesk.com/hc/en-us/articles/115002580111-Synonyms" target="_blank">here</a>.</aside>

<h3 id="tools_synonyms_dataStructures">Data structures</h3>

<h4>Synonym</h4>

```json
{
    "id": 9457415,
    "name": "vehicle",
    "searchword": "car",
    "language": "en",
    "url": "http://cludo.com/9457415/"
}
```

Key | Type | Description
--- | --- | ---
id | int | The ID of the synonym
name | string | The actual synonym
searchword | string | The term that should activate the synonym
language | string | A two-letter ISO language code
url | string | Legacy, disregard

<h3 id="tools_synonyms_getAllByLanguage">Get all synonyms by language</h3>

Get all synonyms for a specific language.

<h4>Request</h4>

```shell
$ curl "https://api.cludo.com/api/synonyms/en"
    -u 4545589:3ede38fdc0824e18bb3adb9a21fbbdc8
```

`GET https://api.cludo.com/api/synonyms/<Language>`

<h5>URL parameters</h5>

Parameter | Type | Description
--- | --- | ---
Language | string | A two-letter ISO language code

<h4>Response</h4>

Will return an array of synonyms. See [data structures](#tools_synonyms_dataStructures).

<h3 id="tools_synonyms_getSingle">Get single synonym</h3>

Get a specific synonym.

<h4>Request</h4>

```shell
$ curl "https://api.cludo.com/api/synonyms/9457415"
    -u 4545589:3ede38fdc0824e18bb3adb9a21fbbdc8
```

`GET https://api.cludo.com/api/synonyms/<Synonym ID>`

<h5>URL parameters</h5>

Parameter | Type | Description
--- | --- | ---
Synonym ID | int | The ID of the specific synonym

<h4>Response</h4>

Will return a single synonym. See [data structures](#tools_synonyms_dataStructures).

<h3 id="tools_synonyms_create">Create synonym</h3>

Create a synonym.

<h4>Request</h4>

```shell
$ curl "https://api.cludo.com/api/synonyms"
    -X POST
    -u 4545589:3ede38fdc0824e18bb3adb9a21fbbdc8
    -H "Content-Type: application/json"
    -d '{
            "name": "vehicle",
            "searchword": "car",
            "language": "en"
        }'
```

`POST https://api.cludo.com/api/synonyms`

<h5>Body</h5>

A single synonym. See [data structures](#tools_synonyms_dataStructures).

<h4>Response</h4>

Will return the created synonym. See [data structures](#tools_synonyms_dataStructures).

<h3 id="tools_synonyms_update">Update synonym</h3>

Update a specific synonym.

<h4>Request</h4>

```shell
$ curl "https://api.cludo.com/api/synonyms/9457415"
    -X PUT
    -u 4545589:3ede38fdc0824e18bb3adb9a21fbbdc8
    -H "Content-Type: application/json"
    -d '{
            "name": "car",
            "searchword": "vehicle",
            "language": "en"
        }'
```

`PUT https://api.cludo.com/api/synonyms/<Synonym ID>`

<h5>URL parameters</h5>

Parameter | Type | Description
--- | --- | ---
Synonym ID | int | The ID of the specific synonym

<h5>Body</h5>

A single synonym. See [data structures](#tools_synonyms_dataStructures).

<h4>Response</h4>

Will return the updated synonym. See [data structures](#tools_synonyms_dataStructures).

<h3 id="tools_synonyms_delete">Delete synonym</h3>

Delete a specific synonym.

<h4>Request</h4>

```shell
$ curl "https://api.cludo.com/api/synonyms/9457415"
    -X DELETE
    -u 4545589:3ede38fdc0824e18bb3adb9a21fbbdc8
```

`DELETE https://api.cludo.com/api/synonyms/<Synonym ID>`

<h5>URL parameters</h5>

Parameter | Type | Description
--- | --- | ---
Synonym ID | int | The ID of the specific synonym