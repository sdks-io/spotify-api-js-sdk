/**
 * Spotify Web APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { ImageObject, imageObjectSchema } from '../models/imageObject';
import {
  PagingFeaturedPlaylistObject,
  pagingFeaturedPlaylistObjectSchema,
} from '../models/pagingFeaturedPlaylistObject';
import {
  PagingPlaylistObject,
  pagingPlaylistObjectSchema,
} from '../models/pagingPlaylistObject';
import {
  PagingPlaylistTrackObject,
  pagingPlaylistTrackObjectSchema,
} from '../models/pagingPlaylistTrackObject';
import { PlaylistObject, playlistObjectSchema } from '../models/playlistObject';
import {
  PlaylistSnapshotId,
  playlistSnapshotIdSchema,
} from '../models/playlistSnapshotId';
import {
  PlaylistsRequest,
  playlistsRequestSchema,
} from '../models/playlistsRequest';
import {
  PlaylistsTracksRequest,
  playlistsTracksRequestSchema,
} from '../models/playlistsTracksRequest';
import {
  PlaylistsTracksRequest1,
  playlistsTracksRequest1Schema,
} from '../models/playlistsTracksRequest1';
import {
  PlaylistsTracksRequest2,
  playlistsTracksRequest2Schema,
} from '../models/playlistsTracksRequest2';
import {
  UsersPlaylistsRequest,
  usersPlaylistsRequestSchema,
} from '../models/usersPlaylistsRequest';
import { array, number, optional, string, unknown } from '../schema';
import { BaseController } from './baseController';
import { ForbiddenError } from '../errors/forbiddenError';
import { TooManyRequestsError } from '../errors/tooManyRequestsError';
import { UnauthorizedError } from '../errors/unauthorizedError';

export class PlaylistsController extends BaseController {
  /**
   * Get a playlist owned by a Spotify user.
   *
   *
   * @param playlistId
   * @param market
   * @param fields
   * @param additionalTypes
   * @return Response from the API call
   */
  async getPlaylist(
    playlistId: string,
    market?: string,
    fields?: string,
    additionalTypes?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PlaylistObject>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      playlistId: [playlistId, string()],
      market: [market, optional(string())],
      fields: [fields, optional(string())],
      additionalTypes: [additionalTypes, optional(string())],
    });
    req.query('market', mapped.market);
    req.query('fields', mapped.fields);
    req.query('additional_types', mapped.additionalTypes);
    req.appendTemplatePath`/playlists/${mapped.playlistId}`;
    req.throwOn(
      401,
      UnauthorizedError,
      'Bad or expired token. This can happen if the user revoked a token or\nthe access token has expired. You should re-authenticate the user.\n'
    );
    req.throwOn(
      403,
      ForbiddenError,
      "Bad OAuth request (wrong consumer key, bad nonce, expired\ntimestamp...). Unfortunately, re-authenticating the user won't help here.\n"
    );
    req.throwOn(
      429,
      TooManyRequestsError,
      'The app has exceeded its rate limits.\n'
    );
    req.authenticate([{ oauth20: true }]);
    return req.callAsJson(playlistObjectSchema, requestOptions);
  }

  /**
   * Change a playlist's name and public/private state. (The user must, of
   * course, own the playlist.)
   *
   *
   * @param playlistId
   * @param body
   * @return Response from the API call
   */
  async changePlaylistDetails(
    playlistId: string,
    body?: PlaylistsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      playlistId: [playlistId, string()],
      body: [body, optional(playlistsRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/playlists/${mapped.playlistId}`;
    req.throwOn(
      401,
      UnauthorizedError,
      'Bad or expired token. This can happen if the user revoked a token or\nthe access token has expired. You should re-authenticate the user.\n'
    );
    req.throwOn(
      403,
      ForbiddenError,
      "Bad OAuth request (wrong consumer key, bad nonce, expired\ntimestamp...). Unfortunately, re-authenticating the user won't help here.\n"
    );
    req.throwOn(
      429,
      TooManyRequestsError,
      'The app has exceeded its rate limits.\n'
    );
    req.authenticate([{ oauth20: true }]);
    return req.call(requestOptions);
  }

  /**
   * Get full details of the items of a playlist owned by a Spotify user.
   *
   *
   * @param playlistId
   * @param market
   * @param fields
   * @param limit            Example: 20
   * @param offset           Example: 0
   * @param additionalTypes
   * @return Response from the API call
   */
  async getPlaylistsTracks(
    playlistId: string,
    market?: string,
    fields?: string,
    limit?: number,
    offset?: number,
    additionalTypes?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PagingPlaylistTrackObject>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      playlistId: [playlistId, string()],
      market: [market, optional(string())],
      fields: [fields, optional(string())],
      limit: [limit, optional(number())],
      offset: [offset, optional(number())],
      additionalTypes: [additionalTypes, optional(string())],
    });
    req.query('market', mapped.market);
    req.query('fields', mapped.fields);
    req.query('limit', mapped.limit);
    req.query('offset', mapped.offset);
    req.query('additional_types', mapped.additionalTypes);
    req.appendTemplatePath`/playlists/${mapped.playlistId}/tracks`;
    req.throwOn(
      401,
      UnauthorizedError,
      'Bad or expired token. This can happen if the user revoked a token or\nthe access token has expired. You should re-authenticate the user.\n'
    );
    req.throwOn(
      403,
      ForbiddenError,
      "Bad OAuth request (wrong consumer key, bad nonce, expired\ntimestamp...). Unfortunately, re-authenticating the user won't help here.\n"
    );
    req.throwOn(
      429,
      TooManyRequestsError,
      'The app has exceeded its rate limits.\n'
    );
    req.authenticate([{ oauth20: true }]);
    return req.callAsJson(pagingPlaylistTrackObjectSchema, requestOptions);
  }

  /**
   * Add one or more items to a user's playlist.
   *
   *
   * @param playlistId
   * @param position
   * @param uris
   * @param body
   * @return Response from the API call
   */
  async addTracksToPlaylist(
    playlistId: string,
    position?: number,
    uris?: string,
    body?: PlaylistsTracksRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PlaylistSnapshotId>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      playlistId: [playlistId, string()],
      position: [position, optional(number())],
      uris: [uris, optional(string())],
      body: [body, optional(playlistsTracksRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.query('position', mapped.position);
    req.query('uris', mapped.uris);
    req.json(mapped.body);
    req.appendTemplatePath`/playlists/${mapped.playlistId}/tracks`;
    req.throwOn(
      401,
      UnauthorizedError,
      'Bad or expired token. This can happen if the user revoked a token or\nthe access token has expired. You should re-authenticate the user.\n'
    );
    req.throwOn(
      403,
      ForbiddenError,
      "Bad OAuth request (wrong consumer key, bad nonce, expired\ntimestamp...). Unfortunately, re-authenticating the user won't help here.\n"
    );
    req.throwOn(
      429,
      TooManyRequestsError,
      'The app has exceeded its rate limits.\n'
    );
    req.authenticate([{ oauth20: true }]);
    return req.callAsJson(playlistSnapshotIdSchema, requestOptions);
  }

  /**
   * Either reorder or replace items in a playlist depending on the request's parameters.
   * To reorder items, include `range_start`, `insert_before`, `range_length` and `snapshot_id` in the
   * request's body.
   * To replace items, include `uris` as either a query parameter or in the request's body.
   * Replacing items in a playlist will overwrite its existing items. This operation can be used for
   * replacing or clearing items in a playlist.
   * <br/>
   * **Note**: Replace and reorder are mutually exclusive operations which share the same endpoint, but
   * have different parameters.
   * These operations can't be applied together in a single request.
   *
   *
   * @param playlistId
   * @param uris
   * @param body
   * @return Response from the API call
   */
  async reorderOrReplacePlaylistsTracks(
    playlistId: string,
    uris?: string,
    body?: PlaylistsTracksRequest1,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PlaylistSnapshotId>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      playlistId: [playlistId, string()],
      uris: [uris, optional(string())],
      body: [body, optional(playlistsTracksRequest1Schema)],
    });
    req.header('Content-Type', 'application/json');
    req.query('uris', mapped.uris);
    req.json(mapped.body);
    req.appendTemplatePath`/playlists/${mapped.playlistId}/tracks`;
    req.throwOn(
      401,
      UnauthorizedError,
      'Bad or expired token. This can happen if the user revoked a token or\nthe access token has expired. You should re-authenticate the user.\n'
    );
    req.throwOn(
      403,
      ForbiddenError,
      "Bad OAuth request (wrong consumer key, bad nonce, expired\ntimestamp...). Unfortunately, re-authenticating the user won't help here.\n"
    );
    req.throwOn(
      429,
      TooManyRequestsError,
      'The app has exceeded its rate limits.\n'
    );
    req.authenticate([{ oauth20: true }]);
    return req.callAsJson(playlistSnapshotIdSchema, requestOptions);
  }

  /**
   * Remove one or more items from a user's playlist.
   *
   *
   * @param playlistId
   * @param body
   * @return Response from the API call
   */
  async removeTracksPlaylist(
    playlistId: string,
    body?: PlaylistsTracksRequest2,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PlaylistSnapshotId>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      playlistId: [playlistId, string()],
      body: [body, optional(playlistsTracksRequest2Schema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/playlists/${mapped.playlistId}/tracks`;
    req.throwOn(
      401,
      UnauthorizedError,
      'Bad or expired token. This can happen if the user revoked a token or\nthe access token has expired. You should re-authenticate the user.\n'
    );
    req.throwOn(
      403,
      ForbiddenError,
      "Bad OAuth request (wrong consumer key, bad nonce, expired\ntimestamp...). Unfortunately, re-authenticating the user won't help here.\n"
    );
    req.throwOn(
      429,
      TooManyRequestsError,
      'The app has exceeded its rate limits.\n'
    );
    req.authenticate([{ oauth20: true }]);
    return req.callAsJson(playlistSnapshotIdSchema, requestOptions);
  }

  /**
   * Get a list of the playlists owned or followed by the current Spotify
   * user.
   *
   *
   * @param limit  Example: 20
   * @param offset Example: 0
   * @return Response from the API call
   */
  async getAListOfCurrentUsersPlaylists(
    limit?: number,
    offset?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PagingPlaylistObject>> {
    const req = this.createRequest('GET', '/me/playlists');
    const mapped = req.prepareArgs({
      limit: [limit, optional(number())],
      offset: [offset, optional(number())],
    });
    req.query('limit', mapped.limit);
    req.query('offset', mapped.offset);
    req.throwOn(
      401,
      UnauthorizedError,
      'Bad or expired token. This can happen if the user revoked a token or\nthe access token has expired. You should re-authenticate the user.\n'
    );
    req.throwOn(
      403,
      ForbiddenError,
      "Bad OAuth request (wrong consumer key, bad nonce, expired\ntimestamp...). Unfortunately, re-authenticating the user won't help here.\n"
    );
    req.throwOn(
      429,
      TooManyRequestsError,
      'The app has exceeded its rate limits.\n'
    );
    req.authenticate([{ oauth20: true }]);
    return req.callAsJson(pagingPlaylistObjectSchema, requestOptions);
  }

  /**
   * Get a list of the playlists owned or followed by a Spotify user.
   *
   *
   * @param userId
   * @param limit   Example: 20
   * @param offset  Example: 0
   * @return Response from the API call
   */
  async getListUsersPlaylists(
    userId: string,
    limit?: number,
    offset?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PagingPlaylistObject>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      userId: [userId, string()],
      limit: [limit, optional(number())],
      offset: [offset, optional(number())],
    });
    req.query('limit', mapped.limit);
    req.query('offset', mapped.offset);
    req.appendTemplatePath`/users/${mapped.userId}/playlists`;
    req.throwOn(
      401,
      UnauthorizedError,
      'Bad or expired token. This can happen if the user revoked a token or\nthe access token has expired. You should re-authenticate the user.\n'
    );
    req.throwOn(
      403,
      ForbiddenError,
      "Bad OAuth request (wrong consumer key, bad nonce, expired\ntimestamp...). Unfortunately, re-authenticating the user won't help here.\n"
    );
    req.throwOn(
      429,
      TooManyRequestsError,
      'The app has exceeded its rate limits.\n'
    );
    req.authenticate([{ oauth20: true }]);
    return req.callAsJson(pagingPlaylistObjectSchema, requestOptions);
  }

  /**
   * Create a playlist for a Spotify user. (The playlist will be empty until
   * you [add tracks](/documentation/web-api/reference/add-tracks-to-playlist).)
   * Each user is generally limited to a maximum of 11000 playlists.
   *
   *
   * @param userId
   * @param body
   * @return Response from the API call
   */
  async createPlaylist(
    userId: string,
    body?: UsersPlaylistsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PlaylistObject>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      userId: [userId, string()],
      body: [body, optional(usersPlaylistsRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/users/${mapped.userId}/playlists`;
    req.throwOn(
      401,
      UnauthorizedError,
      'Bad or expired token. This can happen if the user revoked a token or\nthe access token has expired. You should re-authenticate the user.\n'
    );
    req.throwOn(
      403,
      ForbiddenError,
      "Bad OAuth request (wrong consumer key, bad nonce, expired\ntimestamp...). Unfortunately, re-authenticating the user won't help here.\n"
    );
    req.throwOn(
      429,
      TooManyRequestsError,
      'The app has exceeded its rate limits.\n'
    );
    req.authenticate([{ oauth20: true }]);
    return req.callAsJson(playlistObjectSchema, requestOptions);
  }

  /**
   * Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab).
   *
   *
   * @param locale
   * @param limit  Example: 20
   * @param offset Example: 0
   * @return Response from the API call
   */
  async getFeaturedPlaylists(
    locale?: string,
    limit?: number,
    offset?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PagingFeaturedPlaylistObject>> {
    const req = this.createRequest('GET', '/browse/featured-playlists');
    const mapped = req.prepareArgs({
      locale: [locale, optional(string())],
      limit: [limit, optional(number())],
      offset: [offset, optional(number())],
    });
    req.query('locale', mapped.locale);
    req.query('limit', mapped.limit);
    req.query('offset', mapped.offset);
    req.throwOn(
      401,
      UnauthorizedError,
      'Bad or expired token. This can happen if the user revoked a token or\nthe access token has expired. You should re-authenticate the user.\n'
    );
    req.throwOn(
      403,
      ForbiddenError,
      "Bad OAuth request (wrong consumer key, bad nonce, expired\ntimestamp...). Unfortunately, re-authenticating the user won't help here.\n"
    );
    req.throwOn(
      429,
      TooManyRequestsError,
      'The app has exceeded its rate limits.\n'
    );
    req.authenticate([{ oauth20: true }]);
    return req.callAsJson(pagingFeaturedPlaylistObjectSchema, requestOptions);
  }

  /**
   * Get a list of Spotify playlists tagged with a particular category.
   *
   *
   * @param categoryId
   * @param limit       Example: 20
   * @param offset      Example: 0
   * @return Response from the API call
   */
  async getACategoriesPlaylists(
    categoryId: string,
    limit?: number,
    offset?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PagingFeaturedPlaylistObject>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      categoryId: [categoryId, string()],
      limit: [limit, optional(number())],
      offset: [offset, optional(number())],
    });
    req.query('limit', mapped.limit);
    req.query('offset', mapped.offset);
    req.appendTemplatePath`/browse/categories/${mapped.categoryId}/playlists`;
    req.throwOn(
      401,
      UnauthorizedError,
      'Bad or expired token. This can happen if the user revoked a token or\nthe access token has expired. You should re-authenticate the user.\n'
    );
    req.throwOn(
      403,
      ForbiddenError,
      "Bad OAuth request (wrong consumer key, bad nonce, expired\ntimestamp...). Unfortunately, re-authenticating the user won't help here.\n"
    );
    req.throwOn(
      429,
      TooManyRequestsError,
      'The app has exceeded its rate limits.\n'
    );
    req.authenticate([{ oauth20: true }]);
    return req.callAsJson(pagingFeaturedPlaylistObjectSchema, requestOptions);
  }

  /**
   * Get the current image associated with a specific playlist.
   *
   *
   * @param playlistId
   * @return Response from the API call
   */
  async getPlaylistCover(
    playlistId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ImageObject[]>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ playlistId: [playlistId, string()] });
    req.appendTemplatePath`/playlists/${mapped.playlistId}/images`;
    req.throwOn(
      401,
      UnauthorizedError,
      'Bad or expired token. This can happen if the user revoked a token or\nthe access token has expired. You should re-authenticate the user.\n'
    );
    req.throwOn(
      403,
      ForbiddenError,
      "Bad OAuth request (wrong consumer key, bad nonce, expired\ntimestamp...). Unfortunately, re-authenticating the user won't help here.\n"
    );
    req.throwOn(
      429,
      TooManyRequestsError,
      'The app has exceeded its rate limits.\n'
    );
    req.authenticate([{ oauth20: true }]);
    return req.callAsJson(array(imageObjectSchema), requestOptions);
  }

  /**
   * Replace the image used to represent a specific playlist.
   *
   *
   * @param playlistId
   * @param body
   * @return Response from the API call
   */
  async uploadCustomPlaylistCover(
    playlistId: string,
    body: unknown,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      playlistId: [playlistId, string()],
      body: [body, optional(unknown())],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/playlists/${mapped.playlistId}/images`;
    req.throwOn(
      401,
      UnauthorizedError,
      'Bad or expired token. This can happen if the user revoked a token or\nthe access token has expired. You should re-authenticate the user.\n'
    );
    req.throwOn(
      403,
      ForbiddenError,
      "Bad OAuth request (wrong consumer key, bad nonce, expired\ntimestamp...). Unfortunately, re-authenticating the user won't help here.\n"
    );
    req.throwOn(
      429,
      TooManyRequestsError,
      'The app has exceeded its rate limits.\n'
    );
    req.authenticate([{ oauth20: true }]);
    return req.call(requestOptions);
  }
}