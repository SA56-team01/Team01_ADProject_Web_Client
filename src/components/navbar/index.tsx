import { useState } from "react";
import { Link } from "react-router-dom";
import PixIcon from "@mui/icons-material/Pix";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "../FlexBetween";

// type Props = {};

const Navbar = () => {
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
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            dashboard
          </Link>
        </Box>
        {/* playlist data/alt segment for the navbar */}
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/viewplaylist"
            onClick={() => setSelected("playlist data")}
            style={{
              color:
                selected === "playlist data" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            playlist data
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/login"
            onClick={() => setSelected("logout")}
            style={{
              color: selected === "logout" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            logout
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
