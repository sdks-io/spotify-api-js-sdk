/**
 * Spotify Web APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema, string } from '../schema';

export interface Markets {
  markets?: string[];
}

export const marketsSchema: Schema<Markets> = object({
  markets: ['markets', optional(array(string()))],
});