<h1 id="data-indexing">Data&nbsp;indexing</h1>

<aside class="warning">
Data indexing requires [Basic authorization](#authorization_basic).
</aside>


Usually all indexing of pages, files and so on will be handled by the Cludo crawlers, but if nessesary, then Cludo provides some API endpoints to control the data in your data storage.

The following three endpoints are currently available:

* [pushurls](#data-indexing_pushurls)
* [push](#data-indexing_push)
* [delete](#data-indexing_delete)

Typically, pushurls should be used when you just want to add or update content using the supplied crawler's configuration. Use the push endpoint when you want to have total control over the data model indexed, or if you need to index content that is not accessible to the crawler.