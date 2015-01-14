Tags 
=======

## Endpoint URL
* `http://content.guardianapis.com/tags`

## Example response
    {
    "response": {
    "status": "ok",
    "userTier": "free",
    "total": 65,
    "startIndex": 1,
    "pageSize": 10,
    "currentPage": 1,
    "pages": 7,
    "results": [
        {
        "id": "katine/football",
        "type": "keyword",
        "webTitle": "Football",
        "webUrl": "http://www.theguardian.com/katine/football",
        "apiUrl": "http://beta.content.guardianapis.com/katine/football",
        "sectionId": "katine",
        "sectionName": "Katine"
        }
        ]}
    }

Field  | Description | Type |  |
------ | ----------- | ---- |--|
`status` | The status of the response. It refers to the state of the API. Successful calls will receive an "ok" even if your query did not return any results |  *String*
`total` |  The number of results available for your search overall | *Integer*
`startIndex` | ? |  *Integer*
`pageSize` | The number of items returned in this call |  *Integer*
`currentPage` | The number of the page you are browsing | *Integer*
`pages` | The total amount of pages that are in this call | *Integer*
`id` | The id of the tag | *String*
`type` | The type of the tag |  *String*
`webUrl` | The URL of the html content | *String*
`apiUrl` | The URL of the raw content | *String*
`sectionId` | The id of the section |  *String*
`sectionName` | The name of the section |  *String*


## Parameters

### Query term

Name  | Description | Type | Accepted values
----- | ----------- | ---- | ---------------
`q` | Request tags containing this free text | *String* | e.g. sausages

### Filters

Name  | Description | Type | Accepted values | Boolean operators
----- | ----------- | ---- | ------------------------------------
`type` | Return only tags of those types | *String list* |  | false
`section` | Return only tags in those sections | *String* | e.g. football | true
`reference` | Return only tags with those references | *String* | e.g. isbn/9780349108391 | true
`reference-type` | Return only tags with references of those types | *String* | e.g. isbn | true

#### Page options

Name  | Description | Type | Accepted values
----- | ----------- | ---- | ---------------
`page`| Returns results only for that page index  | *Integer* | e.g. 5
`page-size` | Modify the number of items displayed per page | *Integer*  | __Default: *10*__

### Additional information

Name  | Description | Type | Accepted values
----- | ----------- | ---- | ---------------
`show-references` | Show associated reference data such as ISBNs | *String list* | See list below |

* author
* bisac-prefix
* esa-cricket-match
* esa-football-match
* esa-football-team
* esa-football-tournament
* isbn
* musicbrainz
* musicbrainzgenre
* opta-cricket-match
* opta-football-match
* opta-football-team
* opta-football-tournament
* pa-football-competition
* pa-football-match
* pa-football-team
* r1-film
* reuters-index-ric
* reuters-stock-ric
* witness-assignment

## Example

[http://content.guardianapis.com/tags?q=apple&section=technology&show-references=all](http://beta.content.guardianapis.com/tags?q=apple&section=technology&show-references=all&api-key=test)
