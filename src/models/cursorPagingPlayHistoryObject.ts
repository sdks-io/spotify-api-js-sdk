/**
 * Spotify Web APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { CursorObject, cursorObjectSchema } from './cursorObject';
import {
  PlayHistoryObject,
  playHistoryObjectSchema,
} from './playHistoryObject';

export interface CursorPagingPlayHistoryObject {
  /** A link to the Web API endpoint returning the full result of the request. */
  href?: string;
  /** The maximum number of items in the response (as set in the query or by default). */
  limit?: number;
  /** URL to the next page of items. ( `null` if none) */
  next?: string;
  /** The cursors used to find the next set of items. */
  cursors?: CursorObject;
  /** The total number of items available to return. */
  total?: number;
  items?: PlayHistoryObject[];
}

export const cursorPagingPlayHistoryObjectSchema: Schema<CursorPagingPlayHistoryObject> = object(
  {
    href: ['href', optional(string())],
    limit: ['limit', optional(number())],
    next: ['next', optional(string())],
    cursors: ['cursors', optional(lazy(() => cursorObjectSchema))],
    total: ['total', optional(number())],
    items: ['items', optional(array(lazy(() => playHistoryObjectSchema)))],
  }
);
