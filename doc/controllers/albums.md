# Albums

```ts
const albumsController = new AlbumsController(client);
```

## Class Name

`AlbumsController`

## Methods

* [Get-an-Album](../../doc/controllers/albums.md#get-an-album)
* [Get-Multiple-Albums](../../doc/controllers/albums.md#get-multiple-albums)
* [Get-an-Albums-Tracks](../../doc/controllers/albums.md#get-an-albums-tracks)
* [Get-Users-Saved-Albums](../../doc/controllers/albums.md#get-users-saved-albums)
* [Save-Albums-User](../../doc/controllers/albums.md#save-albums-user)
* [Remove-Albums-User](../../doc/controllers/albums.md#remove-albums-user)
* [Check-Users-Saved-Albums](../../doc/controllers/albums.md#check-users-saved-albums)
* [Get-New-Releases](../../doc/controllers/albums.md#get-new-releases)


# Get-an-Album

Get Spotify catalog information for a single album.

```ts
async getAnAlbum(  id: string,
  market?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<AlbumObject>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `market` | `string \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AlbumObject`](../../doc/models/album-object.md)

## Example Usage

```ts
const id = '4aawyAB9vmqN3uQ7FjRGTy';

const market = 'ES';

try {
  const { result, ...httpResponse } = await albumsController.getAnAlbum(
  id,
  market
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


# Get-Multiple-Albums

Get Spotify catalog information for multiple albums identified by their Spotify IDs.

```ts
async getMultipleAlbums(  ids: string,
  market?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ManyAlbums>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `string` | Query, Required | - |
| `market` | `string \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ManyAlbums`](../../doc/models/many-albums.md)

## Example Usage

```ts
const ids = '382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc';

const market = 'ES';

try {
  const { result, ...httpResponse } = await albumsController.getMultipleAlbums(
  ids,
  market
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


# Get-an-Albums-Tracks

Get Spotify catalog information about an album’s tracks.
Optional parameters can be used to limit the number of tracks returned.

```ts
async getAnAlbumsTracks(  id: string,
  market?: string,
  limit?: number,
  offset?: number,
requestOptions?: RequestOptions): Promise<ApiResponse<PagingSimplifiedTrackObject>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `market` | `string \| undefined` | Query, Optional | - |
| `limit` | `number \| undefined` | Query, Optional | - |
| `offset` | `number \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PagingSimplifiedTrackObject`](../../doc/models/paging-simplified-track-object.md)

## Example Usage

```ts
const id = '4aawyAB9vmqN3uQ7FjRGTy';

const market = 'ES';

const limit = 10;

const offset = 5;

try {
  const { result, ...httpResponse } = await albumsController.getAnAlbumsTracks(
  id,
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


# Get-Users-Saved-Albums

Get a list of the albums saved in the current Spotify user's 'Your Music' library.

```ts
async getUsersSavedAlbums(  limit?: number,
  offset?: number,
  market?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<PagingSavedAlbumObject>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `limit` | `number \| undefined` | Query, Optional | - |
| `offset` | `number \| undefined` | Query, Optional | - |
| `market` | `string \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### oauth_2_0

`user-library-read`

## Response Type

[`PagingSavedAlbumObject`](../../doc/models/paging-saved-album-object.md)

## Example Usage

```ts
const limit = 10;

const offset = 5;

const market = 'ES';

try {
  const { result, ...httpResponse } = await albumsController.getUsersSavedAlbums(
  limit,
  offset,
  market
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


# Save-Albums-User

Save one or more albums to the current user's 'Your Music' library.

```ts
async saveAlbumsUser(  ids: string,
  body?: MeAlbumsRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `string` | Query, Required | - |
| `body` | [`MeAlbumsRequest \| undefined`](../../doc/models/me-albums-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### oauth_2_0

`user-library-modify`

## Response Type

`void`

## Example Usage

```ts
const ids = '382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc';

try {
  const { result, ...httpResponse } = await albumsController.saveAlbumsUser(ids);
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


# Remove-Albums-User

Remove one or more albums from the current user's 'Your Music' library.

```ts
async removeAlbumsUser(  ids: string,
  body?: MeAlbumsRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `string` | Query, Required | - |
| `body` | [`MeAlbumsRequest \| undefined`](../../doc/models/me-albums-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### oauth_2_0

`user-library-modify`

## Response Type

`void`

## Example Usage

```ts
const ids = '382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc';

try {
  const { result, ...httpResponse } = await albumsController.removeAlbumsUser(ids);
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


# Check-Users-Saved-Albums

Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.

```ts
async checkUsersSavedAlbums(  ids: string,
requestOptions?: RequestOptions): Promise<ApiResponse<boolean[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `string` | Query, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### oauth_2_0

`user-library-read`

## Response Type

`boolean[]`

## Example Usage

```ts
const ids = '382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc';

try {
  const { result, ...httpResponse } = await albumsController.checkUsersSavedAlbums(ids);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response

```
[
  false,
  true
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Bad or expired token. This can happen if the user revoked a token or<br>the access token has expired. You should re-authenticate the user. | [`UnauthorizedError`](../../doc/models/unauthorized-error.md) |
| 403 | Bad OAuth request (wrong consumer key, bad nonce, expired<br>timestamp...). Unfortunately, re-authenticating the user won't help here. | [`ForbiddenError`](../../doc/models/forbidden-error.md) |
| 429 | The app has exceeded its rate limits. | [`TooManyRequestsError`](../../doc/models/too-many-requests-error.md) |


# Get-New-Releases

Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).

```ts
async getNewReleases(  limit?: number,
  offset?: number,
requestOptions?: RequestOptions): Promise<ApiResponse<PagedAlbums>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `limit` | `number \| undefined` | Query, Optional | - |
| `offset` | `number \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PagedAlbums`](../../doc/models/paged-albums.md)

## Example Usage

```ts
const limit = 10;

const offset = 5;

try {
  const { result, ...httpResponse } = await albumsController.getNewReleases(
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

