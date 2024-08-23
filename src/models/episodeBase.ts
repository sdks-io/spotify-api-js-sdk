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
import {
  EpisodeRestrictionObject,
  episodeRestrictionObjectSchema,
} from './episodeRestrictionObject';
import {
  ExternalUrlObject,
  externalUrlObjectSchema,
} from './externalUrlObject';
import { ImageObject, imageObjectSchema } from './imageObject';
import {
  ReleaseDatePrecisionEnum,
  releaseDatePrecisionEnumSchema,
} from './releaseDatePrecisionEnum';
import {
  ResumePointObject,
  resumePointObjectSchema,
} from './resumePointObject';
import { Type8Enum, type8EnumSchema } from './type8Enum';

export interface EpisodeBase {
  /** A URL to a 30 second preview (MP3 format) of the episode. `null` if not available. */
  audioPreviewUrl: string | null;
  /** A description of the episode. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed. */
  description: string;
  /** A description of the episode. This field may contain HTML tags. */
  htmlDescription: string;
  /** The episode length in milliseconds. */
  durationMs: number;
  /** Whether or not the episode has explicit content (true = yes it does; false = no it does not OR unknown). */
  explicit: boolean;
  /** External URLs for this episode. */
  externalUrls: ExternalUrlObject;
  /** A link to the Web API endpoint providing full details of the episode. */
  href: string;
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the episode. */
  id: string;
  /** The cover art for the episode in various sizes, widest first. */
  images: ImageObject[];
  /** True if the episode is hosted outside of Spotify's CDN. */
  isExternallyHosted: boolean;
  /** True if the episode is playable in the given market. Otherwise false. */
  isPlayable: boolean;
  /** The language used in the episode, identified by a [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code. This field is deprecated and might be removed in the future. Please use the `languages` field instead. */
  language?: string;
  /** A list of the languages used in the episode, identified by their [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639) code. */
  languages: string[];
  /** The name of the episode. */
  name: string;
  /** The date the episode was first released, for example `"1981-12-15"`. Depending on the precision, it might be shown as `"1981"` or `"1981-12"`. */
  releaseDate: string;
  /** The precision with which `release_date` value is known. */
  releaseDatePrecision: ReleaseDatePrecisionEnum;
  /** The user's most recent position in the episode. Set if the supplied access token is a user token and has the scope 'user-read-playback-position'. */
  resumePoint?: ResumePointObject;
  /** The object type. */
  type: Type8Enum;
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the episode. */
  uri: string;
  /** Included in the response when a content restriction is applied. */
  restrictions?: EpisodeRestrictionObject;
}

export const episodeBaseSchema: Schema<EpisodeBase> = object({
  audioPreviewUrl: ['audio_preview_url', nullable(string())],
  description: ['description', string()],
  htmlDescription: ['html_description', string()],
  durationMs: ['duration_ms', number()],
  explicit: ['explicit', boolean()],
  externalUrls: ['external_urls', lazy(() => externalUrlObjectSchema)],
  href: ['href', string()],
  id: ['id', string()],
  images: ['images', array(lazy(() => imageObjectSchema))],
  isExternallyHosted: ['is_externally_hosted', boolean()],
  isPlayable: ['is_playable', boolean()],
  language: ['language', optional(string())],
  languages: ['languages', array(string())],
  name: ['name', string()],
  releaseDate: ['release_date', string()],
  releaseDatePrecision: [
    'release_date_precision',
    releaseDatePrecisionEnumSchema,
  ],
  resumePoint: ['resume_point', optional(lazy(() => resumePointObjectSchema))],
  type: ['type', type8EnumSchema],
  uri: ['uri', string()],
  restrictions: [
    'restrictions',
    optional(lazy(() => episodeRestrictionObjectSchema)),
  ],
});
