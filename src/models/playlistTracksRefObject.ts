/**
 * Spotify Web APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface PlaylistTracksRefObject {
  /** A link to the Web API endpoint where full details of the playlist's tracks can be retrieved. */
  href?: string;
  /** Number of tracks in the playlist. */
  total?: number;
}

export const playlistTracksRefObjectSchema: Schema<PlaylistTracksRefObject> = object(
  { href: ['href', optional(string())], total: ['total', optional(number())] }
);
