import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { selectUserFeedback } from "../state/apiSlice";
import SingaporePlaylistDotMap from "../dotMap/DotMap";

const Row2 = () => {
  const { palette } = useTheme();
  const boxDStats = useSelector(selectUserFeedback).map((feedback) => ({
    ...feedback,
    id: feedback.id,
  }));

  const feedbackColumns = [
    {
      field: "id",
      headerName: "Feedback Id",
      flex: 0.1,
    },
    {
      field: "feedbackText",
      headerName: "Feedback",
      flex: 0.4,
    },
    {
      field: "fbTimestamp",
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
          sideText={`${boxDStats?.length}` + " user feedback"}
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
            rows={boxDStats || []}
            columns={feedbackColumns}
          />
        </Box>
      </DashboardBox>
      <DashboardBox gridArea="e">
        <SingaporePlaylistDotMap />
      </DashboardBox>
    </>
  );
};

export default Row2;
