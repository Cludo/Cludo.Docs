<h3 id="full-searches_filtering">Filtering</h3>

```json
{
  "postFilters": {
    "Category": ["Publications", "Events"],
    "date": ["EventDate", "20170601", "20170630"]
  },
  "postFilterOperator": "or",

  "filters": {
    "Domain": ["http://www.mydomain.com"],
    "range": ["Price", 20, 100],
    "date": ["EventDate", "20170601", "20170630"]
  },

  "notFilters": {
    "date": ["ProductionYear", "", 2015]
  }, 
  "enableFacetFiltering": true
}
```

Filtering limits search request fields to match given values, such as a price within a given range, a date within a specific month, or have a given category.

Currently, three properties are used to set filters: `filters`, `notFilters` and `postFilters`. Which property you use, depends on when in the search process the filter is added:
`filters` and `notFilters` are executed along with the query, and will affect the ranking and facets, whereas the `postFilter` only filters out not matching search results, but does not affect facets. To enable `postFilters` on facets use the `enableFacetFiltering` property.

By default, when specifying multiple post filters, then all filters must match, before a search result is valid. To change this behavior use the `postFilterOperator` property. Its possible values are:

* **and**
* **or**





<h4 id:"full-searches_filtering_syntax">Syntax</h4>

When adding a filter to any of the properties, you must first decide which type of filter is neded:

* [values](#filtering_value)
* [number ranges](#filtering_range)
* [date ranges](#filtering_date)





<h5 id="filtering_value">Values</h5>

> Examples on using a [value filter](#filtering_value):

```
"Category": ["Publications", "Events"]
"DocumentType": ["PDF"]
```

The value filter limits a field to specific values. This is recommended when you have a limited, known amount of choices such as with *categories*, *car brands* or *file types* in which you show to the user via [facets](#full-searches_response_facets).

The value filter type is simply just a range of values to match.





<h5 id="filtering_range">Range</h5>

> Examples on using a [range filter](#filtering_range):

```
"range": ["Price", 20, 100]
"range": ["WheelRimSize", 25.5, ""]
"range": ["PoolSize", "", 2000]
"range": ["LegoPieces", "500.75", "750.57"]
```

The range filter is used to limit a number field to be within or greater- or less-than-or-equal-to than the specified value(s).
The filter consists of three parameters: 

1. Field to filter
2. Minimum value
3. Maximum value

Use comma ',' as the parameter separator, and a dot '.' as a decimal separator. String representation of the values are also allowed. 
To use only one end of the range, just insert an empty string as value. If both value parameters are empty, then the filter will be ignored.





<h5 id="filtering_date">Date</h5>

> Examples on using a [date filter](#filtering_date):

```
"date": ["ProductionYear", "2015", "2017"]
"date": ["PremiereDate", "2017-06-01", ""]
"date": ["Exipration", "", "2020-12-24T20:00"]
```

The date filter is used to limit a date-time field to be within, before or after the specified date(e).
The filter consists of three parameters: 

1. Field to filter
2. Minimum date-time
3. Maximum date-time

Both date-time values must be strings and in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format, such as:

* 2017-06-13T02:50:25+00:00
* 2017-06-13T02:50:25Z
* 20170613T025025Z
* 2017-06-13

If no time part is specified, then the full date is included in the search, meaning the date-time *2017-06-13T22:13* wil be considered within a range using *2017-06-13*.
If only one limit is needed just insert an empty string into the one to ignore. If both value parameters are empty, then the filter will be ignored.