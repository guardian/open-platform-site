Editions
=======

## Endpoint URL
* `http://content.guardianapis.com/editions`

## Example response

    {
      "response": {
        "status": "ok",
        "userTier": "free",
        "total": 3,
        "results": [
          {
            "webTitle": "new guardian australia front page",
            "path": "au",
            "edition": "AU",
            "id": "au",
            "webUrl": "http://www.theguardian.com/au",
            "apiUrl": "http://content.guardianapis.com/au"
          },
          {
            "webTitle": "new guardian us front page",
            "path": "us",
            "edition": "US",
            "id": "us",
            "webUrl": "http://www.theguardian.com/us",
            "apiUrl": "http://content.guardianapis.com/us"
          },
          {
            "webTitle": "new guardian uk front page",
            "path": "uk",
            "edition": "UK",
            "id": "uk",
            "webUrl": "http://www.theguardian.com/uk",
            "apiUrl": "http://content.guardianapis.com/uk"
          }
        ]
      }
    }

Field  | Description | Type |  |
------ | ----------- | ---- |--|
`status` | The status of the response. It refers to the state of the API. Successful calls will receive an "ok" even if your query did not return any results |  *String*
`total` |  The number of results available for your search overall | *Integer*
`id` | The id of the edition | *String*
`webTitle` | The title displayed on the web |  *String*
`webUrl` | The URL of the html content | *String*
`apiUrl` | The URL of the raw content | *String*
`edition` | The edition name | *String*
`path` | The path of the edition | *String*

## Parameters

### Query term

Name  | Description | Type | Accepted values
----- | ----------- | ---- | ---------------
`q` | Return edition based on the query term specified | *String* | e.g. UK

## Example
[http://content.guardianapis.com/editions?q=uk&api-key=test](http://content.guardianapis.com/editions?q=uk)

