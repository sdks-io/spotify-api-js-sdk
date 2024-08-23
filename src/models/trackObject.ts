/**
 * Spotify Web APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { ArtistObject, artistObjectSchema } from './artistObject';
import { ExternalIdObject, externalIdObjectSchema } from './externalIdObject';
import {
  ExternalUrlObject,
  externalUrlObjectSchema,
} from './externalUrlObject';
import {
  LinkedTrackObject,
  linkedTrackObjectSchema,
} from './linkedTrackObject';
import {
  SimplifiedAlbumObject,
  simplifiedAlbumObjectSchema,
} from './simplifiedAlbumObject';
import {
  TrackRestrictionObject,
  trackRestrictionObjectSchema,
} from './trackRestrictionObject';
import { Type3Enum, type3EnumSchema } from './type3Enum';

export interface TrackObject {
  /** The album on which the track appears. The album object includes a link in `href` to full information about the album. */
  album?: SimplifiedAlbumObject;
  /** The artists who performed the track. Each artist object includes a link in `href` to more detailed information about the artist. */
  artists?: ArtistObject[];
  /** A list of the countries in which the track can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code. */
  availableMarkets?: string[];
  /** The disc number (usually `1` unless the album consists of more than one disc). */
  discNumber?: number;
  /** The track length in milliseconds. */
  durationMs?: number;
  /** Whether or not the track has explicit lyrics ( `true` = yes it does; `false` = no it does not OR unknown). */
  explicit?: boolean;
  /** Known external IDs for the track. */
  externalIds?: ExternalIdObject;
  /** Known external URLs for this track. */
  externalUrls?: ExternalUrlObject;
  /** A link to the Web API endpoint providing full details of the track. */
  href?: string;
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track. */
  id?: string;
  /** Part of the response when [Track Relinking](/documentation/web-api/concepts/track-relinking) is applied. If `true`, the track is playable in the given market. Otherwise `false`. */
  isPlayable?: boolean;
  /** Part of the response when [Track Relinking](/documentation/web-api/concepts/track-relinking) is applied, and the requested track has been replaced with different track. The track in the `linked_from` object contains information about the originally requested track. */
  linkedFrom?: LinkedTrackObject;
  /** Included in the response when a content restriction is applied. */
  restrictions?: TrackRestrictionObject;
  /** The name of the track. */
  name?: string;
  /** The popularity of the track. The value will be between 0 and 100, with 100 being the most popular.<br/>The popularity of a track is a value between 0 and 100, with 100 being the most popular. The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are.<br/>Generally speaking, songs that are being played a lot now will have a higher popularity than songs that were played a lot in the past. Duplicate tracks (e.g. the same track from a single and an album) are rated independently. Artist and album popularity is derived mathematically from track popularity. _**Note**: the popularity value may lag actual popularity by a few days: the value is not updated in real time._ */
  popularity?: number;
  /** A link to a 30 second preview (MP3 format) of the track. Can be `null` */
  previewUrl?: string | null;
  /** The number of the track. If an album has several discs, the track number is the number on the specified disc. */
  trackNumber?: number;
  /** The object type: "track". */
  type?: Type3Enum;
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the track. */
  uri?: string;
  /** Whether or not the track is from a local file. */
  isLocal?: boolean;
}

export const trackObjectSchema: Schema<TrackObject> = object({
  album: ['album', optional(lazy(() => simplifiedAlbumObjectSchema))],
  artists: ['artists', optional(array(lazy(() => artistObjectSchema)))],
  availableMarkets: ['available_markets', optional(array(string()))],
  discNumber: ['disc_number', optional(number())],
  durationMs: ['duration_ms', optional(number())],
  explicit: ['explicit', optional(boolean())],
  externalIds: ['external_ids', optional(lazy(() => externalIdObjectSchema))],
  externalUrls: [
    'external_urls',
    optional(lazy(() => externalUrlObjectSchema)),
  ],
  href: ['href', optional(string())],
  id: ['id', optional(string())],
  isPlayable: ['is_playable', optional(boolean())],
  linkedFrom: ['linked_from', optional(lazy(() => linkedTrackObjectSchema))],
  restrictions: [
    'restrictions',
    optional(lazy(() => trackRestrictionObjectSchema)),
  ],
  name: ['name', optional(string())],
  popularity: ['popularity', optional(number())],
  previewUrl: ['preview_url', optional(nullable(string()))],
  trackNumber: ['track_number', optional(number())],
  type: ['type', optional(type3EnumSchema)],
  uri: ['uri', optional(string())],
  isLocal: ['is_local', optional(boolean())],
});
