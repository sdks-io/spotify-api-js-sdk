
# Context Object

## Structure

`ContextObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| undefined` | Optional | The object type, e.g. "artist", "playlist", "album", "show". |
| `href` | `string \| undefined` | Optional | A link to the Web API endpoint providing full details of the track. |
| `externalUrls` | [`ExternalUrlObject \| undefined`](../../doc/models/external-url-object.md) | Optional | External URLs for this context. |
| `uri` | `string \| undefined` | Optional | The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the context. |

## Example (as JSON)

```json
{
  "type": "type6",
  "href": "href6",
  "external_urls": {
    "spotify": "spotify6"
  },
  "uri": "uri8"
}
```

