import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { selectUserFeedback } from "../state/apiSlice";
import UserPlaylistDotMap from "./DotMap";

const Row2 = () => {
  const { palette } = useTheme();
  const boxEStats = useSelector(selectUserFeedback).map((feedback) => ({
    ...feedback,
    id: feedback.feedback_id,
  }));

  const feedbackColumns = [
    {
      field: "feedback_id",
      headerName: "Feedback Id",
      flex: 0.1,
    },
    {
      field: "feedback_text",
      headerName: "Feedback",
      flex: 0.4,
    },
    {
      field: "fb_timestamp",
      headerName: "Timestamp",
      flex: 0.1,
    },
  ];

  return (
    <>
      <DashboardBox gridArea="d">
        <BoxHeader
          title="Feedback Overview"
          subtitle="Table overview of user feedback"
          sideText={`${boxEStats?.length}` + " user feedback"}
        />
        <Box
          mt="0.5 rem"
          p="0 0.5rem"
          height="85%"
          sx={{
            "& .MuiDataGrid-root": {
              color: palette.grey[300],
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden",
            },
          }}
        >
          <DataGrid
            columnHeaderHeight={25}
            getRowHeight={() => "auto"}
            hideFooter={true}
            rows={boxEStats || []}
            columns={feedbackColumns}
          />
        </Box>
      </DashboardBox>
      <DashboardBox gridArea="e">
        <BoxHeader
          title="Map of Playlists Generated"
          subtitle="Playlists Generated in Singapore by Location"
          sideText="+4%"
        />
        <Box>
          <UserPlaylistDotMap />
        </Box>
      </DashboardBox>
    </>
  );
};

export default Row2;
