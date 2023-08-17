import { Box, useMediaQuery } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import { useEffect } from "react";
import {
  useFetchFeedbackDataQuery,
  useFetchUserHistoryDataQuery,
} from "../state/api";

// type Props = {};

// manually set "grid" representing rows for layout (non-responsive)
const gridTemplateLargeScreens = `
  "a b c"
  "a b c"
  "a b c"
  "a e e"
  "d e e"
  "d e e"
  "d e e"
  "d e e"
  "d e e"
  "d e e"
`;

// responsive layout
const gridTemplateSmallScreens = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "d"
  "d"
  "e"
  "e"
`;

const Dashboard = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");

  // Use the generated API hooks for fetching user data and feedback data
  const {
    isSuccess: feedbackSuccess,
    isLoading: feedbackLoading,
    isError: feedbackError,
    error: feedbackErr,
  } = useFetchFeedbackDataQuery();

  const {
    isSuccess: userSuccess,
    isLoading: userLoading,
    isError: userError,
    error: userErr,
  } = useFetchUserHistoryDataQuery();

  // You can simply handle logging or other side effects here, but no need to dispatch the data
  useEffect(() => {
    if (userSuccess) {
      console.log("User data fetch was successful");
    } else if (userLoading) {
      console.log("User data fetch is loading");
    } else if (userError) {
      console.error("User data fetch failed with error: ", userErr);
    }
  }, [userSuccess, userLoading, userError, userErr]);

  useEffect(() => {
    if (feedbackSuccess) {
      console.log("Feedback data fetch was successful");
    } else if (feedbackLoading) {
      console.log("Feedback data fetch is loading");
    } else if (feedbackError) {
      console.error("Feedback data fetch failed with error: ", feedbackErr);
    }
  }, [feedbackSuccess, feedbackLoading, feedbackError, feedbackErr]);

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
              gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateSmallScreens,
            }
      }
    >
      {/* refactored into Row1/Row2 in /dashboard */}
      <Row1 />
      <Row2 />
    </Box>
  );
};

export default Dashboard;
