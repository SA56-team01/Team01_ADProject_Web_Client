import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RootState } from "./RootState";
import Navbar from "@/components/navbar";
import Dashboard from "@/scenes/dashboard";
import LoginPage from "./scenes/login/login";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  // check if user is logged in via token
  // const isAuth = Boolean(useSelector((state: RootState) => state.auth.token));

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
          {/* by default, route to login page */}
          {/* then for route to dashboard, check isAuth */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* <Route path="/" element={<LoginPage />} /> */}
            <Route
              path="/home"
              // element={isAuth ? <Dashboard /> : <Navigate to="/"></Navigate>}
            />
            <Route path="/predictions" element={<div>prediction page</div>} />
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
