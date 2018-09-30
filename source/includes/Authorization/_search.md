<h2 id="authorization_search">Search authorization</h2>

```shell
curl -X GET \
-I https://api.cludo.com/api/v3/search \
-H "Authorization: SiteKey Q3VzdG9tZXJJZDpTaXRlSWQ6U2l0ZUtleQ==" \

#result header example:
> GET /api/v3/search HTTP/1.1
> Host: https://api.cludo.com
> Authorization: SiteKey Q3VzdG9tZXJJZDpTaXRlSWQ6U2l0ZUtleQ==
```

When making a search, you must set a authorization header with the `SiteKey` authorization type.

`Authorization: SiteKey <Base64({CustomerId}:{SiteId}:{SiteKey})>`

This authorization type consists of a Base64-encoding of your *CustomerId*, the *SiteId* to access, and the *SiteKey* separated by `:`.

SiteKey is only used for public access to search content. For intranet and secure solutions, use *Basic authorization*.

If you wish to create a non-public search engine, please [contact](https://www.cludo.com/en/contact/) Cludo for more information on the setup procedure.