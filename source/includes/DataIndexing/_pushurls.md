<h2 id="data-indexing_pushurls">URL scheduling</h2>

Since full domain crawls are only made rarely (maybe once a day), then new pages to your website won't appear in search results before the domain is recrawled. If you cannot wait for a complete recrawl, then you may push the urls in question, which will be crawled within a couple of minutes.





#### HTTP request

> The command below schedules urls for (re)crawling:

```shell
curl
-X POST \
-I https://api.cludo.com/api/v3/{CustomerId}/content/{CrawlerId}/pushurls \
-u {CustomerId}:{CustomerKey} \
-d '[
	    "https://www.cludo.com/en/products/",
        "https://www.cludo.com/en/features/
    ]'
```

`POST https://api.cludo.com/api/v3/{CustomerId}/content/{CrawlerId}/pushurls`

Parameter | Description
----- | ------
CustomerId | Your customer id
CrawlerId | The id of the crawler to schedule urls to crawl





#### HTTP body

The body content is simply a newline list of urls to crawl.