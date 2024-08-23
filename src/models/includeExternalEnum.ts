/**
 * Spotify Web APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for IncludeExternalEnum
 */
export enum IncludeExternalEnum {
  Audio = 'audio',
}

/**
 * Schema for IncludeExternalEnum
 */
export const includeExternalEnumSchema: Schema<IncludeExternalEnum> = stringEnum(
  IncludeExternalEnum
);