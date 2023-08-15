import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./form";

const LoginPage = () => {
  const { palette } = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box>
      <Box
        sx={{
          width: isNonMobileScreens ? "50%" : "93%",
          p: "2rem",
          m: "2rem auto",
          borderRadius: "1.5rem",
          backgroundColor: "#2d2d34",
        }}
      >
        <Typography
          fontWeight="bold"
          fontSize="32px"
          color="primary"
          sx={{ mb: "0.75rem" }}
        >
          Welcome Admin
        </Typography>
        <Typography
          fontWeight="500"
          variant="h4"
          sx={{ mb: "1.5rem", color: palette.primary[100] }}
        >
          Spotify Playlistener: Generating Data-Driven Playlists Since 2023.
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
