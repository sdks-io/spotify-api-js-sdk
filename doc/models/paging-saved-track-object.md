
# Paging Saved Track Object

## Structure

`PagingSavedTrackObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string` | Required | A link to the Web API endpoint returning the full result of the request |
| `limit` | `number` | Required | The maximum number of items in the response (as set in the query or by default). |
| `next` | `string \| null` | Required | URL to the next page of items. ( `null` if none) |
| `offset` | `number` | Required | The offset of the items returned (as set in the query or by default) |
| `previous` | `string \| null` | Required | URL to the previous page of items. ( `null` if none) |
| `total` | `number` | Required | The total number of items available to return. |
| `items` | [`SavedTrackObject[]`](../../doc/models/saved-track-object.md) | Required | - |

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
      "track": {
        "album": {
          "album_type": "single",
          "total_tracks": 170,
          "available_markets": [
            "available_markets2",
            "available_markets3"
          ],
          "external_urls": {
            "spotify": "spotify6"
          },
          "href": "href0",
          "id": "id8",
          "images": [
            {
              "url": "url6",
              "height": 182,
              "width": 222
            }
          ],
          "name": "name8",
          "release_date": "release_date6",
          "release_date_precision": "day",
          "restrictions": {
            "reason": "explicit"
          },
          "type": "album",
          "uri": "uri2",
          "artists": [
            {
              "external_urls": {
                "spotify": "spotify6"
              },
              "href": "href2",
              "id": "id0",
              "name": "name0",
              "type": "artist"
            },
            {
              "external_urls": {
                "spotify": "spotify6"
              },
              "href": "href2",
              "id": "id0",
              "name": "name0",
              "type": "artist"
            }
          ]
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "spotify6"
            },
            "followers": {
              "href": "href0",
              "total": 82
            },
            "genres": [
              "genres7",
              "genres8"
            ],
            "href": "href2",
            "id": "id0"
          }
        ],
        "available_markets": [
          "available_markets8"
        ],
        "disc_number": 206,
        "duration_ms": 142
      }
    }
  ]
}
```

