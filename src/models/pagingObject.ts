/**
 * Spotify Web APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, number, object, Schema, string } from '../schema';

export interface PagingObject {
  /** A link to the Web API endpoint returning the full result of the request */
  href: string;
  /** The maximum number of items in the response (as set in the query or by default). */
  limit: number;
  /** URL to the next page of items. ( `null` if none) */
  next: string | null;
  /** The offset of the items returned (as set in the query or by default) */
  offset: number;
  /** URL to the previous page of items. ( `null` if none) */
  previous: string | null;
  /** The total number of items available to return. */
  total: number;
}

export const pagingObjectSchema: Schema<PagingObject> = object({
  href: ['href', string()],
  limit: ['limit', number()],
  next: ['next', nullable(string())],
  offset: ['offset', number()],
  previous: ['previous', nullable(string())],
  total: ['total', number()],
});
