import { useSelector } from "react-redux";
import { selectTargetUserPlaylists } from "../state/apiSlice";
import { Box, useMediaQuery } from "@mui/material";
import UserPlayListCard from "@/components/UserPlaylistCard";
import { UserHistoryData } from "../state/types";
import { useFetchUserHistoryDataQuery } from "../state/api";

// manually set "grid" representing rows for layout (non-responsive)
const gridTemplateLargeScreens = `
  "a b c d"
  "e f g h"
`;

// responsive layout
const gridTemplateSmallScreens = `
  "a"
  "b"
  "c"
  "d"
  "e"
  "f"
`;

const ViewUserPlaylist = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");

  // Use the generated hook from RTK Query
  useFetchUserHistoryDataQuery();

  const targetUser = useSelector(selectTargetUserPlaylists);
  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateColumns: "repeat(4, minmax(370px, 1fr))",
              gridTemplateRows: "repeat(2, minmax(200px, 1fr))",
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "minmax(auto, 1fr)",
              gridTemplateAreas: gridTemplateSmallScreens,
            }
      }
    >
      {/* forloop code inside here */}
      {targetUser &&
        targetUser.map((playlistData: UserHistoryData) => (
          <UserPlayListCard
            key={playlistData.playlist_id}
            user_id={playlistData.user_id}
            playlist_id={playlistData.playlist_id}
            latitude_created={playlistData.latitude_created}
            longitude_created={playlistData.longitude_created}
            timestamp_created={playlistData.timestamp_created}
            target_acousticness={playlistData.target_acousticness}
            target_danceability={playlistData.target_danceability}
            target_energy={playlistData.target_energy}
            target_liveness={playlistData.target_liveness}
            target_loudness={playlistData.target_loudness}
            target_speechiness={playlistData.target_speechiness}
            target_tempo={playlistData.target_tempo}
            target_valence={playlistData.target_valence}
          />
        ))}
    </Box>
  );
};

export default ViewUserPlaylist;
