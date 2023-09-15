Content
=======

## Endpoint URL
* `https://content.guardianapis.com/search`


## Example response

    {
    "response": {
    "status": "ok",
    "userTier": "developer",
    "total": 1,
    "startIndex": 1,
    "pageSize": 10,
    "currentPage": 1,
    "pages": 1,
    "orderBy": "newest",
    "results": [
        {
        "id": "world/2022/oct/21/russia-ukraine-war-latest-what-we-know-on-day-240-of-the-invasion",
        "type": "article",
        "sectionId": "world",
        "sectionName": "World news",
        "webPublicationDate": "2022-10-21T14:06:14Z",
        "webTitle": "Russia-Ukraine war latest: what we know on day 240 of the invasion",
        "webUrl": "https://www.theguardian.com/world/2022/oct/21/russia-ukraine-war-latest-what-we-know-on-day-240-of-the-invasion",
        "apiUrl": "https://content.guardianapis.com/world/2022/oct/21/russia-ukraine-war-latest-what-we-know-on-day-240-of-the-invasion",
        "isHosted": false,
        "pillarId": "pillar/news",
        "pillarName": "News"
      }
    ]}
    }


Field  | Description | Type |  |
------ | ----------- | ---- |--|
`status` | The status of the response. It refers to the state of the API. Successful calls will receive an "ok" even if your query did not return any results |  *String*
`total` |  The number of results available for your search overall | *Integer*
`pageSize` | The number of items returned in this call |  *Integer*
`currentPage` | The number of the page you are browsing | *Integer*
`pages` | The total amount of pages that are in this call | *Integer*
`orderBy` | The sort order used | *String*
`id` | The path to content | *String*
`sectionId` | The id of the section |  *String*
`sectionName` | The name of the section |  *String*
`webPublicationDate` |  The combined date and time of publication | *Datetime*
`webUrl` | The URL of the html content | *String*
`apiUrl` | The URL of the raw content | *String*


## Parameters

### Query term

| Name           | Description                                                                                                                  | Type          | Accepted values                                                                                              |
|----------------|------------------------------------------------------------------------------------------------------------------------------|---------------|--------------------------------------------------------------------------------------------------------------|
| `q`            | Request content containing this free text. Supports AND, OR and NOT operators, and exact phrase queries using double quotes. | *String*      | e.g. `sausages`, `"pork sausages"`, `sausages AND (mash OR chips)`, `sausages AND NOT (saveloy OR battered)` |
| `query-fields` | Specify in which indexed fields query terms should be searched on                                                            | *String list* | e.g. `body`, `body,thumbnail`                                                                                |

### Filters

| Name                | Description                                        | Type      | Accepted values                                             | Boolean operators      |
|---------------------|----------------------------------------------------|-----------|-------------------------------------------------------------|------------------------|
| `section`           | Return only content in those sections              | *String*  | e.g. football                                               | true                   |
| `reference`         | Return only content with those references          | *String*  | e.g. isbn/9780718178949                                     | true                   |
| `reference-type`    | Return only content with references of those types | *String*  | e.g. isbn                                                   | true                   |
| `tag`               | Return only content with those tags                | *String*  | e.g. technology/apple                                       | true                   |
| `rights`            | Return only content with those rights              | *String*  | syndicatable, subscription-databases                        | false
| `ids`               | Return only content with those IDs                 | *String*  | e.g. technology/2014/feb/17/flappy-bird-clones-apple-google | false                  |
| `production-office` | Return only content from those production offices  | *String*  | e.g. aus                                                    | true                   |
| `lang`              | Return only content in those languages             | *String*  | ISO language codes, e.g. en, fr                             | true                   |
| `star-rating`       | Return only content with a given star rating       | *Integer* | 1 to 5                                                      | false                  |

#### Date options

| Name        | Description                                          | Type   | Accepted values  |
|-------------|------------------------------------------------------|--------|------------------|
| `from-date` | Return only content published on or after that date  | *Date* | e.g.  2014-02-16 |
| `to-date`   | Return only content published on or before that date | *Date* | e.g.  2014-02-17 |

| Name       | Description                                                                              | Type     | Accepted values |
|------------|------------------------------------------------------------------------------------------|----------|-----------------|
| `use-date` | Changes which type of date is used to filter the results using `from-date` and `to-date` | *String* | See list below  |

* `published` - The date the content has been last published  - __Default__
* `first-publication` - The date the content has been first published
* `newspaper-edition` - The date the content appeared in print
* `last-modified` - The date the content was last updated


#### Page options

| Name        | Description                                       | Type      | Accepted values |
|-------------|---------------------------------------------------|-----------|-----------------|
| `page`      | Return only the result set from a particular page | *Integer* | e.g. 5          |
| `page-size` | Modify the number of items displayed per page     | *Integer* | 1 to 50         |

### Ordering


