import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";

const Row1 = () => {
  return (
    <>
      <DashboardBox gridArea="d">
        <BoxHeader
          title="User Feedback"
          subtitle="Table of User Feedback"
          sideText="+4%"
        />
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

export default Row1;
