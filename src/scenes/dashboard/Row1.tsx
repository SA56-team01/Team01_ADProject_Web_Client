import DashboardBox from "@/components/DashboardBox";
import React from "react";
import { useGetKpisQuery } from "../state/api";

// type Props = {};

const Row1 = () => {
  // how you make an api call in TS
  const { data } = useGetKpisQuery;

  return (
    <>
      <DashboardBox gridArea="a"></DashboardBox>
      <DashboardBox gridArea="b"></DashboardBox>
      <DashboardBox gridArea="c"></DashboardBox>
    </>
  );
};

export default Row1;
