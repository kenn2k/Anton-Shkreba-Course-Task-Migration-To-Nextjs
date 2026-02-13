"use client";
import { createComment } from "@/api/actions/commentActions";
import { useAppDispatch } from "@/store/hooks";
import SendIcon from "@mui/icons-material/Send";
import { IconButton, Stack, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

export const CommentForm = ({ exhibitId }: { exhibitId: number }) => {
  const dispatch = useAppDispatch();

  const commentSchema = Yup.object().shape({
    text: Yup.string()
      .trim()
      .min(1, "Comment cannot be empty")
      .max(2000, "Too long (max 2000 characters)"),
  });

  const handleFormData = (values: { text: string }) => {
    dispatch(
      createComment({
        exhibitId,
        data: values,
      })
    );
  };

  return (
    <Formik
      initialValues={{ text: "" }}
      validationSchema={commentSchema}
      onSubmit={handleFormData}
    >
      {({ errors, touched, values, handleChange }) => (
        <Form noValidate autoComplete="off">
          <Stack
            direction="row"
            spacing={1}
            alignItems="flex-end"
            sx={{ mt: 1 }}
          >
            <Field
              as={TextField}
              fullWidth
              multiline
              minRows={1}
              maxRows={3}
              name="text"
              placeholder="Write a comment…"
              size="small"
              value={values.text}
              onChange={handleChange}
            />

            <IconButton
              type="submit"
              color="primary"
              disabled={!values.text.trim()}
              sx={{
                mb: touched.text && errors.text ? 3 : 0.5,
              }}
            >
              <SendIcon />
            </IconButton>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};
