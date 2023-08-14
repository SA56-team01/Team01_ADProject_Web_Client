import { useDispatch, useSelector } from "react-redux";
import { mockUserData } from "../dashboard/mockdata/mockdata";
import { selectTargetUserPlaylists, setUserData } from "../state/apiSlice";
import { useEffect } from "react";
import { Box, useMediaQuery } from "@mui/material";
import UserPlayListCard from "@/components/UserPlaylistCard";
import { UserHistoryData } from "../state/types";

// manually set "grid" representing rows for layout (non-responsive)
const gridTemplateLargeScreens = `
  "a b c"
  "d e f"
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

  const dispatch = useDispatch();

  // useEffect here to fetch user playlist data
  useEffect(() => {
    if (mockUserData.data) {
      dispatch(setUserData(mockUserData.data));
    }
  }, [dispatch]);

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
              gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
              gridTemplateRows: "repeat(3, minmax(60px, 1fr))",
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
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
