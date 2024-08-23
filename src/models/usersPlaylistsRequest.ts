/**
 * Spotify Web APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema, string } from '../schema';

export interface UsersPlaylistsRequest {
  /** The name for the new playlist, for example `"Your Coolest Playlist"`. This name does not need to be unique; a user may have several playlists with the same name. */
  name: string;
  /** Defaults to `true`. If `true` the playlist will be public, if `false` it will be private. To be able to create private playlists, the user must have granted the `playlist-modify-private` [scope](/documentation/web-api/concepts/scopes/#list-of-scopes) */
  mPublic?: boolean;
  /** Defaults to `false`. If `true` the playlist will be collaborative. _**Note**: to create a collaborative playlist you must also set `public` to `false`. To create collaborative playlists you must have granted `playlist-modify-private` and `playlist-modify-public` [scopes](/documentation/web-api/concepts/scopes/#list-of-scopes)._ */
  collaborative?: boolean;
  /** value for playlist description as displayed in Spotify Clients and in the Web API. */
  description?: string;
}

export const usersPlaylistsRequestSchema: Schema<UsersPlaylistsRequest> = object(
  {
    name: ['name', string()],
    mPublic: ['public', optional(boolean())],
    collaborative: ['collaborative', optional(boolean())],
    description: ['description', optional(string())],
  }
);
