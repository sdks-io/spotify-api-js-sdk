
# Getting Started with Spotify Web API

## Introduction

You can use Spotify's Web API to discover music and podcasts, manage your Spotify library, control audio playback, and much more. Browse our available Web API endpoints using the sidebar at left, or via the navigation bar on top of this page on smaller screens.

In order to make successful Web API requests your app will need a valid access token. One can be obtained through <a href="https://developer.spotify.com/documentation/general/guides/authorization-guide/">OAuth 2.0</a>.

The base URI for all Web API requests is `https://api.spotify.com/v1`.

Need help? See our <a href="https://developer.spotify.com/documentation/web-api/guides/">Web API guides</a> for more information, or visit the <a href="https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer">Spotify for Developers community forum</a> to ask questions and connect with other developers.

## Install the Package

Run the following command from your project directory to install the package from npm:

```ts
npm install spotify-api-sdk@1.0.0
```

For additional package details, see the [Npm page for the spotify-api-sdk@1.0.0 npm](https://www.npmjs.com/package/spotify-api-sdk/v/1.0.0).

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](https://www.github.com/sdks-io/spotify-api-js-sdk/tree/1.0.0/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `environment` | `Environment` | The API environment. <br> **Default: `Environment.Production`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `authorizationCodeAuthCredentials` | [`AuthorizationCodeAuthCredentials`](https://www.github.com/sdks-io/spotify-api-js-sdk/tree/1.0.0/doc/auth/oauth-2-authorization-code-grant.md) | The credential object for authorizationCodeAuth |

### HttpClientOptions

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout in milliseconds. |
| `httpAgent` | `any` | Custom http agent to be used when performing http requests. |
| `httpsAgent` | `any` | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests. |

### RetryConfiguration

| Parameter | Type | Description |
|  --- | --- | --- |
| `maxNumberOfRetries` | `number` | Maximum number of retries. <br> *Default*: `0` |
| `retryOnTimeout` | `boolean` | Whether to retry on request timeout. <br> *Default*: `true` |
| `retryInterval` | `number` | Interval before next retry. Used in calculation of wait time for next request in case of failure. <br> *Default*: `1` |
| `maximumRetryWaitTime` | `number` | Overall wait time for the requests getting retried. <br> *Default*: `0` |
| `backoffFactor` | `number` | Used in calculation of wait time for next request in case of failure. <br> *Default*: `2` |
| `httpStatusCodesToRetry` | `number[]` | Http status codes to retry against. <br> *Default*: `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524]` |
| `httpMethodsToRetry` | `HttpMethod[]` | Http methods to retry against. <br> *Default*: `['GET', 'PUT']` |

The API client can be initialized as follows:

```ts
const client = new Client({
  authorizationCodeAuthCredentials: {
    oAuthClientId: 'OAuthClientId',
    oAuthClientSecret: 'OAuthClientSecret',
    oAuthRedirectUri: 'OAuthRedirectUri',
    oAuthScopes: [
      OAuthScopeEnum.AppRemoteControl,
      OAuthScopeEnum.PlaylistReadPrivate
    ]
  },
  timeout: 0,
  environment: Environment.Production,
});
```

## Authorization

This API uses the following authentication schemes.

* [`oauth_2_0 (OAuth 2 Authorization Code Grant)`](https://www.github.com/sdks-io/spotify-api-js-sdk/tree/1.0.0/doc/auth/oauth-2-authorization-code-grant.md)

## List of APIs

* [Albums](https://www.github.com/sdks-io/spotify-api-js-sdk/tree/1.0.0/doc/controllers/albums.md)
* [Artists](https://www.github.com/sdks-io/spotify-api-js-sdk/tree/1.0.0/doc/controllers/artists.md)
* [Audiobooks](https://www.github.com/sdks-io/spotify-api-js-sdk/tree/1.0.0/doc/controllers/audiobooks.md)
* [Categories](https://www.github.com/sdks-io/spotify-api-js-sdk/tree/1.0.0/doc/controllers/categories.md)
* [Chapters](https://www.github.com/sdks-io/spotify-api-js-sdk/tree/1.0.0/doc/controllers/chapters.md)
* [Episodes](https://www.github.com/sdks-io/spotify-api-js-sdk/tree/1.0.0/doc/controllers/episodes.md)
* [Genres](https://www.github.com/sdks-io/spotify-api-js-sdk/tree/1.0.0/doc/controllers/genres.md)
* [Markets](https://www.github.com/sdks-io/spotify-api-js-sdk/tree/1.0.0/doc/controllers/markets.md)
* [Player](https://www.github.com/sdks-io/spotify-api-js-sdk/tree/1.0.0/doc/controllers/player.md)
* [Playlists](https://www.github.com/sdks-io/spotify-api-js-sdk/tree/1.0.0/doc/controllers/playlists.md)
* [Search](https://www.github.com/sdks-io/spotify-api-js-sdk/tree/1.0.0/doc/controllers/search.md)
* [Shows](https://www.github.com/sdks-io/spotify-api-js-sdk/tree/1.0.0/doc/controllers/shows.md)
* [Tracks](https://www.github.com/sdks-io/spotify-api-js-sdk/tree/1.0.0/doc/controllers/tracks.md)
* [Users](https://www.github.com/sdks-io/spotify-api-js-sdk/tree/1.0.0/doc/controllers/users.md)

## Classes Documentation

* [ApiResponse](https://www.github.com/sdks-io/spotify-api-js-sdk/tree/1.0.0/doc/api-response.md)
* [ApiError](https://www.github.com/sdks-io/spotify-api-js-sdk/tree/1.0.0/doc/api-error.md)

