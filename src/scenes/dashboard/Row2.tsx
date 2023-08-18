import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { Box, Stack, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { selectUserFeedback } from "../state/apiSlice";
import { GridValueGetterParams } from "@mui/x-data-grid";

const Row2 = () => {
  const { palette } = useTheme();
  const boxDStats = useSelector(selectUserFeedback).map((feedback) => ({
    ...feedback,
    id: feedback.feedback_id,
  }));

  function formatDate(timestamp: string): string {
    return timestamp.split(" ")[0];
  }

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
      headerName: "Date",
      flex: 0.1,
      valueGetter: (params: GridValueGetterParams) =>
        formatDate(params.value as string),
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
            components={{
              NoRowsOverlay: () => (
                <Stack
                  height="100%"
                  alignItems="center"
                  justifyContent="center"
                >
                  No feedback to display.
                </Stack>
              ),
            }}
          />
        </Box>
      </DashboardBox>
      <DashboardBox gridArea="e">
        <BoxHeader
          title="Placeholder Box"
          subtitle="Table overview of user feedback"
          sideText={`${boxDStats?.length}` + " user feedback"}
        />
      </DashboardBox>
    </>
  );
};

export default Row2;
