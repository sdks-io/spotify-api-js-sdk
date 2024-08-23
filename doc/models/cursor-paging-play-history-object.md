
# Cursor Paging Play History Object

## Structure

`CursorPagingPlayHistoryObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string \| undefined` | Optional | A link to the Web API endpoint returning the full result of the request. |
| `limit` | `number \| undefined` | Optional | The maximum number of items in the response (as set in the query or by default). |
| `next` | `string \| undefined` | Optional | URL to the next page of items. ( `null` if none) |
| `cursors` | [`CursorObject \| undefined`](../../doc/models/cursor-object.md) | Optional | The cursors used to find the next set of items. |
| `total` | `number \| undefined` | Optional | The total number of items available to return. |
| `items` | [`PlayHistoryObject[] \| undefined`](../../doc/models/play-history-object.md) | Optional | - |

## Example (as JSON)

```json
{
  "href": "href2",
  "limit": 16,
  "next": "next2",
  "cursors": {
    "after": "after8",
    "before": "before6"
  },
  "total": 110
}
```