| Name       | Description                            | Type     | Accepted values |
|------------|----------------------------------------|----------|-----------------|
| `order-by` | Returns results in the specified order | *String* | See list below  |

* `newest` - __Default__ in all other cases
* `oldest`
* `relevance` - __Default__ where `q` parameter is specified

| Name         | Description                                             | Type     | Accepted values |
|--------------|---------------------------------------------------------|----------|-----------------|
| `order-date` | Changes which type of date is used to order the results | *String* | See list below  |

* `published` - The date the content appeared on the web - __Default__
* `newspaper-edition` - The date the content appeared in print
* `last-modified` - The date the content was last updated

### Additional information

| Name          | Description                            | Type          | Accepted values |
|---------------|----------------------------------------|---------------|-----------------|
| `show-fields` | Add fields associated with the content | *String list* | See table below |

Field  | Description | Type |  |
------ | ----------- | ---- |--|
`trailText` |  | *String (HTML)*
`headline` |  |  *String (HTML)*
`showInRelatedContent` | Whether this content can appear in automatically generated Related Content | *String (boolean)*
`body` |  |  *String (HTML)*
`lastModified`  |  |  *Datetime*
`hasStoryPackage` | Has related content selected by editors | *String (boolean)*
`score` | A relevance score based on the search query used | *String (float)*
`standfirst` |  | *String (HTML)*
`shortUrl`  |  | *String*
`thumbnail` |  | *String*
`wordcount`  |  |  *String (Integer)*
`commentable`  |  | *String (Boolean)*
`isPremoderated` | Comments will be checked by a moderator prior to publication if `true` | *String (Boolean)*
`allowUgc` | May have associated User Generated Content. This typically means the content has an associated [Guardian Witness](http://witness.theguardian.com/) assignment which can be accessed by querying `show-references=witness-assignment` | *String (Boolean)*
`byline` |  | *String (HTML)*
`publication` |  | *String*
`internalPageCode` |  | *String*
`productionOffice` |  | *String*
`shouldHideAdverts` | Adverts will not be displayed if `true` | *String (Boolean)*
`liveBloggingNow` | Content is currently live blogged if `true` | *String (Boolean)*
`commentCloseDate` | The date the comments have been closed | Datetime
`starRating` |  | *String (Integer)*
`all` | Includes all the fields |

| Name        | Description                  | Type          | Accepted values |
|-------------|------------------------------|---------------|-----------------|
| `show-tags` | Add associated metadata tags | *String list* | See list below  |

* `blog`
* `contributor`
* `keyword`
* `newspaper-book`
* `newspaper-book-section`
* `publication`
* `series`
* `tone`
* `type`
* `all`

| Name           | Description                     | Type               | Accepted values |
|----------------|---------------------------------|--------------------|-----------------|
| `show-section` | Add associated metadata section | *String (boolean)* | e.g. true       |

| Name          | Description                                                                 | Type          | Accepted values |
|---------------|-----------------------------------------------------------------------------|---------------|-----------------|
| `show-blocks` | Add associated blocks (single block for content, one or more for liveblogs) | *String list* | See list below  |

* `main`
* `body`
* `all`
* `body:latest`
* `body:latest` (limit defaults to 20)
* `body:latest:10`
* `body:oldest`
* `body:oldest:10`
* `body:<block ID>` (only the block with that ID)
* `body:around:<block ID>` (the specified block and 20 blocks either side of it)
* `body:around:<block ID>:10` (the specified block and 10 blocks either side of it)
* `body:key-events`
* `body:published-since:1556529318000` (only blocks since given timestamp)

| Name            | Description                                            | Type          | Accepted values |
|-----------------|--------------------------------------------------------|---------------|-----------------|
| `show-elements` | Add associated media elements such as images and audio | *String list* | See list below  |

* `audio`
* `image`
* `video`
* `all`

| Name              | Description                                 | Type          | Accepted values |
|-------------------|---------------------------------------------|---------------|-----------------|
| `show-references` | Add associated reference data such as ISBNs | *String list* | See list below  |

* author
* bisac-prefix
* esa-cricket-match
* esa-football-match
* esa-football-team
* esa-football-tournament
* isbn
* imdb
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
* witness-assignment - See `allowUgc`

| Name          | Description           | Type          | Accepted values |
|---------------|-----------------------|---------------|-----------------|
| `show-rights` | Add associated rights | *String list* | See list below  |

* `syndicatable`
* `subscription-databases`
* `all`

## Example query
[https://content.guardianapis.com/search?q=12%20years%20a%20slave&format=json&tag=film/film,tone/reviews&from-date=2010-01-01&show-tags=contributor&show-fields=starRating,headline,thumbnail,short-url&show-refinements=all&order-by=relevance](https://content.guardianapis.com/search?q=12%20years%20a%20slave&format=json&tag=film/film,tone/reviews&from-date=2010-01-01&show-tags=contributor&show-fields=starRating,headline,thumbnail,short-url&order-by=relevance&api-key=test)












































