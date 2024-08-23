/**
 * Spotify Web APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { ErrorObject } from '../models/errorObject';

/**
 * Creates an instance of Forbidden
 */
interface Forbidden {
  error: ErrorObject;
}

export class ForbiddenError extends ApiError<Forbidden> {}
