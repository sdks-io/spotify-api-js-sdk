
# Playlist Object

## Structure

`PlaylistObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `collaborative` | `boolean \| undefined` | Optional | `true` if the owner allows other users to modify the playlist. |
| `description` | `string \| null \| undefined` | Optional | The playlist description. _Only returned for modified, verified playlists, otherwise_ `null`. |
| `externalUrls` | [`ExternalUrlObject \| undefined`](../../doc/models/external-url-object.md) | Optional | Known external URLs for this playlist. |
| `followers` | [`FollowersObject \| undefined`](../../doc/models/followers-object.md) | Optional | Information about the followers of the playlist. |
| `href` | `string \| undefined` | Optional | A link to the Web API endpoint providing full details of the playlist. |
| `id` | `string \| undefined` | Optional | The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the playlist. |
| `images` | [`ImageObject[] \| undefined`](../../doc/models/image-object.md) | Optional | Images for the playlist. The array may be empty or contain up to three images. The images are returned by size in descending order. See [Working with Playlists](/documentation/web-api/concepts/playlists). _**Note**: If returned, the source URL for the image (`url`) is temporary and will expire in less than a day._ |
| `name` | `string \| undefined` | Optional | The name of the playlist. |
| `owner` | [`PlaylistOwnerObject \| undefined`](../../doc/models/playlist-owner-object.md) | Optional | The user who owns the playlist |
| `mPublic` | `boolean \| undefined` | Optional | The playlist's public/private status: `true` the playlist is public, `false` the playlist is private, `null` the playlist status is not relevant. For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists) |
| `snapshotId` | `string \| undefined` | Optional | The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version |
| `tracks` | [`PagingPlaylistTrackObject \| undefined`](../../doc/models/paging-playlist-track-object.md) | Optional | The tracks of the playlist. |
| `type` | `string \| undefined` | Optional | The object type: "playlist" |
| `uri` | `string \| undefined` | Optional | The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the playlist. |

## Example (as JSON)

```json
{
  "collaborative": false,
  "description": "description6",
  "external_urls": {
    "spotify": "spotify6"
  },
  "followers": {
    "href": "href0",
    "total": 82
  },
  "href": "href8"
}
```

