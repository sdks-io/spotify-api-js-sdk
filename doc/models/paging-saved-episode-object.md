
# Paging Saved Episode Object

## Structure

`PagingSavedEpisodeObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string` | Required | A link to the Web API endpoint returning the full result of the request |
| `limit` | `number` | Required | The maximum number of items in the response (as set in the query or by default). |
| `next` | `string \| null` | Required | URL to the next page of items. ( `null` if none) |
| `offset` | `number` | Required | The offset of the items returned (as set in the query or by default) |
| `previous` | `string \| null` | Required | URL to the previous page of items. ( `null` if none) |
| `total` | `number` | Required | The total number of items available to return. |
| `items` | [`SavedEpisodeObject[]`](../../doc/models/saved-episode-object.md) | Required | - |

## Example (as JSON)

```json
{
  "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
  "limit": 20,
  "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "offset": 0,
  "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  "total": 4,
  "items": [
    {
      "added_at": "2016-03-13T12:52:32.123Z",
      "episode": {
        "audio_preview_url": "audio_preview_url8",
        "description": "description2",
        "html_description": "html_description8",
        "duration_ms": 46,
        "explicit": false,
        "external_urls": {
          "spotify": "spotify6"
        },
        "href": "href4",
        "id": "id2",
        "images": [
          {
            "url": "url6",
            "height": 182,
            "width": 222
          },
          {
            "url": "url6",
            "height": 182,
            "width": 222
          },
          {
            "url": "url6",
            "height": 182,
            "width": 222
          }
        ],
        "is_externally_hosted": false,
        "is_playable": false,
        "language": "language4",
        "languages": [
          "languages9",
          "languages0",
          "languages1"
        ],
        "name": "name2",
        "release_date": "release_date0",
        "release_date_precision": "year",
        "resume_point": {
          "fully_played": false,
          "resume_position_ms": 254
        },
        "type": "episode",
        "uri": "uri6",
        "restrictions": {
          "reason": "reason0"
        },
        "show": {
          "available_markets": [
            "available_markets0",
            "available_markets1",
            "available_markets2"
          ],
          "copyrights": [
            {
              "text": "text2",
              "type": "type2"
            },
            {
              "text": "text2",
              "type": "type2"
            },
            {
              "text": "text2",
              "type": "type2"
            }
          ],
          "description": "description4",
          "html_description": "html_description4",
          "explicit": false,
          "external_urls": {
            "spotify": "spotify6"
          },
          "href": "href8",
          "id": "id6",
          "images": [
            {
              "url": "url6",
              "height": 182,
              "width": 222
            },
            {
              "url": "url6",
              "height": 182,
              "width": 222
            },
            {
              "url": "url6",
              "height": 182,
              "width": 222
            }
          ],
          "is_externally_hosted": false,
          "languages": [
            "languages7",
            "languages6",
            "languages5"
          ],
          "media_type": "media_type6",
          "name": "name6",
          "publisher": "publisher6",
          "type": "show",
          "uri": "uri0",
          "total_episodes": 198
        }
      }
    }
  ]
}
```

