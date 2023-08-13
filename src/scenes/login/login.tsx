import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Form } from "react-router-dom";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          backgroundColor: theme.palette.background.default,
          p: "1rem 6%",
          textAlign: "center",
        }}
      ></Box>
      <Typography fontWeight="bold" fontSize="32px" color="primary">
        Spotify Playlistener
      </Typography>
      <Box
        sx={{
          width: isNonMobileScreens ? "50%" : "93%",
          p: "2rem",
          m: "2rem auto",
          borderRadius: "1.5rem",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Spotify Playlistener!
        </Typography>
        <Form></Form>
      </Box>
    </Box>
  );
};

export default LoginPage;
