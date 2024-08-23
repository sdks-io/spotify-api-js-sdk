# Shows

```ts
const showsController = new ShowsController(client);
```

## Class Name

`ShowsController`

## Methods

* [Get-a-Show](../../doc/controllers/shows.md#get-a-show)
* [Get-Multiple-Shows](../../doc/controllers/shows.md#get-multiple-shows)
* [Get-a-Shows-Episodes](../../doc/controllers/shows.md#get-a-shows-episodes)
* [Get-Users-Saved-Shows](../../doc/controllers/shows.md#get-users-saved-shows)
* [Save-Shows-User](../../doc/controllers/shows.md#save-shows-user)
* [Remove-Shows-User](../../doc/controllers/shows.md#remove-shows-user)
* [Check-Users-Saved-Shows](../../doc/controllers/shows.md#check-users-saved-shows)


# Get-a-Show

Get Spotify catalog information for a single show identified by its
unique Spotify ID.

```ts
async getAShow(  id: string,
  market?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ShowObject>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `market` | `string \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### oauth_2_0

`user-read-playback-position`

## Response Type

[`ShowObject`](../../doc/models/show-object.md)

## Example Usage

```ts
const id = '38bS44xjbVVZ3No3ByF1dJ';

const market = 'ES';

try {
  const { result, ...httpResponse } = await showsController.getAShow(
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


# Get-Multiple-Shows

Get Spotify catalog information for several shows based on their Spotify IDs.

```ts
async getMultipleShows(  ids: string,
  market?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ManySimplifiedShows>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `string` | Query, Required | - |
| `market` | `string \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ManySimplifiedShows`](../../doc/models/many-simplified-shows.md)

## Example Usage

```ts
const ids = '5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ';

const market = 'ES';

try {
  const { result, ...httpResponse } = await showsController.getMultipleShows(
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


# Get-a-Shows-Episodes

Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.

```ts
async getAShowsEpisodes(  id: string,
  market?: string,
  limit?: number,
  offset?: number,
requestOptions?: RequestOptions): Promise<ApiResponse<PagingSimplifiedEpisodeObject>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `market` | `string \| undefined` | Query, Optional | - |
| `limit` | `number \| undefined` | Query, Optional | - |
| `offset` | `number \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### oauth_2_0

`user-read-playback-position`

## Response Type

[`PagingSimplifiedEpisodeObject`](../../doc/models/paging-simplified-episode-object.md)

## Example Usage

```ts
const id = '38bS44xjbVVZ3No3ByF1dJ';

const market = 'ES';

const limit = 10;

const offset = 5;

try {
  const { result, ...httpResponse } = await showsController.getAShowsEpisodes(
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


# Get-Users-Saved-Shows

Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.

```ts
async getUsersSavedShows(  limit?: number,
  offset?: number,
requestOptions?: RequestOptions): Promise<ApiResponse<PagingSavedShowObject>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `limit` | `number \| undefined` | Query, Optional | - |
| `offset` | `number \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### oauth_2_0

`user-library-read`

## Response Type

[`PagingSavedShowObject`](../../doc/models/paging-saved-show-object.md)

## Example Usage

```ts
const limit = 10;

const offset = 5;

try {
  const { result, ...httpResponse } = await showsController.getUsersSavedShows(
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


# Save-Shows-User

Save one or more shows to current Spotify user's library.

```ts
async saveShowsUser(  ids: string,
  body?: MeShowsRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `string` | Query, Required | - |
| `body` | [`MeShowsRequest \| undefined`](../../doc/models/me-shows-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### oauth_2_0

`user-library-modify`

## Response Type

`void`

## Example Usage

```ts
const ids = '5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ';

try {
  const { result, ...httpResponse } = await showsController.saveShowsUser(ids);
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


# Remove-Shows-User

Delete one or more shows from current Spotify user's library.

```ts
async removeShowsUser(  ids: string,
  market?: string,
  body?: MeShowsRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `string` | Query, Required | - |
| `market` | `string \| undefined` | Query, Optional | - |
| `body` | [`MeShowsRequest \| undefined`](../../doc/models/me-shows-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### oauth_2_0

`user-library-modify`

## Response Type

`void`

## Example Usage

```ts
const ids = '5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ';

const market = 'ES';

try {
  const { result, ...httpResponse } = await showsController.removeShowsUser(
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


# Check-Users-Saved-Shows

Check if one or more shows is already saved in the current Spotify user's library.

```ts
async checkUsersSavedShows(  ids: string,
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
const ids = '5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ';

try {
  const { result, ...httpResponse } = await showsController.checkUsersSavedShows(ids);
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

