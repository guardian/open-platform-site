### Single item

Endpoint: `http://content.guardianapis.com/`


### Example query

`http://content.guardianapis.com/business/2014/feb/18/uk-inflation-falls-below-bank-england-target`


### Example response

    {
      "response": {
        "status": "ok",
        "userTier": "free",
        "total": 1,
        "content": {
          "id": "business/2014/feb/18/uk-inflation-falls-below-bank-england-target",
          "sectionId": "business",
          "sectionName": "Business",
          "webPublicationDate": "2014-02-18T11:02:45Z",
          "webTitle": "UK inflation falls below Bank of England's 2% target",
          "webUrl": "http://www.theguardian.com/business/2014/feb/18/uk-inflation-falls-below-bank-england-target",
          "apiUrl": "http://content.guardianapis.com/business/2014/feb/18/uk-inflation-falls-below-bank-england-target"
        }
      }
    }

Field  | Description | Type |  |
------ | ----------- | ---- |--|
`status` | The status of the response. It refers to the state of the API. Successful calls will receive an "ok" even if your query did not return any results |  *String*
`total` |  The number of results available for your search overall | *Integer*
`leadContent` |   To help show which are the key pieces of content at any one time, editors identify those pieces of content as "lead" for the tag in question | *String - list of items*


### Query term

Field  | Description | Type | Accepted values |
------ | ----------- | ---- |-----------------|
 `id`  |  The ID for an item, such as a piece of content, is the path to that item on the site. By replacing the domain with content.guardianapis.com you get the API URL for that piece of content | *String * | 


### Additional information

Field  | Description | Type | Accepted values |
------ | ----------- | ---- |-----------------|
`show-story-package` | When `true` display a list of content that is in the has been identified as being about the same story as the requested content item. When a content item is in a package the `hasStoryPackage` field has a value of `true` | *Boolean* | true \| false
`show-editors-picks` | When `true` display a list of content that is chosen by editors on tags, sections and the home page. This content list represents the main list of content found on the equivalent path on the site | *Boolean* | true \| false
`show-most-viewed` | When `true` display most viewed content. For overall most viewed set `id` to '/', for section most viewed set `id` to the section id
`show-related-content` | Content items can show a set of 'related' content. When `true` returns content items related to the main content item  | *Boolean* | true \| false 
`hide-recent-content` |  When `true` removes the results list from the response. | *Boolean* | true \| false
