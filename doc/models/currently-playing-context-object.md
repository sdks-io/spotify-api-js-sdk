
# Currently Playing Context Object

## Structure

`CurrentlyPlayingContextObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `device` | [`DeviceObject \| undefined`](../../doc/models/device-object.md) | Optional | The device that is currently active. |
| `repeatState` | `string \| undefined` | Optional | off, track, context |
| `shuffleState` | `boolean \| undefined` | Optional | If shuffle is on or off. |
| `context` | [`ContextObject \| undefined`](../../doc/models/context-object.md) | Optional | A Context Object. Can be `null`. |
| `timestamp` | `bigint \| undefined` | Optional | Unix Millisecond Timestamp when data was fetched. |
| `progressMs` | `number \| undefined` | Optional | Progress into the currently playing track or episode. Can be `null`. |
| `isPlaying` | `boolean \| undefined` | Optional | If something is currently playing, return `true`. |
| `item` | `unknown \| undefined` | Optional | The currently playing track or episode. Can be `null`. |
| `currentlyPlayingType` | `string \| undefined` | Optional | The object type of the currently playing item. Can be one of `track`, `episode`, `ad` or `unknown`. |
| `actions` | [`DisallowsObject \| undefined`](../../doc/models/disallows-object.md) | Optional | Allows to update the user interface based on which playback actions are available within the current context. |

## Example (as JSON)

```json
{
  "device": {
    "id": "id6",
    "is_active": false,
    "is_private_session": false,
    "is_restricted": false,
    "name": "name6"
  },
  "repeat_state": "repeat_state6",
  "shuffle_state": false,
  "context": {
    "type": "type8",
    "href": "href4",
    "external_urls": {
      "spotify": "spotify6"
    },
    "uri": "uri6"
  },
  "timestamp": 48
}
```

