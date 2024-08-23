
# Public User Object

## Structure

`PublicUserObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `displayName` | `string \| null \| undefined` | Optional | The name displayed on the user's profile. `null` if not available. |
| `externalUrls` | [`ExternalUrlObject \| undefined`](../../doc/models/external-url-object.md) | Optional | Known public external URLs for this user. |
| `followers` | [`FollowersObject \| undefined`](../../doc/models/followers-object.md) | Optional | Information about the followers of this user. |
| `href` | `string \| undefined` | Optional | A link to the Web API endpoint for this user. |
| `id` | `string \| undefined` | Optional | The [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids) for this user. |
| `images` | [`ImageObject[] \| undefined`](../../doc/models/image-object.md) | Optional | The user's profile image. |
| `type` | [`Type4Enum \| undefined`](../../doc/models/type-4-enum.md) | Optional | The object type. |
| `uri` | `string \| undefined` | Optional | The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for this user. |

## Example (as JSON)

```json
{
  "display_name": "display_name6",
  "external_urls": {
    "spotify": "spotify6"
  },
  "followers": {
    "href": "href0",
    "total": 82
  },
  "href": "href8",
  "id": "id6"
}
```

