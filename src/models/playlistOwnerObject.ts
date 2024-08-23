/**
 * Spotify Web APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, nullable, object, optional, Schema, string } from '../schema';
import {
  ExternalUrlObject,
  externalUrlObjectSchema,
} from './externalUrlObject';
import { FollowersObject, followersObjectSchema } from './followersObject';
import { Type4Enum, type4EnumSchema } from './type4Enum';

export interface PlaylistOwnerObject {
  /** Known public external URLs for this user. */
  externalUrls?: ExternalUrlObject;
  /** Information about the followers of this user. */
  followers?: FollowersObject;
  /** A link to the Web API endpoint for this user. */
  href?: string;
  /** The [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids) for this user. */
  id?: string;
  /** The object type. */
  type?: Type4Enum;
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for this user. */
  uri?: string;
  /** The name displayed on the user's profile. `null` if not available. */
  displayName?: string | null;
}

export const playlistOwnerObjectSchema: Schema<PlaylistOwnerObject> = object({
  externalUrls: [
    'external_urls',
    optional(lazy(() => externalUrlObjectSchema)),
  ],
  followers: ['followers', optional(lazy(() => followersObjectSchema))],
  href: ['href', optional(string())],
  id: ['id', optional(string())],
  type: ['type', optional(type4EnumSchema)],
  uri: ['uri', optional(string())],
  displayName: ['display_name', optional(nullable(string()))],
});
