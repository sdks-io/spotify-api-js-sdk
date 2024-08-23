/**
 * Spotify Web APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface ExternalIdObject {
  /** [International Standard Recording Code](http://en.wikipedia.org/wiki/International_Standard_Recording_Code) */
  isrc?: string;
  /** [International Article Number](http://en.wikipedia.org/wiki/International_Article_Number_%28EAN%29) */
  ean?: string;
  /** [Universal Product Code](http://en.wikipedia.org/wiki/Universal_Product_Code) */
  upc?: string;
}

export const externalIdObjectSchema: Schema<ExternalIdObject> = object({
  isrc: ['isrc', optional(string())],
  ean: ['ean', optional(string())],
  upc: ['upc', optional(string())],
});