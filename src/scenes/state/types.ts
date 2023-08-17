// defining types

// response type for Api response
export interface UserHistoryData {
  playlist_id: number;
  user_id: number;
  spotify_playlist_id: string;
  playlist_name: string;
  latitude_created: number;
  longitude_created: number;
  timestamp_created: string; // Assuming timestamp_created is a string
  seed_tracks: string[]; // Assuming seed_tracks is an array of strings
  target_danceability: number;
  target_energy: number;
  target_loudness: number;
  target_speechiness: number;
  target_acousticness: number;
  target_liveness: number;
  target_valence: number;
  target_tempo: number;
}

export interface UserPlaylistData {
  playlist_id: number;
  user_id: number;
  latitude_created: number;
  longitude_created: number;
  timestamp_created: string; // Assuming timestamp_created is a string
  target_acousticness: number;
  target_danceability: number;
  target_energy: number;
  target_liveness: number;
  target_loudness: number;
  target_speechiness: number;
  target_valence: number;
  target_tempo: number;
}

export interface UserHistoryPlaylistData extends Array<UserHistoryData> {}

// Feedback data type
export interface FeedbackData {
  id: number;
  user_id: number; // Foreign Key
  feedback_text: string;
  fb_timestamp: string; // Assuming fb_timestamp is a string
}

// Map of user id to their feedbacks
export interface UserFeedbackData extends Array<FeedbackData> {}

export interface ApiState {
  data?: UserHistoryPlaylistData;
  feedbackData?: UserFeedbackData;
  loading: boolean;
}

export type RootState = {
  api: ApiState;
};
