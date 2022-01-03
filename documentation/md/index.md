Overview
===============

This overview will give you some idea of what data is available, how to find what you need, and what you will see when you make a request to us.

To access the API, you will need to [sign up for an API key](../access), which should be sent with every request. Plus, once we have your contact details we will be able to give you notice of any upcoming changes.

The easiest way to see what data is included is to [explore the data](../explore). You can build complex queries quickly and browse the results.

If your application needs to regularly poll the API for updated content, there are a few things you should know. Please ensure that you read the guide for polling applications below before starting.

## Endpoints

We provide several endpoints to retrieve different items:

  * Content
  * Tags
  * Sections
  * Editions
  * Single item

For each endpoint:

  * results can be filtered using parameters
  * response contains minimal detail by default but more data can be exposed using parameters
  * results are returned as paginated list of containing, by default, 10 entries per page
  
### Paging Through Results

Results are returned as a paginated list, with a default of 10 results. In order to page through the results, you can add the `page` keyword to your query.

Example: <https://content.guardianapis.com/search?page=2&q=debate&api-key=test>

### Content

The [content endpoint](./search) (`/search`) returns all pieces of content in the API.
For example, let's see if the Guardian has any content on political debates:

[https://content.guardianapis.com/search?q=debates](https://content.guardianapis.com/search?q=debates&api-key=test)

Here the `q` parameter filters the results to only those that include that search term. In this case, there are many results, so we might want to filter down the response to something more meaningful, specifically looking for political content published in 2014, for example:

<https://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=2014-01-01&api-key=test>

#### Query operators

The `q` parameter supports AND, OR and NOT operators. For example:

`debate AND economy` (<https://content.guardianapis.com/search?q=debate%20AND%20economy&tag=politics/politics&from-date=2014-01-01&api-key=test>) returns only content that contains both "debate" and "economy".

`debate AND NOT immigration` (<https://content.guardianapis.com/search?q=debate%20AND%20NOT%20immigration&tag=politics/politics&from-date=2014-01-01&api-key=test>) returns only content that contains "debate" but does not contain "immigration".

The AND operator has a higher precedence than OR, but you can use parentheses to override this behavior. For example:

`debate AND (economy OR immigration OR education)` (<https://content.guardianapis.com/search?q=debate%20AND%20(economy%20OR%20immigration%20education)&tag=politics/politics&from-date=2014-01-01&api-key=test>) returns only content that contains both "debate" and and at least one of the following "economy", "immigration", "education".

Note that OR is the default operator, so you can omit it if you like. `debate AND (economy immigration education)` will behave the same as the above query.

#### Filters operators

Some filters support AND, OR and NOT operators through a a specific syntax:

* AND: `,`
* OR: `|`
* NOT: `-`

Expressions can be grouped using `()`.

#### Phrase search

You can also use double quotes to search for exact phrases. For example:

`"mitochondrial donation"` (<https://content.guardianapis.com/search?q="mitochondrial%20donation"&tag=politics/politics&from-date=2014-01-01&api-key=test>) returns only content that contains the phrase "mitochondrial donation".

### Tags

The [tags endpoint](./tag) (`/tags`) returns all tags in the API. All Guardian content is manually categorised using these tags, of which there are more than 50,000.

A tag is a piece of data that we use to categorise our content. We use many different tags so understanding what they mean is important, and with new ones being added all the time you'll want to make sure to keep up to date with the changes.

For example, [this article](https://content.guardianapis.com/lifeandstyle/2014/may/14/recycling-saving-energy-reducing-waste-how-is-it-going-for-you?show-tags=all&api-key=test) contains many tags including:

 * `environment/recycling`
 * `environment/plasticbags`
 * `environment/energyefficiency`

You can use these tags in your own queries to find other content that has the same tags, for example `environment/recycling`, like this:

<https://content.guardianapis.com/search?tag=environment/recycling&api-key=test>


Or you can search for tags [containing the term `green`](https://content.guardianapis.com/tags?q=green&api-key=test) in the tag itself.

Finally, tags have types:

* `keyword` -- a word describing what this piece of content is about
* `series` -- the name of a regularly produced content feature, such as podcasts or columns, eg. 'Band of the week'
* `contributor` -- the author or authors of a content item
* `tone` -- the intent of the content, such as feature or obituary
* `type` -- the media type, such as article, poll, video, etc
* `blog` -- the name of one of the Guardian's blogs

### Sections

The [sections endpoint](./section)(`/sections`) returns all sections in the API.

We use sections to logically group our content.

For example, [this article](https://content.guardianapis.com/technology/2014/jul/07/best-android-apps-games-wear-city-air?show-sections=true&api-key=test) contains one section, `technology`, and you will find that within [our technology section](https://content.guardianapis.com/technology?api-key=test), technologically-related content will be clustered such as items covering games, iPhone, Sony, Google and others.

Each section in sections endpoint response has its own id value, and you can see how this can be appended to either our website url (`webUrl`) to see the web representation, or the api url (`apiUrl`) to see the API's representation of that content.

If you request `apiUrl` value, the API would recognise them as single item requests for sections and respond with the content that we store for those sections.

### Editions

The [editions endpoint](./edition) (`/editions`) returns all editions in the API.

Editions are the different front main pages of the Guardian site we have. At current we have editions for the United Kingdom, the United States and Australia.

### Single item

The [single item endpoint](./item) returns all the data we have for a given single item id. Here the term 'item' refers to either a piece of content, a tag, or a section. The item endpoint matches the paths on theguardian.com. So by replacing the domain theguardian.com with content.guardianapis.com you can see the data associated.

For example:

* a piece of content: [https://content.guardianapis.com/technology/2014/feb/18/doge-such-questions-very-answered](https://content.guardianapis.com/technology/2014/feb/18/doge-such-questions-very-answered?api-key=test)
* a tag; [https://content.guardianapis.com/world/france](http://content.guardianapis.com/world/france?api-key=test)
* a section: [https://content.guardianapis.com/lifeandstyle](http://content.guardianapis.com/lifeandstyle?api-key=test)

The response contains minimal detail by default but more data can be exposed by passing parameters in your request. Many (though not all) of these parameters are shared with the Content endpoint.

## Polling guide

The key that you are assigned is rate-limited and as such any applications that depend on making large numbers of requests on a polling basis are likely to exceed their daily quota and thus be prevented from making further requests until the next period begins.

If you require an elevated limit on requests-per-day or requests-per-second this may be possible to arrange. Please contact us to discuss the nature of your application and the requests you are intending to make.

## HTTPS support

The Content API is also available over HTTPS at [https://content.guardianapis.com/](https://content.guardianapis.com/) you are encouraged to use this for example where you need to call the Content API on the client-side as part of a secure application.

## Client libraries

We maintain and support officially only one client, the [Scala client library](https://github.com/guardian/content-api-scala-client).

There are however other clients, supported by the community:

 * [Haskell client library](https://github.com/guardian/content-api-haskell-client)
 * [Ruby client library](https://github.com/tomtt/contentapi-ruby)
 * [Python client library](https://github.com/prabhath6/theguardian-api-python)
 * [Javascript client library](https://github.com/PorterK/GuardianJSClient)
 * [Golang client library](https://github.com/guardian/gocapiclient)
 * [.NET client library](https://github.com/l7ssha/GuardianNet)
 * [Java client library](https://github.com/matarrese/content-api-the-guardian)
 * [Rust client library](https://github.com/MarSavar/aletheia)



## Support

The [Guardian API talk board](https://groups.google.com/group/guardian-api-talk/) is the best place for questions or to speak to other developers working with the Content API.

For more information you can find us on Twitter at [@gdndevelopers](https://twitter.com/gdndevelopers) or read our [developer blog](https://www.theguardian.com/info/developer-blog).


