<h2 id="authentication_siteKey">Site key authentication</h2>

<aside class="notice">Site key authentication is only required for public facing search. Use [basic authentication](#authentication_basic) for intranet and secure solutions.</aside>

<h4>Header</h4>

```shell
$ curl "https://api.cludo.com/api/v3/search"
    -H "Authorization: SiteKey NDU0NTU4OTo3NTc4MDMwOjNlZGUzOGZkYzA4MjRlMThiYjNhZGI5YTIxZmJiZGM4"
```

<aside class="warning">The credentials **must** be Base64-encoded as a **single unit**.</aside>

`Authorization: SiteKey <Customer ID>:<Engine ID>:<API Key>`

<h5>Parameters</h5>

Key | Type | Description
--- | --- | ---
Customer ID | int | Your ID
Engine ID | int | The ID of the specific engine
API Key | string | Your API key