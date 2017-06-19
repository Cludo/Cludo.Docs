# Introduction

Welcome to the Cludo API! You can use our API to both do searches and access your statistics.

The documentation is a work in progress, and not all API calls are documented yet. All calls which can be found in the dashboard can be called and accessed from the API.

<aside class="warning">Some features don't work out of the box without using the Cludo JavaScript. You will have to do your own implementation of Quick links and the tracking of search results.</aside>


# Authentication

> To authorize you need to use your Customer Key (API Key) and CustomerID and base 64 encode it:

```csharp
Convert.ToBase64String(Encoding.UTF8.GetBytes(customerId + ":" + CustomerKey)));
```

```bash
# With shell, you can just pass the correct header with each request
curl -i -H "Authorization: Basic Base64(CustomerId:CustomerKey)" 
-H "Content-Type: application/json"
```


> Make sure to replace `CustomerId` and `CustomerKey` with your Customer ID and your Customer key.

Cludo uses Customer keys (API keys) to allow access to the API. You can <a href="https://www.cludo.com/en/contact/" target="_blank">contact</a> us to get your key.

Cludo expects the API key to be included in all API requests to the server in a header that looks like the following:

`Authorization: Basic [Base64(CustomerId:CustomerKey)]`

<aside class="notice">
You must replace <code>CustomerId</code> with your customer id and the <code>CustomerKey</code> with your personal API key.
</aside>
