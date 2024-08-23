/**
 * Spotify Web APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import {
  PagingPlaylistObject,
  pagingPlaylistObjectSchema,
} from './pagingPlaylistObject';

export interface PagingFeaturedPlaylistObject {
  /** The localized message of a playlist. */
  message?: string;
  playlists?: PagingPlaylistObject;
}

export const pagingFeaturedPlaylistObjectSchema: Schema<PagingFeaturedPlaylistObject> = object(
  {
    message: ['message', optional(string())],
    playlists: ['playlists', optional(lazy(() => pagingPlaylistObjectSchema))],
  }
);