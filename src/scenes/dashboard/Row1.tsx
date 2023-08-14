import DashboardBox from "@/components/DashboardBox";
import { useMemo } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
} from "recharts";
import { useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUserStats, selectIsLoading } from "../state/apiSlice";
import BoxHeader from "@/components/BoxHeader";

const Row1 = () => {
  const { palette } = useTheme();

  const isLoading = useSelector(selectIsLoading);
  const boxAStats = useSelector(selectUserStats);
  // const boxBStats = useSelector(selectUserStats);
  // const boxCStats = useSelector(selectUserStats);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  const maxPlaylistCount = useMemo(() => {
    return Math.max(...boxAStats.map((userStat) => userStat.playlistCount));
  }, [boxAStats]);

  // three slices for three components
  // organising data from API call
  // WIP formattedData reducer
  const boxAChartData = useMemo(
    () =>
      boxAStats.map((userStat) => ({
        userId: userStat.userId,
        playlistCount: userStat.playlistCount,
      })),
    [boxAStats]
  );

  // memos for
  // const boxBChartData = useMemo(
  //   () =>
  //     boxBStats.map((userStat) => ({
  //       userId: userStat.userId,
  //       PlaylistCount: userStat.playlistCount,
  //     })),
  //   [boxBStats]
  // );

  // const boxCChartData = useMemo(
  //   () =>
  //     boxCStats.map((userStat) => ({
  //       userId: userStat.userId,
  //       PlaylistCount: userStat.playlistCount,
  //     })),
  //   [boxCStats]
  // );

  return (
    // Why am i hiding it in an empty component?
    <>
      {/* Recharts Simple Area Charts */}
      {/* Box A */}
      <DashboardBox gridArea="a">
        <BoxHeader
          title="Playlist Count by User"
          subtitle="Playlist distribution number by User"
          sideText="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={boxAChartData}
            margin={{
              top: 15,
              right: 25,
              left: -10,
              bottom: 60,
            }}
          >
            <defs>
              {/* for the gradient for colorRevenue specifically */}
              <linearGradient id="colorFirstGraph" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
              {/* for the gradient for colorExpenses */}
              <linearGradient id="colorSecondGraph" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="userId"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              tickLine={false}
              axisLine={{ strokeWidth: "0" }}
              style={{ fontSize: "10px" }}
              // REMEMBER TO EDIT
              // setting the range
              domain={[0, maxPlaylistCount]}
            />
            <Tooltip />
            {/* edit for when you change to our own data */}
            {/* First Graph */}
            <Area
              type="monotone"
              // adjust as neccessary
              dataKey="playlistCount"
              dot={true}
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#colorFirstGraph)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </DashboardBox>

      {/* Copy the other placeholder Charts into this later after fixing the API */}
      {/* Box B */}
      <DashboardBox gridArea="b">
        <BoxHeader
          title="User Growth"
          subtitle="Users per Month"
          sideText="+4%"
        />
      </DashboardBox>
      {/* Box C */}
      <DashboardBox gridArea="c">
        <BoxHeader
          title="Playlist at Time of Day"
          subtitle="Playlist distribution number by time of day"
          sideText="+4%"
        />
      </DashboardBox>
    </>
  );
};

export default Row1;
