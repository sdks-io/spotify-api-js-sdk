# Genres

```ts
const genresController = new GenresController(client);
```

## Class Name

`GenresController`


# Get-Recommendation-Genres

Retrieve a list of available genres seed parameter values for [recommendations](/documentation/web-api/reference/get-recommendations).

```ts
async getRecommendationGenres(requestOptions?: RequestOptions): Promise<ApiResponse<ManyGenres>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ManyGenres`](../../doc/models/many-genres.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await genresController.getRecommendationGenres();
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

