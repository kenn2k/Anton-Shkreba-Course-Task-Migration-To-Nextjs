"use client";
import {
  Alert,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Field, Form, Formik } from "formik";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { loginUser } from "@/api/actions/userActions";
import { useAppDispatch } from "@/store/hooks";
import { User } from "@/types";
import { useState } from "react";
import { loginSchema } from "./validation/loginschema";

export const LoginForm = () => {
  const route = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const handleFormData = async (values: User) => {
    try {
      setServerError(null);

      await dispatch(loginUser(values)).unwrap();

      route.push("/");
    } catch (error) {
      setServerError(error as string);
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 400,
        width: "100%",
        p: { xs: 3, sm: 4 },
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        align="center"
        sx={{
          mb: 3,
          color: "primary.main",
          fontWeight: 600,
        }}
      >
        Log In
      </Typography>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={handleFormData}
      >
        {({ errors, touched }) => (
          <Form autoComplete="off">
            <Stack spacing={3}>
              <Field
                as={TextField}
                fullWidth
                required
                id="username"
                label="Enter Username"
                name="username"
                variant="outlined"
                type="text"
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
              />
              <Field
                as={TextField}
                fullWidth
                required
                id="password"
                label="Password"
                name="password"
                variant="outlined"
                type="password"
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
              />
              {serverError && (
                <Alert severity="error" sx={{ mb: 2 }}>
                  {serverError}
                </Alert>
              )}
              <Button
                fullWidth
                variant="contained"
                size="large"
                type="submit"
                sx={{ mt: 2 }}
              >
                Login
              </Button>
              <Typography variant="body2" sx={{ marginTop: 2 }}>
                Don&apos;t have an account?
                <Link
                  href="/user/register"
                  style={{
                    textDecoration: "none",
                    color: "#646cff",
                    marginLeft: "0.5rem",
                  }}
                >
                  Register here
                </Link>
              </Typography>
            </Stack>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};
