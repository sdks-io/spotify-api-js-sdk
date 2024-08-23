# Search

```ts
const searchController = new SearchController(client);
```

## Class Name

`SearchController`


# Search

Get Spotify catalog information about albums, artists, playlists, tracks, shows, episodes or audiobooks
that match a keyword string. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.

```ts
async search(  q: string,
  type: ItemTypeEnum[],
  market?: string,
  limit?: number,
  offset?: number,
  includeExternal?: IncludeExternalEnum,
requestOptions?: RequestOptions): Promise<ApiResponse<SearchItems>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `q` | `string` | Query, Required | - |
| `type` | [`ItemTypeEnum[]`](../../doc/models/item-type-enum.md) | Query, Required | - |
| `market` | `string \| undefined` | Query, Optional | - |
| `limit` | `number \| undefined` | Query, Optional | - |
| `offset` | `number \| undefined` | Query, Optional | - |
| `includeExternal` | [`IncludeExternalEnum \| undefined`](../../doc/models/include-external-enum.md) | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SearchItems`](../../doc/models/search-items.md)

## Example Usage

```ts
const q = 'remaster%20track:Doxy%20artist:Miles%20Davis';

const type: ItemTypeEnum[] = [
  ItemTypeEnum.Audiobook,
  ItemTypeEnum.Album,
  ItemTypeEnum.Artist
];

const market = 'ES';

const limit = 10;

const offset = 5;

try {
  const { result, ...httpResponse } = await searchController.search(
  q,
  type,
  market,
  limit,
  offset
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user. | [`UnauthorizedError`](../../doc/models/unauthorized-error.md) |
| 403 | Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here. | [`ForbiddenError`](../../doc/models/forbidden-error.md) |
| 429 | The app has exceeded its rate limits. | [`TooManyRequestsError`](../../doc/models/too-many-requests-error.md) |

