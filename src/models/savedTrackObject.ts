/**
 * Spotify Web APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { TrackObject, trackObjectSchema } from './trackObject';

export interface SavedTrackObject {
  /**
   * The date and time the track was saved.
   * Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.
   * If the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object.
   */
  addedAt?: string;
  /** Information about the track. */
  track?: TrackObject;
}

export const savedTrackObjectSchema: Schema<SavedTrackObject> = object({
  addedAt: ['added_at', optional(string())],
  track: ['track', optional(lazy(() => trackObjectSchema))],
});
