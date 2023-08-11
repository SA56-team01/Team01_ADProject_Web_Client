// defining types
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

export interface ExpensesByCategory {
  salaries: number;
  supplies: number;
  services: number;
}

export interface Month {
  id: string;
  month: string;
  revenue: number;
  nonOperationalExpenses: number;
  operationalExpense: number;
}

export interface Day {
  id: string;
  date: string;
}

export interface GetKpisResponse {
  id: string;
  _id: string;
  __v: number;
  totalProfit: number;
  totalRevenue: number;
  totalExpenses: number;
  expensesByCategory: ExpensesByCategory;
  monthlyData: Array<Month>;
}
