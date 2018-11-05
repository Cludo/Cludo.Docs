<h2 id="authentication_siteKey">Site key authentication</h2>

Site key authentication is a means of authentication that can only be used for search, and exists to facilitate public facing search where you <strong>don't</strong> want to expose your API key, which is otherwise the case with [basic authentication](#authentication_basic).

<h4>Header</h4>

```shell
$ curl "https://api.cludo.com/api/v3/search"
    -H "Authorization: SiteKey NDU0NTU4OTo3NTc4MDMwOlNlYXJjaEtleQ=="
```

<aside class="warning">The credentials **must** be Base64-encoded as a **single unit**.</aside>

`Authorization: SiteKey <Customer ID>:<Engine ID>:SearchKey`

<h5>Parameters</h5>

Key | Type | Description
--- | --- | ---
Customer ID | int | Your ID
Engine ID | int | The ID of the specific engine