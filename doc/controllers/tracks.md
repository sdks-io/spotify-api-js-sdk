# Tracks

```ts
const tracksController = new TracksController(client);
```

## Class Name

`TracksController`

## Methods

* [Get-Track](../../doc/controllers/tracks.md#get-track)
* [Get-Several-Tracks](../../doc/controllers/tracks.md#get-several-tracks)
* [Get-Users-Saved-Tracks](../../doc/controllers/tracks.md#get-users-saved-tracks)
* [Save-Tracks-User](../../doc/controllers/tracks.md#save-tracks-user)
* [Remove-Tracks-User](../../doc/controllers/tracks.md#remove-tracks-user)
* [Check-Users-Saved-Tracks](../../doc/controllers/tracks.md#check-users-saved-tracks)
* [Get-Several-Audio-Features](../../doc/controllers/tracks.md#get-several-audio-features)
* [Get-Audio-Features](../../doc/controllers/tracks.md#get-audio-features)
* [Get-Audio-Analysis](../../doc/controllers/tracks.md#get-audio-analysis)
* [Get-Recommendations](../../doc/controllers/tracks.md#get-recommendations)


# Get-Track

Get Spotify catalog information for a single track identified by its
unique Spotify ID.

```ts
async getTrack(  id: string,
  market?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<TrackObject>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `market` | `string \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TrackObject`](../../doc/models/track-object.md)

## Example Usage

```ts
const id = '11dFghVXANMlKmJXsNCbNl';

const market = 'ES';

try {
  const { result, ...httpResponse } = await tracksController.getTrack(
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


# Get-Several-Tracks

Get Spotify catalog information for multiple tracks based on their Spotify IDs.

```ts
async getSeveralTracks(  ids: string,
  market?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ManyTracks>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `string` | Query, Required | - |
| `market` | `string \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ManyTracks`](../../doc/models/many-tracks.md)

## Example Usage

```ts
const ids = '7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B';

const market = 'ES';

try {
  const { result, ...httpResponse } = await tracksController.getSeveralTracks(
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


# Get-Users-Saved-Tracks

Get a list of the songs saved in the current Spotify user's 'Your Music' library.

```ts
async getUsersSavedTracks(  market?: string,
  limit?: number,
  offset?: number,
requestOptions?: RequestOptions): Promise<ApiResponse<PagingSavedTrackObject>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `market` | `string \| undefined` | Query, Optional | - |
| `limit` | `number \| undefined` | Query, Optional | - |
| `offset` | `number \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### oauth_2_0

`user-library-read`

## Response Type

[`PagingSavedTrackObject`](../../doc/models/paging-saved-track-object.md)

## Example Usage

```ts
const market = 'ES';

const limit = 10;

const offset = 5;

try {
  const { result, ...httpResponse } = await tracksController.getUsersSavedTracks(
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


# Save-Tracks-User

Save one or more tracks to the current user's 'Your Music' library.

```ts
async saveTracksUser(  ids: string,
  body?: MeTracksRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `string` | Query, Required | - |
| `body` | [`MeTracksRequest \| undefined`](../../doc/models/me-tracks-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### oauth_2_0

`user-library-modify`

## Response Type

`void`

## Example Usage

```ts
const ids = '7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B';

try {
  const { result, ...httpResponse } = await tracksController.saveTracksUser(ids);
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


# Remove-Tracks-User

Remove one or more tracks from the current user's 'Your Music' library.

```ts
async removeTracksUser(  ids: string,
  body?: MeTracksRequest1,
requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `string` | Query, Required | - |
| `body` | [`MeTracksRequest1 \| undefined`](../../doc/models/me-tracks-request-1.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### oauth_2_0

`user-library-modify`

## Response Type

`void`

## Example Usage

```ts
const ids = '7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B';

try {
  const { result, ...httpResponse } = await tracksController.removeTracksUser(ids);
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


# Check-Users-Saved-Tracks

Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.

```ts
async checkUsersSavedTracks(  ids: string,
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
const ids = '7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B';

try {
  const { result, ...httpResponse } = await tracksController.checkUsersSavedTracks(ids);
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


# Get-Several-Audio-Features

Get audio features for multiple tracks based on their Spotify IDs.

```ts
async getSeveralAudioFeatures(  ids: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ManyAudioFeatures>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `string` | Query, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ManyAudioFeatures`](../../doc/models/many-audio-features.md)

## Example Usage

```ts
const ids = '7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B';

try {
  const { result, ...httpResponse } = await tracksController.getSeveralAudioFeatures(ids);
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


# Get-Audio-Features

Get audio feature information for a single track identified by its unique
Spotify ID.

```ts
async getAudioFeatures(  id: string,
requestOptions?: RequestOptions): Promise<ApiResponse<AudioFeaturesObject>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AudioFeaturesObject`](../../doc/models/audio-features-object.md)

## Example Usage

```ts
const id = '11dFghVXANMlKmJXsNCbNl';

try {
  const { result, ...httpResponse } = await tracksController.getAudioFeatures(id);
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


# Get-Audio-Analysis

Get a low-level audio analysis for a track in the Spotify catalog. The audio analysis describes the track’s structure and musical content, including rhythm, pitch, and timbre.

```ts
async getAudioAnalysis(  id: string,
requestOptions?: RequestOptions): Promise<ApiResponse<AudioAnalysisObject>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AudioAnalysisObject`](../../doc/models/audio-analysis-object.md)

## Example Usage

```ts
const id = '11dFghVXANMlKmJXsNCbNl';

try {
  const { result, ...httpResponse } = await tracksController.getAudioAnalysis(id);
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


# Get-Recommendations

Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.

For artists and tracks that are very new or obscure there might not be enough data to generate a list of tracks.

```ts
async getRecommendations(  limit?: number,
  market?: string,
  seedArtists?: string,
  seedGenres?: string,
  seedTracks?: string,
  minAcousticness?: number,
  maxAcousticness?: number,
  targetAcousticness?: number,
  minDanceability?: number,
  maxDanceability?: number,
  targetDanceability?: number,
  minDurationMs?: number,
  maxDurationMs?: number,
  targetDurationMs?: number,
  minEnergy?: number,
  maxEnergy?: number,
  targetEnergy?: number,
  minInstrumentalness?: number,
  maxInstrumentalness?: number,
  targetInstrumentalness?: number,
  minKey?: number,
  maxKey?: number,
  targetKey?: number,
  minLiveness?: number,
  maxLiveness?: number,
  targetLiveness?: number,
  minLoudness?: number,
  maxLoudness?: number,
  targetLoudness?: number,
  minMode?: number,
  maxMode?: number,
  targetMode?: number,
  minPopularity?: number,
  maxPopularity?: number,
  targetPopularity?: number,
  minSpeechiness?: number,
  maxSpeechiness?: number,
  targetSpeechiness?: number,
  minTempo?: number,
  maxTempo?: number,
  targetTempo?: number,
  minTimeSignature?: number,
  maxTimeSignature?: number,
  targetTimeSignature?: number,
  minValence?: number,
  maxValence?: number,
  targetValence?: number,
requestOptions?: RequestOptions): Promise<ApiResponse<RecommendationsObject>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `limit` | `number \| undefined` | Query, Optional | - |
| `market` | `string \| undefined` | Query, Optional | - |
| `seedArtists` | `string \| undefined` | Query, Optional | - |
| `seedGenres` | `string \| undefined` | Query, Optional | - |
| `seedTracks` | `string \| undefined` | Query, Optional | - |
| `minAcousticness` | `number \| undefined` | Query, Optional | - |
| `maxAcousticness` | `number \| undefined` | Query, Optional | - |
| `targetAcousticness` | `number \| undefined` | Query, Optional | - |
| `minDanceability` | `number \| undefined` | Query, Optional | - |
| `maxDanceability` | `number \| undefined` | Query, Optional | - |
| `targetDanceability` | `number \| undefined` | Query, Optional | - |
| `minDurationMs` | `number \| undefined` | Query, Optional | - |
| `maxDurationMs` | `number \| undefined` | Query, Optional | - |
| `targetDurationMs` | `number \| undefined` | Query, Optional | - |
| `minEnergy` | `number \| undefined` | Query, Optional | - |
| `maxEnergy` | `number \| undefined` | Query, Optional | - |
| `targetEnergy` | `number \| undefined` | Query, Optional | - |
| `minInstrumentalness` | `number \| undefined` | Query, Optional | - |
| `maxInstrumentalness` | `number \| undefined` | Query, Optional | - |
| `targetInstrumentalness` | `number \| undefined` | Query, Optional | - |
| `minKey` | `number \| undefined` | Query, Optional | - |
| `maxKey` | `number \| undefined` | Query, Optional | - |
| `targetKey` | `number \| undefined` | Query, Optional | - |
| `minLiveness` | `number \| undefined` | Query, Optional | - |
| `maxLiveness` | `number \| undefined` | Query, Optional | - |
| `targetLiveness` | `number \| undefined` | Query, Optional | - |
| `minLoudness` | `number \| undefined` | Query, Optional | - |
| `maxLoudness` | `number \| undefined` | Query, Optional | - |
| `targetLoudness` | `number \| undefined` | Query, Optional | - |
| `minMode` | `number \| undefined` | Query, Optional | - |
| `maxMode` | `number \| undefined` | Query, Optional | - |
| `targetMode` | `number \| undefined` | Query, Optional | - |
| `minPopularity` | `number \| undefined` | Query, Optional | - |
| `maxPopularity` | `number \| undefined` | Query, Optional | - |
| `targetPopularity` | `number \| undefined` | Query, Optional | - |
| `minSpeechiness` | `number \| undefined` | Query, Optional | - |
| `maxSpeechiness` | `number \| undefined` | Query, Optional | - |
| `targetSpeechiness` | `number \| undefined` | Query, Optional | - |
| `minTempo` | `number \| undefined` | Query, Optional | - |
| `maxTempo` | `number \| undefined` | Query, Optional | - |
| `targetTempo` | `number \| undefined` | Query, Optional | - |
| `minTimeSignature` | `number \| undefined` | Query, Optional | - |
| `maxTimeSignature` | `number \| undefined` | Query, Optional | - |
| `targetTimeSignature` | `number \| undefined` | Query, Optional | - |
| `minValence` | `number \| undefined` | Query, Optional | - |
| `maxValence` | `number \| undefined` | Query, Optional | - |
| `targetValence` | `number \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RecommendationsObject`](../../doc/models/recommendations-object.md)

## Example Usage

```ts
const limit = 10;

const market = 'ES';

const seedArtists = '4NHQUGzhtTLFvgF5SZesLK';

const seedGenres = 'classical,country';

const seedTracks = '0c6xIDDpzE81m2q797ordA';

try {
  const { result, ...httpResponse } = await tracksController.getRecommendations(
  limit,
  market,
  seedArtists,
  seedGenres,
  seedTracks
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

