import { ApiState } from "@/scenes/state/types";

// Mock user data
export const mockUserData: ApiState = {
  data: [
    {
      playlist_id: 1,
      user_id: 1,
      spotify_playlist_id: "spotify_playlist_1",
      playlist_name: "Chill Vibes",
      latitude_created: 40.7128,
      longitude_created: -74.006,
      timestamp_created: "2012-04-23T18:25:43.511Z",
      seed_tracks: ["track1", "track2"],
      target_acousticness: 0.6,
      target_danceability: 0.7,
      target_energy: 0.5,
      target_liveness: 0.5,
      target_loudness: 0.5,
      target_speechiness: 0.5,
      target_tempo: 0.5,
      target_valence: 0.5,
    },
    {
      playlist_id: 2,
      user_id: 1,
      spotify_playlist_id: "spotify_playlist_2",
      playlist_name: "Workout Beats",
      latitude_created: 34.0522,
      longitude_created: -118.2437,
      timestamp_created: "2012-04-23T13:25:43.511Z",
      seed_tracks: ["track3", "track4"],
      target_acousticness: 0.3,
      target_danceability: 0.8,
      target_energy: 0.5,
      target_liveness: 0.5,
      target_loudness: 0.5,
      target_speechiness: 0.5,
      target_tempo: 0.5,
      target_valence: 0.5,
    },
    {
      playlist_id: 3,
      user_id: 2,
      spotify_playlist_id: "spotify_playlist_3",
      playlist_name: "Study Music",
      latitude_created: 51.5074,
      longitude_created: -0.1278,
      timestamp_created: "2012-04-23T12:25:43.511Z",
      seed_tracks: ["track5", "track6"],
      target_acousticness: 0.5,
      target_danceability: 0.4,
      target_energy: 0.5,
      target_liveness: 0.5,
      target_loudness: 0.5,
      target_speechiness: 0.5,
      target_tempo: 0.5,
      target_valence: 0.5,
    },
    {
      playlist_id: 4,
      user_id: 2,
      spotify_playlist_id: "spotify_playlist_4",
      playlist_name: "Road Trip Tunes",
      latitude_created: 37.7749,
      longitude_created: -122.4194,
      timestamp_created: "2012-04-23T18:25:43.511Z",
      seed_tracks: ["track7", "track8"],
      target_acousticness: 0.4,
      target_danceability: 0.6,
      target_energy: 0.5,
      target_liveness: 0.5,
      target_loudness: 0.5,
      target_speechiness: 0.5,
      target_tempo: 0.5,
      target_valence: 0.5,
    },
    {
      playlist_id: 5,
      user_id: 3,
      spotify_playlist_id: "spotify_playlist_5",
      playlist_name: "Study Music",
      latitude_created: 51.5074,
      longitude_created: -0.1278,
      timestamp_created: "2012-04-23T20:25:43.511Z",
      seed_tracks: ["track5", "track6"],
      target_acousticness: 0.5,
      target_danceability: 0.4,
      target_energy: 0.5,
      target_liveness: 0.5,
      target_loudness: 0.5,
      target_speechiness: 0.5,
      target_tempo: 0.5,
      target_valence: 0.5,
    },
    {
      playlist_id: 6,
      user_id: 3,
      spotify_playlist_id: "spotify_playlist_6",
      playlist_name: "Road Trip Tunes",
      latitude_created: 37.7749,
      longitude_created: -122.4194,
      timestamp_created: "2012-04-23T21:25:43.511Z",
      seed_tracks: ["track7", "track8"],
      target_acousticness: 0.4,
      target_danceability: 0.6,
      target_energy: 0.5,
      target_liveness: 0.5,
      target_loudness: 0.5,
      target_speechiness: 0.5,
      target_tempo: 0.5,
      target_valence: 0.5,
    },
  ],
  feedbackData: [
    {
      feedback_id: 1,
      user_id: 1,
      feedback_text: "Great app, really enjoy using it!",
      fb_timestamp: "2022-01-01T12:00:00Z",
    },
    {
      feedback_id: 2,
      user_id: 1,
      feedback_text: "Could use some more features.",
      fb_timestamp: "2022-01-02T12:00:00Z",
    },
    {
      feedback_id: 3,
      user_id: 2,
      feedback_text: "Easy to use and very helpful.",
      fb_timestamp: "2022-01-03T12:00:00Z",
    },
    {
      feedback_id: 4,
      user_id: 3,
      feedback_text: "Had some issues with the interface.",
      fb_timestamp: "2022-01-04T12:00:00Z",
    },
    {
      feedback_id: 5,
      user_id: 3,
      feedback_text: "Customer support was very helpful.",
      fb_timestamp: "2022-01-05T12:00:00Z",
    },
  ],
  loading: false,
};
