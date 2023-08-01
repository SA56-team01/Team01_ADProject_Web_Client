import { useState } from "react";
import { Link } from "react-router-dom";
import PixIcon from "@mui/icons-material/Pix";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "../FlexBetween";

type Props = {};

const Navbar = (props: Props) => {
  // importing palette
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  return (
    // call exported setting FlexBetween, set colour to grey via palette.grey[300]
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* LEFT SIDE */}
      <FlexBetween gap="0.75rem">
        {/* ICON HERE, fontSize = set icon size */}
        <PixIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="16px">
          Spotify Playlistener
        </Typography>
      </FlexBetween>

      {/* RIGHT SIDE */}
      <FlexBetween gap="2rem">
        {/* why am i getting an error? */}
        <Box sx={{ "&:hover": { color: palette.primary[200] } }}></Box>
        <Link to="/" onClick={() => setSelected("dashboard")}>
          dashboard
        </Link>
        <Box></Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
