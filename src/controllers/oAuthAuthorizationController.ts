/**
 * Spotify Web APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { OAuthToken, oAuthTokenSchema } from '../models/oAuthToken';
import { optional, string } from '../schema';
import { BaseController } from './baseController';
import { OAuthProviderError } from '../errors/oAuthProviderError';

export class OAuthAuthorizationController extends BaseController {
  /**
   * Create a new OAuth 2 token.
   *
   * @param authorization Authorization header in Basic auth format
   * @param code          Authorization Code
   * @param redirectUri   Redirect Uri
   * @return Response from the API call
   */
  async requestToken(
    authorization: string,
    code: string,
    redirectUri: string,
    fieldParameters?: Record<string, unknown>,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<OAuthToken>> {
    const req = this.createRequest('POST', '/api/token');
    req.baseUrl('auth server');
    const mapped = req.prepareArgs({
      authorization: [authorization, string()],
      code: [code, string()],
      redirectUri: [redirectUri, string()],
    });
    req.header('Authorization', mapped.authorization);
    req.form({
      grant_type: 'authorization_code',
      code: mapped.code,
      redirect_uri: mapped.redirectUri,
      ...fieldParameters,
    });
    req.throwOn(400, OAuthProviderError, 'OAuth 2 provider returned an error.');
    req.throwOn(
      401,
      OAuthProviderError,
      'OAuth 2 provider says client authentication failed.'
    );
    req.authenticate(false);
    return req.callAsJson(oAuthTokenSchema, requestOptions);
  }

  /**
   * Obtain a new access token using a refresh token
   *
   * @param authorization Authorization header in Basic auth format
   * @param refreshToken  Refresh token
   * @param scope         Requested scopes as a space-delimited list.
   * @return Response from the API call
   */
  async refreshToken(
    authorization: string,
    refreshToken: string,
    scope?: string,
    fieldParameters?: Record<string, unknown>,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<OAuthToken>> {
    const req = this.createRequest('POST', '/api/token');
    req.baseUrl('auth server');
    const mapped = req.prepareArgs({
      authorization: [authorization, string()],
      refreshToken: [refreshToken, string()],
      scope: [scope, optional(string())],
    });
    req.header('Authorization', mapped.authorization);
    req.form({
      grant_type: 'refresh_token',
      refresh_token: mapped.refreshToken,
      scope: mapped.scope,
      ...fieldParameters,
    });
    req.throwOn(400, OAuthProviderError, 'OAuth 2 provider returned an error.');
    req.throwOn(
      401,
      OAuthProviderError,
      'OAuth 2 provider says client authentication failed.'
    );
    req.authenticate(false);
    return req.callAsJson(oAuthTokenSchema, requestOptions);
  }
}