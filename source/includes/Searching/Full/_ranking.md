<h3 id="full-searches_ranking">Ranking</h3>

```json
{
  "sort": {
    "City": "asc",
    "Street": "asc",
    "LastName": "desc"
  },
  "valueBoost": [
    {
      "fieldName": "Category",
      "Boosts": [
        {
          "Boost": 23.4,
          "Values": ["A", "B", "C"]
        }
      ]
    }
  ]
}
```

When searching, the Cludo will attempt to order the search results, based on how well they match the given query. For most searches the Cludo ranking algorithm will be enough, but if you need to override the ranking completely, or at least affect affect certain aspects of it, then use the `sort` property or the `valueBoost` property.




#### Custom sort

A custom sort set on the `sort ` property, overrides the entire ranking algorithm with the given sort model. The sort type is a model, where the property names are the fields to sort, and the values specifies the direction of the sort. The order of the properties determine the order of the sort.





#### Value boost

Value boostings set on the `valueBoost` property, will increase search results matching a given boost to be ranked higher than others. The `valueBoost` property type is an array of boost models, each consisting of the field to boost and an array of boostings, determining the boost value when matching a given value. 