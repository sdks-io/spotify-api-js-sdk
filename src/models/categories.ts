/**
 * Spotify Web APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  nullable,
  number,
  object,
  Schema,
  string,
} from '../schema';
import { CategoryObject, categoryObjectSchema } from './categoryObject';

export interface Categories {
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
  items: CategoryObject[];
}

export const categoriesSchema: Schema<Categories> = object({
  href: ['href', string()],
  limit: ['limit', number()],
  next: ['next', nullable(string())],
  offset: ['offset', number()],
  previous: ['previous', nullable(string())],
  total: ['total', number()],
  items: ['items', array(lazy(() => categoryObjectSchema))],
});