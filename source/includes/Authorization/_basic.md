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