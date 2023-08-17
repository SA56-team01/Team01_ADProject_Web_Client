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
            key={playlistData.id}
            // TO-DO: CHANGE THIS LATER
            user_id={playlistData.id}
            playlist_id={playlistData.id}
            latitude_created={playlistData.latitude}
            longitude_created={playlistData.longitude}
            timestamp_created={playlistData.timestamp}
            target_acousticness={playlistData.targetAcousticness}
            target_danceability={playlistData.targetDanceability}
            target_energy={playlistData.targetEnergy}
            target_liveness={playlistData.targetLiveness}
            target_loudness={playlistData.targetLoudness}
            target_speechiness={playlistData.targetSpeechiness}
            target_tempo={playlistData.targetTempo}
            target_valence={playlistData.targetValence}
          />
        ))}
    </Box>
  );
};

export default ViewUserPlaylist;
