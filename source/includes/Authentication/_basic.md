<h2 id="authentication_basic">Basic authentication</h2>

<aside class="notice">Unless stated otherwise, basic authentication is required for all API requests.</aside>

<h4>Header</h4>

```shell
$ curl "https://api.cludo.com/api/v3/someEndpoint"
    -u 4545589:3ede38fdc0824e18bb3adb9a21fbbdc8

$ curl "https://api.cludo.com/api/v3/someEndpoint"
    -H "Authorization: Basic NDU0NTU4OTozZWRlMzhmZGMwODI0ZTE4YmIzYWRiOWEyMWZiYmRjOA=="
```

`Authorization: Basic <Customer ID>:<API Key>`

<h5>Parameters</h5>

Key | Type | Description
--- | --- | ---
Customer ID | int | Your ID
API Key | string | Your API key