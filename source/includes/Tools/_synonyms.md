<h2 id="tools_synonyms">Synonyms</h2>

Synonyms are useful if you have the content your visitors are looking for, but they're searching for other words for the same thing.

<aside class="notice">You can read more about synonyms <a href="https://cludo.zendesk.com/hc/en-us/articles/115002580111-Synonyms" target="_blank">here</a>.</aside>

<h3 id="tools_synonyms_dataStructures">Data structures</h3>

<h4>Synonyms Group</h4>

```json
{
	"groupId": 1,
	"words": ["work", "job", "career"],
    "language": "en"
}
```

Key | Type | Description
--- | --- | ---
groupId | int | The ID of the synonyms group
words | array | Collection of words which are synonyms
language | string | A two-letter ISO language code

<h3 id="tools_synonyms_getAllByLanguage">Get all synonyms by language</h3>

Get all synonyms groups for a specific language.

<h4>Request</h4>

```shell
$ curl "https://api.cludo.com/api/synonymsgroup/en"
    -u 4545589:3ede38fdc0824e18bb3adb9a21fbbdc8
```

`GET https://api.cludo.com/api/synonymsgroup/<Language>`

<h5>URL parameters</h5>

Parameter | Type | Description
--- | --- | ---
Language | string | A two-letter ISO language code

<h4>Response</h4>

Will return an array of synonyms groups. See [data structures](#tools_synonyms_dataStructures).

<h3 id="tools_synonyms_getSingle">Get single synonyms group</h3>

Get a specific synonyms group.

<h4>Request</h4>

```shell
$ curl "https://api.cludo.com/api/synonymsgroup/9457415"
    -u 4545589:3ede38fdc0824e18bb3adb9a21fbbdc8
```

`GET https://api.cludo.com/api/synonymsgroup/<SynonymGroupID>`

<h5>URL parameters</h5>

Parameter | Type | Description
--- | --- | ---
SynonymGroupID | int | The ID of the specific synonyms group

<h4>Response</h4>

Will return a single synonyms group. See [data structures](#tools_synonyms_dataStructures).

<h3 id="tools_synonyms_create">Create Synonyms Group</h3>

Create a synonyms group.

<h4>Request</h4>

```shell
$ curl "https://api.cludo.com/api/synonymsgroup"
    -X POST
    -u 4545589:3ede38fdc0824e18bb3adb9a21fbbdc8
    -H "Content-Type: application/json"
    -d '{
		"words": ["work", "job", "career"],
		"language": "en"
	}'
```

`POST https://api.cludo.com/api/synonymsgroup`

<h5>Body</h5>

A single synonyms group composed of multiple words which are synonyms. See [data structures](#tools_synonyms_dataStructures).

<h4>Response</h4>

Will return the created synonyms group. See [data structures](#tools_synonyms_dataStructures).

<h3 id="tools_synonyms_update">Update Synonyms Group</h3>

Update a specific synonyms group.

<h4>Request</h4>

```shell
$ curl "https://api.cludo.com/api/synonymsgroup"
    -X PUT
    -u 4545589:3ede38fdc0824e18bb3adb9a21fbbdc8
    -H "Content-Type: application/json"
    -d '{
			"groupId": 1,
            "words": ["work", "job", "opportunity"],
            "language": "en"
        }'
```

`PUT https://api.cludo.com/api/synonyms/<SynonymsGroupID>`

<h5>Payload data in JSON Format</h5>

Parameter | Type | Description
--- | --- | ---
SynonymsGroupID | int | The ID of the specific synonyms group
words | array | The new/updated words
language | string | A two-letter ISO language code

<h5>Body</h5>

A single synonyms group. See [data structures](#tools_synonyms_dataStructures).

<h4>Response</h4>

Will return the updated synonyms group. See [data structures](#tools_synonyms_dataStructures).

<h3 id="tools_synonyms_delete">Delete synonym</h3>

Delete one or more Synonyms Group/s.

<h4>Request</h4>

```shell
$ curl "https://api.cludo.com/api/synonymsgroup?groupIds=1&groupIds=2&groupIds=3"
    -X DELETE
    -u 4545589:3ede38fdc0824e18bb3adb9a21fbbdc8
```

`DELETE https://api.cludo.com/api/synonymsgroup?groupIds=<SynonymGroupID>&groupIds=<SynonymGroupID>`

<h5>Query parameters</h5>

Parameter | Type | Description
--- | --- | ---
GroupIDs | int | The ID of the specific synonyms group