/**
 * Spotify Web APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import { ShowBase, showBaseSchema } from './showBase';

export interface ManySimplifiedShows {
  shows: ShowBase[];
}

export const manySimplifiedShowsSchema: Schema<ManySimplifiedShows> = object({
  shows: ['shows', array(lazy(() => showBaseSchema))],
});
