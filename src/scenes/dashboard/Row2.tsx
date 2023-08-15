import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { selectUserFeedback } from "../state/apiSlice";

const Row2 = () => {
  const { palette } = useTheme();
  const boxEStats = useSelector(selectUserFeedback).map((feedback) => ({
    ...feedback,
    id: feedback.feedback_id,
  }));

  const feedbackColumns = [
    {
      field: "user_id",
      headerName: "User Id",
      flex: 0.15,
    },
    {
      field: "feedback_text",
      headerName: "Feedback",
      flex: 0.5,
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
          height="75%"
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
            rowHeight={35}
            hideFooter={true}
            rows={boxEStats || []}
            // rows={[]}
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
      </DashboardBox>
    </>
  );
};

export default Row2;
