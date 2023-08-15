import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import { Formik, FormikHelpers } from "formik";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setLogin } from "../state/authSlice";
import * as yup from "yup";

const loginSchema = yup.object().shape({
  username: yup.string().required("required"),
  password: yup.string().required("required"),
});

const initialValuesLogin = {
  username: "",
  password: "",
};

// refactor form code to remove feedback
const Form = () => {
  const [pageType] = useState("login");
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const isLogin = pageType === "login";

  const login = async (
    values: typeof initialValuesLogin,
    onSubmitProps: FormikHelpers<typeof initialValuesLogin>
  ) => {
    // call to backend to check user login credentials, amend depending on endpoint
    const loggedInResponse = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const loggedIn = await loggedInResponse.json();
    onSubmitProps.resetForm();
    if (loggedIn) {
      dispatch(
        setLogin({
          user: loggedIn.user,
          // need backend to send me a token?
          token: loggedIn.token,
        })
      );
      navigate("/home");
    }
  };

  const handleFormSubmit = async (
    values: typeof initialValuesLogin,
    onSubmitProps: FormikHelpers<typeof initialValuesLogin>
  ) => {
    if (isLogin) await login(values, onSubmitProps);
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValuesLogin}
      validationSchema={loginSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            // might not need this...
            gridTemplateColumns="repeat(2, minmax(0,1fr))"
            sx={{
              "&^ >div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            {isLogin && (
              <>
                <TextField
                  label="Username"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={(values as typeof initialValuesLogin).username}
                  name="username"
                  error={Boolean(touched.username) && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
                  sx={{
                    gridColumn: "span 2",
                    "& label": {
                      color: palette.primary[100], // changes label color
                    },
                    "& .MuiInputBase-input": {
                      color: palette.primary[100], // changes input text color
                    },
                  }}
                />
                <TextField
                  label="Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                  error={Boolean(touched.password) && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  sx={{
                    gridColumn: "span 2",
                    "& label": {
                      color: palette.primary[100], // changes label color
                    },
                    "& .MuiInputBase-input": {
                      color: palette.primary[100], // changes input text color
                    },
                  }}
                />
              </>
            )}
          </Box>

          <Box>
            <Button
              fullWidth
              type="submit"
              sx={{
                m: "2rem 0",
                p: "1rem",
                backgroundColor: palette.primary.main,
                color: palette.background.default,
                "&:hover": { color: palette.primary.main },
              }}
            >
              {" "}
              <Typography
                sx={{
                  textDecoration: "underline",
                  color: palette.primary.main,
                  "&:hover": {
                    cursor: "pointer",
                    color: palette.primary.light,
                  },
                }}
              >
                Login
              </Typography>
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default Form;
