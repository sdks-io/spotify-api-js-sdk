/**
 * Spotify Web APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { ChapterObject, chapterObjectSchema } from '../models/chapterObject';
import { ManyChapters, manyChaptersSchema } from '../models/manyChapters';
import { optional, string } from '../schema';
import { BaseController } from './baseController';
import { ForbiddenError } from '../errors/forbiddenError';
import { TooManyRequestsError } from '../errors/tooManyRequestsError';
import { UnauthorizedError } from '../errors/unauthorizedError';

export class ChaptersController extends BaseController {
  /**
   * Get Spotify catalog information for a single audiobook chapter. Chapters are only available within
   * the US, UK, Canada, Ireland, New Zealand and Australia markets.
   *
   *
   * @param id
   * @param market
   * @return Response from the API call
   */
  async getAChapter(
    id: string,
    market?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ChapterObject>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      id: [id, string()],
      market: [market, optional(string())],
    });
    req.query('market', mapped.market);
    req.appendTemplatePath`/chapters/${mapped.id}`;
    req.throwOn(
      401,
      UnauthorizedError,
      'Bad or expired token. This can happen if the user revoked a token or\nthe access token has expired. You should re-authenticate the user.\n'
    );
    req.throwOn(
      403,
      ForbiddenError,
      "Bad OAuth request (wrong consumer key, bad nonce, expired\ntimestamp...). Unfortunately, re-authenticating the user won't help here.\n"
    );
    req.throwOn(
      429,
      TooManyRequestsError,
      'The app has exceeded its rate limits.\n'
    );
    req.authenticate([{ oauth20: true }]);
    return req.callAsJson(chapterObjectSchema, requestOptions);
  }

  /**
   * Get Spotify catalog information for several audiobook chapters identified by their Spotify IDs.
   * Chapters are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.
   *
   *
   * @param ids
   * @param market
   * @return Response from the API call
   */
  async getSeveralChapters(
    ids: string,
    market?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ManyChapters>> {
    const req = this.createRequest('GET', '/chapters');
    const mapped = req.prepareArgs({
      ids: [ids, string()],
      market: [market, optional(string())],
    });
    req.query('ids', mapped.ids);
    req.query('market', mapped.market);
    req.throwOn(
      401,
      UnauthorizedError,
      'Bad or expired token. This can happen if the user revoked a token or\nthe access token has expired. You should re-authenticate the user.\n'
    );
    req.throwOn(
      403,
      ForbiddenError,
      "Bad OAuth request (wrong consumer key, bad nonce, expired\ntimestamp...). Unfortunately, re-authenticating the user won't help here.\n"
    );
    req.throwOn(
      429,
      TooManyRequestsError,
      'The app has exceeded its rate limits.\n'
    );
    req.authenticate([{ oauth20: true }]);
    return req.callAsJson(manyChaptersSchema, requestOptions);
  }
}