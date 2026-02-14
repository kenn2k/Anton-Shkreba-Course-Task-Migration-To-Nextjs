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
import { registerUser } from "@/api/actions/userActions";
import { useAppDispatch } from "@/store/hooks";
import { User } from "@/types";
import Link from "next/link";
import { registerSchema } from "./validation/registerschema";
import { useState } from "react";

export const RegisterForm = () => {
  const route = useRouter();
  const dispatch = useAppDispatch();
  const [serverError, setServerError] = useState<string | null>(null);

  const handleFormData = async (values: User) => {
    try {
      setServerError(null);
      await dispatch(registerUser(values)).unwrap();
      route.push("/user/login");
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
        Create Account
      </Typography>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={registerSchema}
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
                error={Boolean(touched.username && errors.username)}
                helperText={touched.username && errors.username}
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
              {serverError && <Alert severity="error">{serverError}</Alert>}
              <Button
                fullWidth
                variant="contained"
                size="large"
                type="submit"
                sx={{ mt: 2 }}
              >
                Register
              </Button>
              <Typography variant="body2" sx={{ marginTop: 2 }}>
                Already have an account?
                <Link
                  href="/user/login"
                  style={{
                    textDecoration: "none",
                    color: "#646cff",
                    marginLeft: "0.5rem",
                  }}
                >
                  Login here
                </Link>
              </Typography>
            </Stack>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};
