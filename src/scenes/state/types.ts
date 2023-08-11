// defining types
import { WritableDraft } from "immer/dist/types/types-external.js";

// response type for Api response
export interface GetJavaApiResponse {
  playlist_id: number;
  user_id: number;
  latitude_created: number;
  longitude_created: number;
  timestamp_created: string; // Assuming timestamp_created is a string
  seed_tracks: string[]; // Assuming seed_tracks is an array of strings
  target_acousticness: number;
  target_danceability: number;
  target_energy: number;
  target_instrumentalness: number;
  target_key: number;
  target_liveness: number;
  target_loudness: number;
  target_mode: number;
  target_speechiness: number;
  target_tempo: number;
  target_time_signature: number;
  target_valence: number;
  type: string; // Assuming type is a string
}

// type for Api State
export interface ApiState {
  data: WritableDraft<GetJavaApiResponse> | null;
}

export type RootState = {
  api: ApiState;
};
