### Getting started

We provide several endpoints to retrieve different items:

  * Content
  * Tags
  * Sections
  * Single item

For each endpoint:

  * results can be filtered using parameters
  * response contains minimal detail by default but more data can be exposed using parameters
  * results are returned as paginated list of containing, by default, 10 entries per page


### Content

The [content endpoint](content.html) (`/search`) returns all pieces of content in the API.
For example, lets see if the Guardian has any content on political debates:

[http://content.guardianapis.com/search?q=debates](http://content.guardianapis.com/search?q=debates)

Here the `q` parameter filters the results to only those that include that search term. In this case, there are many results, so we might want to filter down the response to something more meaningful, specifically looking for political content published in 2014, for example:

<http://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=2014-01-01>


### Tags

The [tags endpoint](tag) (`/tags`) returns all tags in the API. All Guardian content is manually categorised using these tags, of which there are nearly 20,000.

A tag is a piece of data that we use to categorise our content. We use many different tags so understanding what they mean is important, and with new ones being added all the time you'll want to make sure to keep up to date with the changes.

For example, [this article](http://content.guardianapis.com/lifeandstyle/2014/may/14/recycling-saving-energy-reducing-waste-how-is-it-going-for-you) contains many tags including:

 * `environment/recycling`
 * `environment/plasticbags`
 * `environment/energyefficiency`

You can use these tags in your own queries to find other content that has the same tags.

For example, [filtered by the term `green`](http://content.guardianapis.com/tags?q=green), shows there are several tags containing the word.
Finally, tags have types:

* `keyword` -- a word describing what this piece of content is about
* `series` -- the name of a regularly produced content feature, such as podcasts or columns, eg. 'Band of the week'
* `contributor` -- the author or authors of a content item
* `tone` -- the intent of the content, such as feature or obituary
* `type` -- the media type, such as article, poll, video, etc
* `blog` -- the name of one of the Guardian's blogs


### Sections

The [sections endpoint](section) (`/sections`) returns all sections in the API.

We use sections to logically group our content.

For example, [this article](http://content.guardianapis.com/technology/2014/jul/07/best-android-apps-games-wear-city-air?show-sections=true) contains one sectionm, `technology`, and you will find that within [our technology section](http://content.guardianapis.com/technology), technologically-related content will be clustered such as items covering games, iPhone, Sony, Google and others.

Each section in sections endpoint response has its own id value, and you can see how this can be appended to either our website url (`webUrl`) to see the web representation, or the api url (`apiUrl`) to see the API's representation of that content.

If you request `apiUrl` value, the API would recognise them as single item requests for sections and respond with the content that we store for those sections.


### Single item

The [single item endpoint](item) returns all the data we have for a given single item id. Here the term 'item' refers to either a piece of content, a tag, or a section. The item endpoint matches the paths on theguardian.com. So by replacing the domain theguardian.com with content.guardianapis.com you can see the data associated.

For example:

* a piece of content: http://content.guardianapis.com/technology/2014/feb/18/doge-such-questions-very-answered
* a tag; http://content.guardianapis.com/world/france
* a section: http://content.guardianapis.com/lifeandstyle

The response contains minimal detail by default but more data can be exposed by passing parameters in your request. Many (though not all) of these parameters are shared with the Content endpoint.


### Polling

The key that you are assigned is rate-limited and as such any applications that depend on making large numbers of requests on a polling basis are likely to exceed their daily quota and thus be prevented from making further requests until the next period begins.

If you require an elevated limit on requests-per-day or requests-per-second this may be possible to arrange. Please contact us to discuss the nature of your application and the requests you are intending to make.


### Client libraries

We officially maintain and support only one client, the [Scala client] (https://github.com/guardian/content-api-scala-client). There are however other clients, supported by the community.


### Resources

The [Guardian API talk board] (http://groups.google.com/group/guardian-api-talk/) is the best place for questions or to speak to other developers working with the Content API. For more information you can find us on Twitter at [@openplatform](https://twitter.com/openplatform) or read our [developer blog](http://www.theguardian.com/info/developer-blog).


