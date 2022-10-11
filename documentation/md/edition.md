Editions
=======

## Endpoint URL
* `https://content.guardianapis.com/editions`

## Example response

    {
		"response": {
			"status": "ok",
			"userTier": "developer",
			"total": 5,
			"results": [
				{
					"id": "au",
					"path": "au",
					"edition": "AU",
					"webTitle": "new guardian australia front page",
					"webUrl": "https://www.theguardian.com/au",
					"apiUrl": "https://content.guardianapis.com/au"
				},
				{
					"id": "europe",
					"path": "europe",
					"edition": "Europe",
					"webTitle": "new guardian europe front page",
					"webUrl": "https://www.theguardian.com/europe",
					"apiUrl": "https://content.guardianapis.com/europe"
				},
				{
					"id": "international",
					"path": "international",
					"edition": "International",
					"webTitle": "new guardian international front page",
					"webUrl": "https://www.theguardian.com/international",
					"apiUrl": "https://content.guardianapis.com/international"
				},
				{
					"id": "uk",
					"path": "uk",
					"edition": "UK",
					"webTitle": "new guardian uk front page",
					"webUrl": "https://www.theguardian.com/uk",
					"apiUrl": "https://content.guardianapis.com/uk"
				},
				{
					"id": "us",
					"path": "us",
					"edition": "US",
					"webTitle": "new guardian us front page",
					"webUrl": "https://www.theguardian.com/us",
					"apiUrl": "https://content.guardianapis.com/us"
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

| Name | Description                                      | Type     | Accepted values |
|------|--------------------------------------------------|----------|-----------------|
| `q`  | Return edition based on the query term specified | *String* | e.g. UK         |

## Example
[https://content.guardianapis.com/editions?q=uk&api-key=test](http://content.guardianapis.com/editions?q=uk&api-key=test)

