Single Item
=======

## Endpoint URL
* `https://content.guardianapis.com/`

## Example

### Query

`https://content.guardianapis.com/sport/2022/oct/07/cricket-jos-buttler-primed-for-england-comeback-while-phil-salt-stays-focused?api-key=test`

### Response

    {
      "response":{
        "status":"ok",
        "userTier":"developer",
        "total":1,
        "content":{
          "id": "sport/2022/oct/07/cricket-jos-buttler-primed-for-england-comeback-while-phil-salt-stays-focused",
          "type": "article",
          "sectionId": "sport",
          "sectionName": "Sport",
          "webPublicationDate": "2022-10-07T12:00:01Z",
          "webTitle": "Jos Buttler primed for England comeback while Phil Salt stays focused",
          "webUrl": "https://www.theguardian.com/sport/2022/oct/07/cricket-jos-buttler-primed-for-england-comeback-while-phil-salt-stays-focused",
          "apiUrl": "https://content.guardianapis.com/sport/2022/oct/07/cricket-jos-buttler-primed-for-england-comeback-while-phil-salt-stays-focused",
          "isHosted": false,
          "pillarId": "pillar/sport",
          "pillarName": "Sport"
        }
      }
    }

Field  | Description | Type |  |
------ | ----------- | ---- |--|
`status` | The status of the response. It refers to the state of the API. Successful calls will receive an "ok" even if your query did not return any results |  *String*
`total` |  The number of results available for your search overall | *Integer*
`leadContent` |   To help show which are the key pieces of content at any one time, editors identify those pieces of content as "lead" for the tag in question | *String - list of items*

## Parameters

### Query term

| Field | Description                                                                                                                                                                               | Type      | Accepted values |
|-------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|-----------------|
| `id`  | The ID for an item, such as a piece of content, is the path to that item on the site. By replacing the domain with content.guardianapis.com you get the API URL for that piece of content | *String * |                 |

### Additional information

| Field                | Description                                                                                                                                                                                                                 | Type      | Accepted values |
|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|-----------------|
| `show-story-package` | When `true` display a list of content that is in the has been identified as being about the same story as the requested content item. When a content item is in a package the `hasStoryPackage` field has a value of `true` | *Boolean* | true \          | false
| `show-editors-picks` | When `true` display a list of content that is chosen by editors on tags, sections and the home page. This content list represents the main list of content found on the equivalent path on the site                         | *Boolean* | true \          | false
| `show-most-viewed`   | When `true` display most viewed content. For overall most viewed set `id` to '/', for section most viewed set `id` to the section id                                                                                        |           |                 |
| `show-related`       | Content items can show a set of 'related' content. When `true` returns content items related to the main content item                                                                                                       | *Boolean* | true \          | false


