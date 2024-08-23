/**
 * Spotify Web APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { Categories, categoriesSchema } from './categories';

export interface PagedCategories {
  categories: Categories;
}

export const pagedCategoriesSchema: Schema<PagedCategories> = object({
  categories: ['categories', lazy(() => categoriesSchema)],
});