Section search
=======

## Endpoint URL
* `http://content.guardianapis.com/sections`

## Example response

    {
    "response": {
    "status": "ok",
    "userTier": "free",
    "total": 1,
    "results": [
      {
        "id": "football",
        "webTitle": "Football",
        "webUrl": "http://www.theguardian.com/football",
        "apiUrl": "http://content.guardianapis.com/football",
        "editions": [
          {
            "id": "football",
            "webTitle": "Football",
            "webUrl": "http://www.theguardian.com/football",
            "apiUrl": "http://content.guardianapis.com/football",
            "code": "default"
          }
        ]
      }]
    }
    }

Field  | Description | Type |  |
------ | ----------- | ---- |--|
`status` | The status of the response. It refers to the state of the API. Successful calls will receive an "ok" even if your query did not return any results |  *String*
`total` |  The number of results available for your search overall | *Integer*
`id` | The id of the section | *String*
`webTitle` | The title dispkay on the web |  *String*
`webUrl` | The URL of the html content | *String*
`apiUrl` | The URL of the raw content | *String*
`editions` | The list of existing editions for this section | *String*
`code` | The code of the edition | *String*

## Parameters

### Query term

Name  | Description | Type | Accepted values
----- | ----------- | ---- | ---------------
`q` | Return section based on the query term specified | *String* | e.g. business

## Example
[http://content.guardianapis.com/sections?q=business](http://content.guardianapis.com/sections?q=business)

