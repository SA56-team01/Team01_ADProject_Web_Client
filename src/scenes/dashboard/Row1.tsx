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
import { useFetchMyDataQuery } from "../state/api";

const Row1 = () => {
  const { palette } = useTheme();
  const { data, isLoading, isError } = useFetchMyDataQuery();

  // three slices for three components
  // organising data from API call
  const revenueExpenses = useMemo(() => {
    return (
      // replace with my Slices
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        // formatting data for the chart
        return {
          name: month.substring(0, 3),
          revenue: revenue,
          expenses: expenses,
        };
      })
    );
  }, [data]);

  // boilerplate to debug
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: Some Error</p>;
  }

  return (
    // Why am i hiding it in an empty component?
    <>
      {/* Recharts Simple Area Charts */}
      {/* Box A */}
      <DashboardBox gridArea="a">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 15,
              right: 25,
              left: -10,
              bottom: 60,
            }}
          >
            <defs>
              {/* for the gradient for colorRevenue specifically */}
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
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
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
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
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              tickLine={false}
              axisLine={{ strokeWidth: "0" }}
              style={{ fontSize: "10px" }}
              // setting the range
              domain={[8000, 23000]}
            />
            <Tooltip />
            {/* edit for when you change to our own data */}
            {/* First Graph */}
            <Area
              type="monotone"
              dataKey="revenue"
              dot={true}
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
            {/* Second Graph */}
            <Area
              type="monotone"
              dataKey="expenses"
              dot={true}
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#colorExpenses)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </DashboardBox>

      {/* Copy the other placeholder Charts into this later after fixing the API */}
      {/* Box B */}
      <DashboardBox gridArea="b"></DashboardBox>
      {/* Box C */}
      <DashboardBox gridArea="c"></DashboardBox>
    </>
  );
};

export default Row1;
