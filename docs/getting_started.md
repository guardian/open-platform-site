Getting started
===============

The Content API is a public service for accessing all the content the Guardian creates and the collections we have of that content (tags and sections). There are over one and a half million items available published as far back as 1999. This overview will give you some idea of what data is available, how to find what you need, and what you will see when you make a request to us.
You will need to [sign up for an API key](http://guardian.mashery.com/), which is sent with every request. Though it is not required, we have a low limit for the amount of requests that can be made by users not sending one. Plus, once we have your contact details we will be able to give you notice of any upcoming changes.
The easiest way to see what data is included is by using the [Content API Explorer](http://explorer.content.guardianapis.com/). You can build complex queries quickly and browse the results. For specific items, note that the path of any item on theguardian.com can be simply looked up in the API by replacing the domain with content.guardianapis.com.
There are a number of client libaries available that wrap the Content API. The only one which is officially supported is the [Scala client library](https://github.com/guardian/content-api-scala-client).


# Endpoints




## [Single item](item.html)


The item endpoint (`/*`) returns all the data we have for a given single item ID. Here the term 'item' refers to either a piece of content, a tag, or a section. The item endpoint matches the paths on theguardian.com. So by replacing the domain theguardian.com with content.guardianapis.com you can see the data associated.

For example:
* http://content.guardianapis.com/technology/2014/feb/18/doge-such-questions-very-answered (a content item)
* http://content.guardianapis.com/world/france (a tag)
* http://content.guardianapis.com/lifeandstyle (a section)

The response contains minimal detail by default but more data can be exposed by passing parameters in your request. Many (though not all) of these parameters are shared with the Content endpoint at `/search`. More details are on the [item page](item.html).


## [Content](content.html)

The content endpoint (`/search`) returns all content items in the API. This list can then be filtered using parameters. 
For example, lets see if the Guardian has any content on political debates:

[http://content.guardianapis.com/search?q=debates](http://content.guardianapis.com/search?q=debates)

Here the `q` parameter filters the results to only those that include that search term. In this case, there are many results, so we might want to filter down the response to something more meaningful, specifically looking for political content published in 2014, for example:

<http://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=2014-01-01>

More details about responses and available parameters are on the [content page](content.html).

## [Tags](tag.html)

The tags endpoint (`/tags`) returns all tags in the API. All Guardian content is manually categorised using these tags, of which there are nearly 20,000.

For example, filtered by the term 'green':

[http://content.guardianapis.com/tags?q=green](http://content.guardianapis.com/tags?q=green)

This request shows that there are several tags containing the word. Tags have types:

* `keyword` -- a word describing what this piece of content is about
* `series` -- the name of a regularly produced content feature, such as podcasts or columns, eg. 'Band of the week'
* `contributor` -- the author or authors of a content item
* `tone` -- the intent of the content, such as feature or obituary
* `type` -- the media type, such as article, poll, video, etc
* `blog` -- the name of one of the Guardian's blogs

More details about responses and available parameters are on the [tags page](tag.html).


## [Sections](section.html)

The sections endpoint (`/sections`) returns all sections in the API. The Guardian uses sections to organise content and tags: each is associated with a single section.

More details on responses and available parameters are on the [sections page](section.html).


## Other resources


The [Guardian API talk board](http://groups.google.com/group/guardian-api-talk/) is the best place for questions or to speak to other developers working with the Content API.

For more information you can find us on Twitter at [@gdndevelopers](https://twitter.com/gdndevelopers) or read our [developer blog](http://www.theguardian.com/info/developer-blog).
