# Playlists

```ts
const playlistsController = new PlaylistsController(client);
```

## Class Name

`PlaylistsController`

## Methods

* [Get-Playlist](../../doc/controllers/playlists.md#get-playlist)
* [Change-Playlist-Details](../../doc/controllers/playlists.md#change-playlist-details)
* [Get-Playlists-Tracks](../../doc/controllers/playlists.md#get-playlists-tracks)
* [Add-Tracks-to-Playlist](../../doc/controllers/playlists.md#add-tracks-to-playlist)
* [Reorder-or-Replace-Playlists-Tracks](../../doc/controllers/playlists.md#reorder-or-replace-playlists-tracks)
* [Remove-Tracks-Playlist](../../doc/controllers/playlists.md#remove-tracks-playlist)
* [Get-a-List-of-Current-Users-Playlists](../../doc/controllers/playlists.md#get-a-list-of-current-users-playlists)
* [Get-List-Users-Playlists](../../doc/controllers/playlists.md#get-list-users-playlists)
* [Create-Playlist](../../doc/controllers/playlists.md#create-playlist)
* [Get-Featured-Playlists](../../doc/controllers/playlists.md#get-featured-playlists)
* [Get-a-Categories-Playlists](../../doc/controllers/playlists.md#get-a-categories-playlists)
* [Get-Playlist-Cover](../../doc/controllers/playlists.md#get-playlist-cover)
* [Upload-Custom-Playlist-Cover](../../doc/controllers/playlists.md#upload-custom-playlist-cover)


# Get-Playlist

Get a playlist owned by a Spotify user.

```ts
async getPlaylist(  playlistId: string,
  market?: string,
  fields?: string,
  additionalTypes?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<PlaylistObject>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `playlistId` | `string` | Template, Required | - |
| `market` | `string \| undefined` | Query, Optional | - |
| `fields` | `string \| undefined` | Query, Optional | - |
| `additionalTypes` | `string \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PlaylistObject`](../../doc/models/playlist-object.md)

## Example Usage

```ts
const playlistId = '3cEYpjA9oz9GiPac4AsH4n';

const market = 'ES';

const fields = 'items(added_by.id,track(name,href,album(name,href)))';

try {
  const { result, ...httpResponse } = await playlistsController.getPlaylist(
  playlistId,
  market,
  fields
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


# Change-Playlist-Details

Change a playlist's name and public/private state. (The user must, of
course, own the playlist.)

```ts
async changePlaylistDetails(  playlistId: string,
  body?: PlaylistsRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `playlistId` | `string` | Template, Required | - |
| `body` | [`PlaylistsRequest \| undefined`](../../doc/models/playlists-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### oauth_2_0

`playlist-modify-private`, `playlist-modify-public`

## Response Type

`void`

## Example Usage

```ts
const playlistId = '3cEYpjA9oz9GiPac4AsH4n';

const body: PlaylistsRequest = {
  name: 'Updated Playlist Name',
  mPublic: false,
  description: 'Updated playlist description',
};

try {
  const { result, ...httpResponse } = await playlistsController.changePlaylistDetails(
  playlistId,
  body
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


# Get-Playlists-Tracks

Get full details of the items of a playlist owned by a Spotify user.

```ts
async getPlaylistsTracks(  playlistId: string,
  market?: string,
  fields?: string,
  limit?: number,
  offset?: number,
  additionalTypes?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<PagingPlaylistTrackObject>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `playlistId` | `string` | Template, Required | - |
| `market` | `string \| undefined` | Query, Optional | - |
| `fields` | `string \| undefined` | Query, Optional | - |
| `limit` | `number \| undefined` | Query, Optional | - |
| `offset` | `number \| undefined` | Query, Optional | - |
| `additionalTypes` | `string \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### oauth_2_0

`playlist-read-private`

## Response Type

[`PagingPlaylistTrackObject`](../../doc/models/paging-playlist-track-object.md)

## Example Usage

```ts
const playlistId = '3cEYpjA9oz9GiPac4AsH4n';

const market = 'ES';

const fields = 'items(added_by.id,track(name,href,album(name,href)))';

const limit = 10;

const offset = 5;

try {
  const { result, ...httpResponse } = await playlistsController.getPlaylistsTracks(
  playlistId,
  market,
  fields,
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


# Add-Tracks-to-Playlist

Add one or more items to a user's playlist.

```ts
async addTracksToPlaylist(  playlistId: string,
  position?: number,
  uris?: string,
  body?: PlaylistsTracksRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<PlaylistSnapshotId>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `playlistId` | `string` | Template, Required | - |
| `position` | `number \| undefined` | Query, Optional | - |
| `uris` | `string \| undefined` | Query, Optional | - |
| `body` | [`PlaylistsTracksRequest \| undefined`](../../doc/models/playlists-tracks-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### oauth_2_0

`playlist-modify-private`, `playlist-modify-public`

## Response Type

[`PlaylistSnapshotId`](../../doc/models/playlist-snapshot-id.md)

## Example Usage

```ts
const playlistId = '3cEYpjA9oz9GiPac4AsH4n';

const position = 0;

const uris = 'spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:track:1301WleyT98MSxVHPZCA6M';

try {
  const { result, ...httpResponse } = await playlistsController.addTracksToPlaylist(
  playlistId,
  position,
  uris
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


# Reorder-or-Replace-Playlists-Tracks

Either reorder or replace items in a playlist depending on the request's parameters.
To reorder items, include `range_start`, `insert_before`, `range_length` and `snapshot_id` in the request's body.
To replace items, include `uris` as either a query parameter or in the request's body.
Replacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist.
<br/>
**Note**: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters.
These operations can't be applied together in a single request.

```ts
async reorderOrReplacePlaylistsTracks(  playlistId: string,
  uris?: string,
  body?: PlaylistsTracksRequest1,
requestOptions?: RequestOptions): Promise<ApiResponse<PlaylistSnapshotId>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `playlistId` | `string` | Template, Required | - |
| `uris` | `string \| undefined` | Query, Optional | - |
| `body` | [`PlaylistsTracksRequest1 \| undefined`](../../doc/models/playlists-tracks-request-1.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### oauth_2_0

`playlist-modify-private`, `playlist-modify-public`

## Response Type

[`PlaylistSnapshotId`](../../doc/models/playlist-snapshot-id.md)

## Example Usage

```ts
const playlistId = '3cEYpjA9oz9GiPac4AsH4n';

const body: PlaylistsTracksRequest1 = {
  rangeStart: 1,
  insertBefore: 3,
  rangeLength: 2,
};

try {
  const { result, ...httpResponse } = await playlistsController.reorderOrReplacePlaylistsTracks(
  playlistId,
  undefined,
  body
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


# Remove-Tracks-Playlist

Remove one or more items from a user's playlist.

```ts
async removeTracksPlaylist(  playlistId: string,
  body?: PlaylistsTracksRequest2,
requestOptions?: RequestOptions): Promise<ApiResponse<PlaylistSnapshotId>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `playlistId` | `string` | Template, Required | - |
| `body` | [`PlaylistsTracksRequest2 \| undefined`](../../doc/models/playlists-tracks-request-2.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### oauth_2_0

`playlist-modify-private`, `playlist-modify-public`

## Response Type

[`PlaylistSnapshotId`](../../doc/models/playlist-snapshot-id.md)

## Example Usage

```ts
const playlistId = '3cEYpjA9oz9GiPac4AsH4n';

const body: PlaylistsTracksRequest2 = {
  tracks: [
    {}
  ],
};

try {
  const { result, ...httpResponse } = await playlistsController.removeTracksPlaylist(
  playlistId,
  body
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


# Get-a-List-of-Current-Users-Playlists

Get a list of the playlists owned or followed by the current Spotify
user.

```ts
async getAListOfCurrentUsersPlaylists(  limit?: number,
  offset?: number,
requestOptions?: RequestOptions): Promise<ApiResponse<PagingPlaylistObject>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `limit` | `number \| undefined` | Query, Optional | - |
| `offset` | `number \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### oauth_2_0

`playlist-read-private`

## Response Type

[`PagingPlaylistObject`](../../doc/models/paging-playlist-object.md)

## Example Usage

```ts
const limit = 10;

const offset = 5;

try {
  const { result, ...httpResponse } = await playlistsController.getAListOfCurrentUsersPlaylists(
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


# Get-List-Users-Playlists

Get a list of the playlists owned or followed by a Spotify user.

```ts
async getListUsersPlaylists(  userId: string,
  limit?: number,
  offset?: number,
requestOptions?: RequestOptions): Promise<ApiResponse<PagingPlaylistObject>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `limit` | `number \| undefined` | Query, Optional | - |
| `offset` | `number \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### oauth_2_0

`playlist-read-collaborative`, `playlist-read-private`

## Response Type

[`PagingPlaylistObject`](../../doc/models/paging-playlist-object.md)

## Example Usage

```ts
const userId = 'smedjan';

const limit = 10;

const offset = 5;

try {
  const { result, ...httpResponse } = await playlistsController.getListUsersPlaylists(
  userId,
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


# Create-Playlist

Create a playlist for a Spotify user. (The playlist will be empty until
you [add tracks](/documentation/web-api/reference/add-tracks-to-playlist).)
Each user is generally limited to a maximum of 11000 playlists.

```ts
async createPlaylist(  userId: string,
  body?: UsersPlaylistsRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<PlaylistObject>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `body` | [`UsersPlaylistsRequest \| undefined`](../../doc/models/users-playlists-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### oauth_2_0

`playlist-modify-private`, `playlist-modify-public`

## Response Type

[`PlaylistObject`](../../doc/models/playlist-object.md)

## Example Usage

```ts
const userId = 'smedjan';

const body: UsersPlaylistsRequest = {
  name: 'New Playlist',
  mPublic: false,
  description: 'New playlist description',
};

try {
  const { result, ...httpResponse } = await playlistsController.createPlaylist(
  userId,
  body
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


# Get-Featured-Playlists

Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab).

```ts
async getFeaturedPlaylists(  locale?: string,
  limit?: number,
  offset?: number,
requestOptions?: RequestOptions): Promise<ApiResponse<PagingFeaturedPlaylistObject>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locale` | `string \| undefined` | Query, Optional | - |
| `limit` | `number \| undefined` | Query, Optional | - |
| `offset` | `number \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PagingFeaturedPlaylistObject`](../../doc/models/paging-featured-playlist-object.md)

## Example Usage

```ts
const locale = 'sv_SE';

const limit = 10;

const offset = 5;

try {
  const { result, ...httpResponse } = await playlistsController.getFeaturedPlaylists(
  locale,
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


# Get-a-Categories-Playlists

Get a list of Spotify playlists tagged with a particular category.

```ts
async getACategoriesPlaylists(  categoryId: string,
  limit?: number,
  offset?: number,
requestOptions?: RequestOptions): Promise<ApiResponse<PagingFeaturedPlaylistObject>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `categoryId` | `string` | Template, Required | - |
| `limit` | `number \| undefined` | Query, Optional | - |
| `offset` | `number \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PagingFeaturedPlaylistObject`](../../doc/models/paging-featured-playlist-object.md)

## Example Usage

```ts
const categoryId = 'dinner';

const limit = 10;

const offset = 5;

try {
  const { result, ...httpResponse } = await playlistsController.getACategoriesPlaylists(
  categoryId,
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


# Get-Playlist-Cover

Get the current image associated with a specific playlist.

```ts
async getPlaylistCover(  playlistId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ImageObject[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `playlistId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ImageObject[]`](../../doc/models/image-object.md)

## Example Usage

```ts
const playlistId = '3cEYpjA9oz9GiPac4AsH4n';

try {
  const { result, ...httpResponse } = await playlistsController.getPlaylistCover(playlistId);
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


# Upload-Custom-Playlist-Cover

Replace the image used to represent a specific playlist.

```ts
async uploadCustomPlaylistCover(  playlistId: string,
  body: unknown,
requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `playlistId` | `string` | Template, Required | - |
| `body` | `unknown` | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### oauth_2_0

`playlist-modify-private`, `playlist-modify-public`, `ugc-image-upload`

## Response Type

`void`

## Example Usage

```ts
const playlistId = '3cEYpjA9oz9GiPac4AsH4n';

const body = { 'key1': 'val1', 'key2': 'val2' };

try {
  const { result, ...httpResponse } = await playlistsController.uploadCustomPlaylistCover(
  playlistId,
  body
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

