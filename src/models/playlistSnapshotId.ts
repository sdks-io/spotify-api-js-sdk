/**
 * Spotify Web APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface PlaylistSnapshotId {
  snapshotId?: string;
}

export const playlistSnapshotIdSchema: Schema<PlaylistSnapshotId> = object({
  snapshotId: ['snapshot_id', optional(string())],
});