# Chapters

```ts
const chaptersController = new ChaptersController(client);
```

## Class Name

`ChaptersController`

## Methods

* [Get-a-Chapter](../../doc/controllers/chapters.md#get-a-chapter)
* [Get-Several-Chapters](../../doc/controllers/chapters.md#get-several-chapters)


# Get-a-Chapter

Get Spotify catalog information for a single audiobook chapter. Chapters are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.

```ts
async getAChapter(  id: string,
  market?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ChapterObject>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `market` | `string \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ChapterObject`](../../doc/models/chapter-object.md)

## Example Usage

```ts
const id = '0D5wENdkdwbqlrHoaJ9g29';

const market = 'ES';

try {
  const { result, ...httpResponse } = await chaptersController.getAChapter(
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


# Get-Several-Chapters

Get Spotify catalog information for several audiobook chapters identified by their Spotify IDs. Chapters are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.

```ts
async getSeveralChapters(  ids: string,
  market?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ManyChapters>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `string` | Query, Required | - |
| `market` | `string \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ManyChapters`](../../doc/models/many-chapters.md)

## Example Usage

```ts
const ids = '0IsXVP0JmcB2adSE338GkK,3ZXb8FKZGU0EHALYX6uCzU,0D5wENdkdwbqlrHoaJ9g29';

const market = 'ES';

try {
  const { result, ...httpResponse } = await chaptersController.getSeveralChapters(
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

