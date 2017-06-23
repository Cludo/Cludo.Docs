## Authorization

Cludo uses two types of authorization. For public searching Cludo uses our custom [Search authorization](#authorization_search), wheras all other api endpoints require [Basic authorization](#authorization_basic).





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

When a search engine is for public domain, the *SiteKey* is not validated, and should just be set to some random string of at least one character. Only non-public search engines which is used for restricted domains, Intranet sites or other solutions which need limited access, need the SiteKey. 

If you wish to create a non-public search engine, please [contact](https://www.cludo.com/en/contact/) Cludo for more information on the setup procedure.





<h2 id="authorization_basic">Basic authorization</h2>

```shell
curl -X GET \
-I https://api.cludo.com/api/v3/search \
-u {CustomerId}:{CustomerKey} \

#result header example:
> GET /api/v3/search HTTP/1.1
> Host: https://api.cludo.com
> Authorization: Basic Q3VzdG9tZXJJZDpDdXN0b21lcktleQ==
```

All API endpoints, except search, requires [Basic auth](http://en.wikipedia.org/wiki/Basic_access_authentication) over HTTP, where the username is your CustomerId, and the password is your CustomerKey. You can [contact](https://www.cludo.com/en/contact/) Cludo to get your id and key.

Most HTTP clients provide ways to automatically set your id and key upon the request header, but sometimes you may need to set it explicity. To do so, Base64-encode a string containing your id and key separated by a `:`.

`Authorization: Basic <Base64({CustomerId}:{CustomerKey})>`

<aside class="notice">
You must replace <code>CustomerId</code> with your customer id and the <code>CustomerKey</code> with your personal API key.
</aside>
