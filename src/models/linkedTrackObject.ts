/**
 * Spotify Web APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import {
  ExternalUrlObject,
  externalUrlObjectSchema,
} from './externalUrlObject';

export interface LinkedTrackObject {
  /** Known external URLs for this track. */
  externalUrls?: ExternalUrlObject;
  /** A link to the Web API endpoint providing full details of the track. */
  href?: string;
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track. */
  id?: string;
  /** The object type: "track". */
  type?: string;
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the track. */
  uri?: string;
}

export const linkedTrackObjectSchema: Schema<LinkedTrackObject> = object({
  externalUrls: [
    'external_urls',
    optional(lazy(() => externalUrlObjectSchema)),
  ],
  href: ['href', optional(string())],
  id: ['id', optional(string())],
  type: ['type', optional(string())],
  uri: ['uri', optional(string())],
});