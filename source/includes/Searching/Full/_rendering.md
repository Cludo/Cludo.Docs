<h3 id="full-searches_rendering">Rendering</h3>

```shell
-d responseType=JsonHtml \
-d template=MainSite Template \
-d overlay=Overlay Template V2 \
```

```json
{
  "responseType": "JsonHtml",
  "template": "MainSite Template",
  "overlay": "Overlay Template V2"
}
```

The final step before returning search results is selecting how you want the results presented. For this you use the `responseType` property with one of the following options:

* **JsonObject**
* **JsonHtml**

To read more about the variation in the HTTP Response click [here](#full-searches_response).

*JsonObject* returns all data as json, wheras *JsonHtml* pre-renders the search results, and the facets with a pre-determined template. 

The template to use is specified with the `template` property when you have a *Business* or *Enterprise* solution and with the `overlay` property when you have a *Essensial* or *Professional* solution.