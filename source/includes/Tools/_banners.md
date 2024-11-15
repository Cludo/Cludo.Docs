<h2 id="tools_banners">Banners</h2>

Banners allow you to display custom content when users search for specific terms. They are excellent for promoting current information, upcoming events, promotions, or highlighting general information such as opening hours. Banners can also be used to suggest external links to users that would not otherwise appear in the search results.

<aside class="notice">You can read more about banners <a href="https://help.cludo.com/tools/banners" target="_blank">here</a>.</aside> 

<h3 id="tools_banners_dataStructures">Data structures</h3> 

<h4>Banner</h4>

```json
{
    "name": "My Banner",
    "htmlcode": "<p id=\"my_id\">some example content</p>... other html content",
    "bannerterms": [
        { "name": "trigger_term1" },
        { "name": "trigger_term2" }
    ],
    "websiteid": some_engine_identifier,
	"isDisabled": false,
    "from": "2024-11-14T22:00:00.000Z",
    "to": "2024-11-16T22:00:00.000Z"
}
```

Key | Type | Description
--- | --- | ---
name | string | The name of the banner.
htmlcode | string | The HTML content to display in the banner.
bannerterms | array	| A collection of terms/triggers that will display the banner.
websiteid |	int | The ID of the engine where the banner is displayed.
isDisabled | bool | A flag determining if the banner should be shown or not.
from | string | The start date and time (in ISO 8601 format) from when the banner should be active.
to | string | The end date and time (in ISO 8601 format) until when the banner should be active.

<h3 id="tools_banners_getAllBySite">Get all banners by engine</h3>

Retrieves all banners for a specific engine.

<h4>Request</h4>

```shell
$ curl "https://api-eu1.cludo.com/api/banners/site/13691"
    -u 4545589:3ede38fdc0824e18bb3adb9a21fbbdc8
```

`GET https://api-eu1.cludo.com/api/banners/site/<Engine ID>`

<h5>URL parameters</h5>

Parameter | Type | Description
--- | --- | ---
Engine ID | int | The ID of the specific engine for which to retrieve banners.

<h4>Response</h4>

Will return an array of banners. See [data structures](#tools_banners_dataStructures).

<h3 id="tools_banners_getSingle">Get single banner</h3>

Retrieves a specific banner by its ID.

<h4>Request</h4>

```shell
$ curl "https://api-eu1.cludo.com/api/banners/25048"
    -u 4545589:3ede38fdc0824e18bb3adb9a21fbbdc8
```

`GET https://api-eu1.cludo.com/api/banners/<Banner ID>`

<h5>URL parameters</h5>

Parameter | Type | Description
--- | --- | ---
Banner ID | int | The ID of the specific banner

<h4>Response</h4>

Will return a single banner. See [data structures](#tools_banners_dataStructures).

<h3 id="tools_banners_create">Create banner</h3>

Creates a new banner.

<h4>Request</h4>

```shell
$ curl "https://api-eu1.cludo.com/api/banners"
    -X POST
    -u 4545589:3ede38fdc0824e18bb3adb9a21fbbdc8
    -H "Content-Type: application/json"
    -d '{
            "name": "Example Banner",
            "htmlcode": "<p id=\"my_p\">my content</p>",
            "bannerterms": [{"name": "trigger_term1"}, {"name": "trigger_term2"}],
            "isDisabled": false,
            "websiteid": 1234,
            "from": "2024-11-14T22:00:00.000Z",
            "to": "2024-11-16T22:00:00.000Z"
        }'
```

`POST https://api-eu1.cludo.com/api/banners`

<h5>Body</h5>

A single synonyms group composed of multiple words which are synonyms. See [data structures](#tools_synonyms_dataStructures).

<h4>Response</h4>

A banner object containing the details of the new banner. See [data structures](#tools_banners_dataStructures).

<h3 id="tools_banners_update">Update banner</h3>

Updates a specific banner by its ID.

<h4>Request</h4>

```shell
$ curl "https://api-eu1.cludo.com/api/banners/1234"
    -X PUT
    -u 4545589:3ede38fdc0824e18bb3adb9a21fbbdc8
    -H "Content-Type: application/json"
    -d '{
            "id": 1234,
            "name": "Updated example Banner",
            "htmlcode": "<p id=\"my_p\">updated content</p>",
            "bannerterms": [
                { "name": "trigger_term1" },
                { "name": "trigger_term2" },
                { "name": "new_trigger_term3" }
            ],
            "isDisabled": false,
            "websiteid": 23454,
            "from": "2024-11-14T22:00:00.000Z",
            "to": "2024-11-16T22:00:00.000Z"
        }'
```

`PUT https://api-eu1.cludo.com/api/banners/<Banner ID>`

<h5>URL parameters</h5>

Parameter | Type | Description
--- | --- | ---
Banner ID | int | The ID of the specific banner to update

<h5>Body</h5>

A banner object with the updated details. See [data structures](#tools_banners_dataStructures).

<h4>Response</h4>

Will return the updated banner object. See [data structures](#tools_banners_dataStructures).

<h3 id="tools_banners_delete">Delete banner</h3>

Delete s banner by its ID.

<h4>Request</h4>

```shell
$ curl "https://api.cludo.com/api/banners/1234"
    -X DELETE
    -u 4545589:3ede38fdc0824e18bb3adb9a21fbbdc8
```

`DELETE https://api.cludo.com/api/banner/<Banner ID>`

<h5>Query parameters</h5>

Parameter | Type | Description
--- | --- | ---
Banner ID | int | The ID of the specific banner to be deleted