/**
 * Spotify Web APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import {
  AudioFeaturesObject,
  audioFeaturesObjectSchema,
} from './audioFeaturesObject';

export interface ManyAudioFeatures {
  audioFeatures: AudioFeaturesObject[];
}

export const manyAudioFeaturesSchema: Schema<ManyAudioFeatures> = object({
  audioFeatures: [
    'audio_features',
    array(lazy(() => audioFeaturesObjectSchema)),
  ],
});
