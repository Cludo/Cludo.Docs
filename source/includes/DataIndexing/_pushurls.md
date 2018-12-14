<h2 id="data-indexing_pushurls">URL pushing</h2>

Since full domain crawls are only made rarely (maybe once a day), then new pages to your website won't appear in search results before the domain is recrawled. If you cannot wait for a complete recrawl, then you may push the urls in question, which will be crawled within a couple of minutes.

#### HTTP request

> The command below pushes urls for (re)crawling:

```shell
$ curl "https://api.cludo.com/api/v3/4545589/content/2368899/pushurls"
    -X POST
    -u 4545589:3ede38fdc0824e18bb3adb9a21fbbdc8
    -H "Content-Type: application/json"
    -d '[
            "https://www.cludo.com/en/products/",
            "https://www.cludo.com/en/features/"
        ]'
```

`POST https://api.cludo.com/api/v3/<Customer ID>/content/<Crawler ID>/pushurls`

Parameter | Description
----- | ------
Customer ID | Your ID
Crawler ID | The ID of the specific crawler you'd like to crawl the given URLs

#### HTTP body

The body content is simply a newline list of urls to crawl.