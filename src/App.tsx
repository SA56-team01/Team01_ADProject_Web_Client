import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "@/components/navbar";
import Dashboard from "@/scenes/dashboard";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  // return statement
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {/* resets css to mui default */}
        <CssBaseline />
        {/* sets base padding for box */}
        <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
          <Navbar />
          {/* this is how routing is done in react */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/predictions" element={<div>prediction page</div>} />
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
