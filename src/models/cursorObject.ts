/**
 * Spotify Web APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface CursorObject {
  /** The cursor to use as key to find the next page of items. */
  after?: string;
  /** The cursor to use as key to find the previous page of items. */
  before?: string;
}

export const cursorObjectSchema: Schema<CursorObject> = object({
  after: ['after', optional(string())],
  before: ['before', optional(string())],
});
