<h3 id="full-searches_filtering">Filtering</h3>

```shell
-d valueFilters[Category]=["News", "Events"] \
-d valueFilters[DocumentType]=["PDF"] \
-d filters[range]=["Price", 20, 100] \
-d filters[date]=["EventDate", "20170601", "20170630"] \
-d notFilters[date]=["ProductionYear", "", "2015"] \
```

```json
{
  "valueFilters": {
    "Category": ["Publications", "Events"],
    "DocumentType": ["PDF"]
  },
  "valueFilterOperator": "or",
  "filters": {
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
Currently, range filters are set with the `filters` and `notFilters` property, wheras value matching is set on the `valueFilters` property. Combine all three as needed.

A special property allows enabling/disabling filters on facets. Control this with the `enableFacetFiltering` property.





<h4 id="full-searches_filtering_valuefilters">Value filters</h4>

> Examples on using the [value filter](#full-searches_filtering_valuefilters):

```
Category: ["Publications", "Events"]
DocumentType: ["PDF"]
```

The `valueFilters` property limits a field to specific values. This is recommended when you have a limited, known amount of choices such as with *categories*, *car brands* or *file types* in which you show to the user via [facets](#full-searches_response_facets).
The `valueFilters` type is an model, where the property names is the fields to filter on, and the values is arrays of values to match.

By default, when specifying multiple value filters, then all filters must match, before a search result is valid. To change this behavior use the `valueFilterOperator` property. Its possible values are:

* **and**
* **or**





<h4 id="full-searches_filtering_filters">Filters (and not-filters)</h4>

The `filters` and `notFilters` properties is used to limit a number or date-time field to be within (or outside with the not-filter) a given range. A filter set on the `filter` property must be true to include the search result, wheras a filter set on the `notFilter` property must be false to include the search result.

The `filters` and `notFilters` type is an model, where the property names is the filter type, and the values an array of three parameters specifying the field and range. There are two types of filters:

* range
* date

Both filter uses greater/less-than-or-equal-to on edge cases, and open ranges is possible by using an empty string instead of a value.





<h5 id="filtering_range">Range</h5>

> Examples on using the [range filter](#filtering_range):

```
range: ["Price", 20, 100]
range: ["WheelRimSize", 25.5, ""]
range: ["PoolSize", "", 2000]
range: ["LegoPieces", "500.75", "750.57"]
```

The range filter is used to limit a number field to be within or greater- or less-than-or-equal-to than the specified value(s).
The filter consists of three parameters: 

1. Field to filter
2. Minimum value
3. Maximum value

Use comma ',' as the parameter separator, and a dot '.' as a decimal separator. String representation of the values are also allowed. 
To use only one end of the range, just insert an empty string as value. If both value parameters are empty, then the filter will be ignored.





<h5 id="filtering_date">Date</h5>

> Examples on using the [date filter](#filtering_date):

```
date: ["ProductionYear", "2015", "2017"]
date: ["PremiereDate", "2017-06-01", ""]
date: ["Exipration", "", "2020-12-24T20:00"]
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