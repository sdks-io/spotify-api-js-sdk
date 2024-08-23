
# OAuth 2 Authorization Code Grant



Documentation for accessing and setting credentials for oauth_2_0.

## Auth Credentials

| Name | Type | Description | Setter |
|  --- | --- | --- | --- |
| OAuthClientId | `string` | OAuth 2 Client ID | `oAuthClientId` |
| OAuthClientSecret | `string` | OAuth 2 Client Secret | `oAuthClientSecret` |
| OAuthRedirectUri | `string` | OAuth 2 Redirection endpoint or Callback Uri | `oAuthRedirectUri` |
| OAuthToken | `OAuthToken` | Object for storing information about the OAuth token | `oAuthToken` |
| OAuthScopes | `OAuthScopeEnum[]` | List of scopes that apply to the OAuth token | `oAuthScopes` |
| OAuthClockSkew | `number` | Clock skew time in seconds applied while checking the OAuth Token expiry. | `clockSkew` |
| OAuthTokenProvider | `(lastOAuthToken: OAuthToken \| undefined, authManager: AuthorizationCodeAuthManager) => Promise<OAuthToken>` | Registers a callback for oAuth Token Provider used for automatic token fetching/refreshing. | `oAuthTokenProvider` |
| OAuthOnTokenUpdate | `(token: OAuthToken) => void` | Registers a callback for token update event. | `oAuthOnTokenUpdate` |



**Note:** Auth credentials can be set using `authorizationCodeAuthCredentials` object in the client.

## Usage Example

### 1\. Client Initialization

You must initialize the client with *OAuth 2.0 Authorization Code Grant* credentials as shown in the following code snippet.

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
});
```



Your application must obtain user authorization before it can execute an endpoint call in case this SDK chooses to use *OAuth 2.0 Authorization Code Grant*. This authorization includes the following steps

### 2\. Obtain user consent

To obtain user's consent, you must redirect the user to the authorization page.The `buildAuthorizationUrl()` method creates the URL to the authorization page. You must have initialized the client with scopes for which you need permission to access.

```ts
const authUrl = client.authorizationCodeAuthManager?.buildAuthorizationUrl();
```

### 3\. Handle the OAuth server response

Once the user responds to the consent request, the OAuth 2.0 server responds to your application's access request by redirecting the user to the redirect URI specified set in `Configuration`.

If the user approves the request, the authorization code will be sent as the `code` query string:

```
https://example.com/oauth/callback?code=XXXXXXXXXXXXXXXXXXXXXXXXX
```

If the user does not approve the request, the response contains an `error` query string:

```
https://example.com/oauth/callback?error=access_denied
```

### 4\. Authorize the client using the code

After the server receives the code, it can exchange this for an *access token*. The access token is an object containing information for authorizing client requests and refreshing the token itself.

```ts
try {
  const token = await client.authorizationCodeAuthManager?.fetchToken(authorizationCode);
  if (token) {
    client.withConfiguration({
      authorizationCodeAuthCredentials: {
        ...config.authorizationCodeAuthCredentials,
        oAuthToken: token
      }
    });
  }
} catch(error) {
  // handle ApiError or OAuthProviderError if needed
}
```

### Scopes

Scopes enable your application to only request access to the resources it needs while enabling users to control the amount of access they grant to your application. Available scopes are defined in the [`OAuthScopeEnum`](../../doc/models/o-auth-scope-enum.md) enumeration.

| Scope Name | Description |
|  --- | --- |
| `AppRemoteControl` | Communicate with the Spotify app on your device. |
| `PlaylistReadPrivate` | Access your private playlists. |
| `PlaylistReadCollaborative` | Access your collaborative playlists. |
| `PlaylistModifyPublic` | Manage your public playlists. |
| `PlaylistModifyPrivate` | Manage your private playlists. |
| `UserLibraryRead` | Access your saved content. |
| `UserLibraryModify` | Manage your saved content. |
| `UserReadPrivate` | Access your subscription details. |
| `UserReadEmail` | Get your real email address. |
| `UserFollowRead` | Access your followers and who you are following. |
| `UserFollowModify` | Manage your saved content. |
| `UserTopRead` | Read your top artists and content. |
| `UserReadPlaybackPosition` | Read your position in content you have played. |
| `UserReadPlaybackState` | Read your currently playing content and Spotify Connect devices information. |
| `UserReadRecentlyPlayed` | Access your recently played items. |
| `UserReadCurrentlyPlaying` | Read your currently playing content. |
| `UserModifyPlaybackState` | Control playback on your Spotify clients and Spotify Connect devices. |
| `UgcImageUpload` | Upload images to Spotify on your behalf. |
| `Streaming` | Play content and control playback on your other devices. |

### Refreshing the token

An access token may expire after sometime. To extend its lifetime, you must refresh the token.

```ts
try {
  const token = await client.authorizationCodeAuthManager?.refreshToken();
} catch(error) {
  // handle error
}
```

If a token expires, an exception will be thrown before the next endpoint call requiring authentication.

### Storing an access token for reuse

It is recommended that you store the access token for reuse.

```ts
Store the token in session storage or local storage.
```

### Creating a client from a stored token

To authorize a client using a stored access token, just set the access token in Configuration along with the other configuration parameters before creating the client:

```ts
const newClient = client.withConfiguration({
  authorizationCodeAuthCredentials: {
    ...config.authorizationCodeAuthCredentials,
    oAuthToken: token
  }
});
```

### Complete example



```ts
// function for storing token to database
async function saveTokenToDatabase(token: OAuthToken) {
  // Code to save the token to the database
}

// function for loading token from database
async function loadTokenFromDatabase(): Promise<OAuthToken | undefined> {
  // Load token from the database and return it (return undefined if no token exists)
  return undefined;
}

// create a new client from configuration
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

// obtain access token, needed for client to be authorized
const previousToken = await loadTokenFromDatabase();
if (previousToken) {
  // restore previous access token and update the cloned configuration with the token
  client.withConfiguration({
    authorizationCodeAuthCredentials: {
      ...config.authorizationCodeAuthCredentials,
      oAuthToken: previousToken
    }
  });
}
else {
    // redirect user to a page that handles authorization
}
```


