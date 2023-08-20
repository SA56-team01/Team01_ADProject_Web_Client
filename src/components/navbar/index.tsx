import { useSelector } from "react-redux";
import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../FlexBetween";
import NavbarRight from "./navbarRight";
import { RootState } from "@/RootState";

const Navbar = () => {
  // refactored right side of navbar into separate component
  const { palette } = useTheme();
  const isAuth = Boolean(useSelector((state: RootState) => state.auth.token));

  return (
    // call exported setting FlexBetween, set colour to grey via palette.grey[300]
    <FlexBetween
      mb="0.25rem"
      p="0.5rem 0rem 1rem 0rem"
      color={palette.grey[300]}
    >
      {/* LEFT SIDE */}
      <FlexBetween gap="0.75rem">
        {/* ICON HERE, fontSize = set icon size */}
        <img src="/logo.png" alt="Spotisan Logo" width="28" height="28" />
        <Typography variant="h4" fontSize="18px" color={palette.primary[500]}>
          Spotisan
        </Typography>
      </FlexBetween>
      {/* RIGHT SIDE */}
      {isAuth && <NavbarRight />}
    </FlexBetween>
  );
};

export default Navbar;
