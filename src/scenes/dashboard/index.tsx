import { Box, useMediaQuery } from "@mui/material";
// import { useFetchMyDataQuery } from "../state/api";
import Row1 from "./Row1";
import Row2 from "./Row2";
import { useEffect } from "react";
import { mockUserData } from "./mockdata/mockdata";
import { setFeedbackData, setUserData } from "../state/apiSlice";
import { useDispatch } from "react-redux";

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
  // const { palette } = useTheme();
  // const { isLoading, isError } = useFetchMyDataQuery();

  const dispatch = useDispatch();

  useEffect(() => {
    if (mockUserData.data) {
      dispatch(setUserData(mockUserData.data));
    }
  }, [dispatch]);

  // useEffect here to fetch user playlist data
  useEffect(() => {
    if (mockUserData.feedbackData) {
      dispatch(setFeedbackData(mockUserData.feedbackData));
    }
  }, [dispatch]);

  // // boilerplate to debug
  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  // if (isError) {
  //   return <p>Error: Some Error</p>;
  // }

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
