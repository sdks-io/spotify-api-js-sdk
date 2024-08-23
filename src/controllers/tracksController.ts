/**
 * Spotify Web APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  AudioAnalysisObject,
  audioAnalysisObjectSchema,
} from '../models/audioAnalysisObject';
import {
  AudioFeaturesObject,
  audioFeaturesObjectSchema,
} from '../models/audioFeaturesObject';
import {
  ManyAudioFeatures,
  manyAudioFeaturesSchema,
} from '../models/manyAudioFeatures';
import { ManyTracks, manyTracksSchema } from '../models/manyTracks';
import {
  MeTracksRequest,
  meTracksRequestSchema,
} from '../models/meTracksRequest';
import {
  MeTracksRequest1,
  meTracksRequest1Schema,
} from '../models/meTracksRequest1';
import {
  PagingSavedTrackObject,
  pagingSavedTrackObjectSchema,
} from '../models/pagingSavedTrackObject';
import {
  RecommendationsObject,
  recommendationsObjectSchema,
} from '../models/recommendationsObject';
import { TrackObject, trackObjectSchema } from '../models/trackObject';
import { array, boolean, number, optional, string } from '../schema';
import { BaseController } from './baseController';
import { ForbiddenError } from '../errors/forbiddenError';
import { TooManyRequestsError } from '../errors/tooManyRequestsError';
import { UnauthorizedError } from '../errors/unauthorizedError';

export class TracksController extends BaseController {
  /**
   * Get Spotify catalog information for a single track identified by its
   * unique Spotify ID.
   *
   *
   * @param id
   * @param market
   * @return Response from the API call
   */
  async getTrack(
    id: string,
    market?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<TrackObject>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      id: [id, string()],
      market: [market, optional(string())],
    });
    req.query('market', mapped.market);
    req.appendTemplatePath`/tracks/${mapped.id}`;
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
    return req.callAsJson(trackObjectSchema, requestOptions);
  }

  /**
   * Get Spotify catalog information for multiple tracks based on their Spotify IDs.
   *
   *
   * @param ids
   * @param market
   * @return Response from the API call
   */
  async getSeveralTracks(
    ids: string,
    market?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ManyTracks>> {
    const req = this.createRequest('GET', '/tracks');
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
    return req.callAsJson(manyTracksSchema, requestOptions);
  }

  /**
   * Get a list of the songs saved in the current Spotify user's 'Your Music' library.
   *
   *
   * @param market
   * @param limit  Example: 20
   * @param offset Example: 0
   * @return Response from the API call
   */
  async getUsersSavedTracks(
    market?: string,
    limit?: number,
    offset?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PagingSavedTrackObject>> {
    const req = this.createRequest('GET', '/me/tracks');
    const mapped = req.prepareArgs({
      market: [market, optional(string())],
      limit: [limit, optional(number())],
      offset: [offset, optional(number())],
    });
    req.query('market', mapped.market);
    req.query('limit', mapped.limit);
    req.query('offset', mapped.offset);
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
    return req.callAsJson(pagingSavedTrackObjectSchema, requestOptions);
  }

  /**
   * Save one or more tracks to the current user's 'Your Music' library.
   *
   *
   * @param ids
   * @param body
   * @return Response from the API call
   */
  async saveTracksUser(
    ids: string,
    body?: MeTracksRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('PUT', '/me/tracks');
    const mapped = req.prepareArgs({
      ids: [ids, string()],
      body: [body, optional(meTracksRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.query('ids', mapped.ids);
    req.json(mapped.body);
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
    return req.call(requestOptions);
  }

  /**
   * Remove one or more tracks from the current user's 'Your Music' library.
   *
   *
   * @param ids
   * @param body
   * @return Response from the API call
   */
  async removeTracksUser(
    ids: string,
    body?: MeTracksRequest1,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE', '/me/tracks');
    const mapped = req.prepareArgs({
      ids: [ids, string()],
      body: [body, optional(meTracksRequest1Schema)],
    });
    req.header('Content-Type', 'application/json');
    req.query('ids', mapped.ids);
    req.json(mapped.body);
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
    return req.call(requestOptions);
  }

  /**
   * Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.
   *
   *
   * @param ids
   * @return Response from the API call
   */
  async checkUsersSavedTracks(
    ids: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<boolean[]>> {
    const req = this.createRequest('GET', '/me/tracks/contains');
    const mapped = req.prepareArgs({ ids: [ids, string()] });
    req.query('ids', mapped.ids);
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
    return req.callAsJson(array(boolean()), requestOptions);
  }

  /**
   * Get audio features for multiple tracks based on their Spotify IDs.
   *
   *
   * @param ids
   * @return Response from the API call
   */
  async getSeveralAudioFeatures(
    ids: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ManyAudioFeatures>> {
    const req = this.createRequest('GET', '/audio-features');
    const mapped = req.prepareArgs({ ids: [ids, string()] });
    req.query('ids', mapped.ids);
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
    return req.callAsJson(manyAudioFeaturesSchema, requestOptions);
  }

  /**
   * Get audio feature information for a single track identified by its unique
   * Spotify ID.
   *
   *
   * @param id
   * @return Response from the API call
   */
  async getAudioFeatures(
    id: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AudioFeaturesObject>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ id: [id, string()] });
    req.appendTemplatePath`/audio-features/${mapped.id}`;
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
    return req.callAsJson(audioFeaturesObjectSchema, requestOptions);
  }

  /**
   * Get a low-level audio analysis for a track in the Spotify catalog. The audio analysis describes the
   * track’s structure and musical content, including rhythm, pitch, and timbre.
   *
   *
   * @param id
   * @return Response from the API call
   */
  async getAudioAnalysis(
    id: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AudioAnalysisObject>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ id: [id, string()] });
    req.appendTemplatePath`/audio-analysis/${mapped.id}`;
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
    return req.callAsJson(audioAnalysisObjectSchema, requestOptions);
  }

  /**
   * Recommendations are generated based on the available information for a given seed entity and matched
   * against similar artists and tracks. If there is sufficient information about the provided seeds, a
   * list of tracks will be returned together with pool size details.
   *
   * For artists and tracks that are very new or obscure there might not be enough data to generate a
   * list of tracks.
   *
   *
   * @param limit                   Example: 20
   * @param market
   * @param seedArtists
   * @param seedGenres
   * @param seedTracks
   * @param minAcousticness
   * @param maxAcousticness
   * @param targetAcousticness
   * @param minDanceability
   * @param maxDanceability
   * @param targetDanceability
   * @param minDurationMs
   * @param maxDurationMs
   * @param targetDurationMs
   * @param minEnergy
   * @param maxEnergy
   * @param targetEnergy
   * @param minInstrumentalness
   * @param maxInstrumentalness
   * @param targetInstrumentalness
   * @param minKey
   * @param maxKey
   * @param targetKey
   * @param minLiveness
   * @param maxLiveness
   * @param targetLiveness
   * @param minLoudness
   * @param maxLoudness
   * @param targetLoudness
   * @param minMode
   * @param maxMode
   * @param targetMode
   * @param minPopularity
   * @param maxPopularity
   * @param targetPopularity
   * @param minSpeechiness
   * @param maxSpeechiness
   * @param targetSpeechiness
   * @param minTempo
   * @param maxTempo
   * @param targetTempo
   * @param minTimeSignature
   * @param maxTimeSignature
   * @param targetTimeSignature
   * @param minValence
   * @param maxValence
   * @param targetValence
   * @return Response from the API call
   */
  async getRecommendations(
    limit?: number,
    market?: string,
    seedArtists?: string,
    seedGenres?: string,
    seedTracks?: string,
    minAcousticness?: number,
    maxAcousticness?: number,
    targetAcousticness?: number,
    minDanceability?: number,
    maxDanceability?: number,
    targetDanceability?: number,
    minDurationMs?: number,
    maxDurationMs?: number,
    targetDurationMs?: number,
    minEnergy?: number,
    maxEnergy?: number,
    targetEnergy?: number,
    minInstrumentalness?: number,
    maxInstrumentalness?: number,
    targetInstrumentalness?: number,
    minKey?: number,
    maxKey?: number,
    targetKey?: number,
    minLiveness?: number,
    maxLiveness?: number,
    targetLiveness?: number,
    minLoudness?: number,
    maxLoudness?: number,
    targetLoudness?: number,
    minMode?: number,
    maxMode?: number,
    targetMode?: number,
    minPopularity?: number,
    maxPopularity?: number,
    targetPopularity?: number,
    minSpeechiness?: number,
    maxSpeechiness?: number,
    targetSpeechiness?: number,
    minTempo?: number,
    maxTempo?: number,
    targetTempo?: number,
    minTimeSignature?: number,
    maxTimeSignature?: number,
    targetTimeSignature?: number,
    minValence?: number,
    maxValence?: number,
    targetValence?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RecommendationsObject>> {
    const req = this.createRequest('GET', '/recommendations');
    const mapped = req.prepareArgs({
      limit: [limit, optional(number())],
      market: [market, optional(string())],
      seedArtists: [seedArtists, optional(string())],
      seedGenres: [seedGenres, optional(string())],
      seedTracks: [seedTracks, optional(string())],
      minAcousticness: [minAcousticness, optional(number())],
      maxAcousticness: [maxAcousticness, optional(number())],
      targetAcousticness: [targetAcousticness, optional(number())],
      minDanceability: [minDanceability, optional(number())],
      maxDanceability: [maxDanceability, optional(number())],
      targetDanceability: [targetDanceability, optional(number())],
      minDurationMs: [minDurationMs, optional(number())],
      maxDurationMs: [maxDurationMs, optional(number())],
      targetDurationMs: [targetDurationMs, optional(number())],
      minEnergy: [minEnergy, optional(number())],
      maxEnergy: [maxEnergy, optional(number())],
      targetEnergy: [targetEnergy, optional(number())],
      minInstrumentalness: [minInstrumentalness, optional(number())],
      maxInstrumentalness: [maxInstrumentalness, optional(number())],
      targetInstrumentalness: [targetInstrumentalness, optional(number())],
      minKey: [minKey, optional(number())],
      maxKey: [maxKey, optional(number())],
      targetKey: [targetKey, optional(number())],
      minLiveness: [minLiveness, optional(number())],
      maxLiveness: [maxLiveness, optional(number())],
      targetLiveness: [targetLiveness, optional(number())],
      minLoudness: [minLoudness, optional(number())],
      maxLoudness: [maxLoudness, optional(number())],
      targetLoudness: [targetLoudness, optional(number())],
      minMode: [minMode, optional(number())],
      maxMode: [maxMode, optional(number())],
      targetMode: [targetMode, optional(number())],
      minPopularity: [minPopularity, optional(number())],
      maxPopularity: [maxPopularity, optional(number())],
      targetPopularity: [targetPopularity, optional(number())],
      minSpeechiness: [minSpeechiness, optional(number())],
      maxSpeechiness: [maxSpeechiness, optional(number())],
      targetSpeechiness: [targetSpeechiness, optional(number())],
      minTempo: [minTempo, optional(number())],
      maxTempo: [maxTempo, optional(number())],
      targetTempo: [targetTempo, optional(number())],
      minTimeSignature: [minTimeSignature, optional(number())],
      maxTimeSignature: [maxTimeSignature, optional(number())],
      targetTimeSignature: [targetTimeSignature, optional(number())],
      minValence: [minValence, optional(number())],
      maxValence: [maxValence, optional(number())],
      targetValence: [targetValence, optional(number())],
    });
    req.query('limit', mapped.limit);
    req.query('market', mapped.market);
    req.query('seed_artists', mapped.seedArtists);
    req.query('seed_genres', mapped.seedGenres);
    req.query('seed_tracks', mapped.seedTracks);
    req.query('min_acousticness', mapped.minAcousticness);
    req.query('max_acousticness', mapped.maxAcousticness);
    req.query('target_acousticness', mapped.targetAcousticness);
    req.query('min_danceability', mapped.minDanceability);
    req.query('max_danceability', mapped.maxDanceability);
    req.query('target_danceability', mapped.targetDanceability);
    req.query('min_duration_ms', mapped.minDurationMs);
    req.query('max_duration_ms', mapped.maxDurationMs);
    req.query('target_duration_ms', mapped.targetDurationMs);
    req.query('min_energy', mapped.minEnergy);
    req.query('max_energy', mapped.maxEnergy);
    req.query('target_energy', mapped.targetEnergy);
    req.query('min_instrumentalness', mapped.minInstrumentalness);
    req.query('max_instrumentalness', mapped.maxInstrumentalness);
    req.query('target_instrumentalness', mapped.targetInstrumentalness);
    req.query('min_key', mapped.minKey);
    req.query('max_key', mapped.maxKey);
    req.query('target_key', mapped.targetKey);
    req.query('min_liveness', mapped.minLiveness);
    req.query('max_liveness', mapped.maxLiveness);
    req.query('target_liveness', mapped.targetLiveness);
    req.query('min_loudness', mapped.minLoudness);
    req.query('max_loudness', mapped.maxLoudness);
    req.query('target_loudness', mapped.targetLoudness);
    req.query('min_mode', mapped.minMode);
    req.query('max_mode', mapped.maxMode);
    req.query('target_mode', mapped.targetMode);
    req.query('min_popularity', mapped.minPopularity);
    req.query('max_popularity', mapped.maxPopularity);
    req.query('target_popularity', mapped.targetPopularity);
    req.query('min_speechiness', mapped.minSpeechiness);
    req.query('max_speechiness', mapped.maxSpeechiness);
    req.query('target_speechiness', mapped.targetSpeechiness);
    req.query('min_tempo', mapped.minTempo);
    req.query('max_tempo', mapped.maxTempo);
    req.query('target_tempo', mapped.targetTempo);
    req.query('min_time_signature', mapped.minTimeSignature);
    req.query('max_time_signature', mapped.maxTimeSignature);
    req.query('target_time_signature', mapped.targetTimeSignature);
    req.query('min_valence', mapped.minValence);
    req.query('max_valence', mapped.maxValence);
    req.query('target_valence', mapped.targetValence);
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
    return req.callAsJson(recommendationsObjectSchema, requestOptions);
  }
}
