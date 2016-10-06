Name  | Description | Type | Accepted values
----- | ----------- | ---- | ---------------
`show-fields` | Add fields associated with the content | *String list* | See table below

Field  | Description | Type |  |
------ | ----------- | ---- |--|
`trailText` |  | *String (HTML)*
`headline` |  |  *String (HTML)*
`showInRelatedContent` | Whether this content can appear in automatically generated Related Content | *String (boolean)*
`body` |  |  *String (HTML)*
`bodyText` | All text content without any formatting or style |  *String*
`lastModified`  |  |  *Datetime*
`hasStoryPackage` | Has related content selected by editors | *String (boolean)*
`standfirst` |  | *String (HTML)*
`shortUrl`  |  | *String*
`thumbnail` |  | *String*
`charCount`  | Number of chars in the text content   |  *String (Integer)*
`wordcount`  | Number of words in the text content   |  *String (Integer)*
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
