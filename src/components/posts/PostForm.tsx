"use client";
import { Button, Stack, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { createExhibit } from "@/api/actions/exhibitActions";
import { FormPostValues } from "@/types";
import { UploadFileForPost } from "./UploadFileForPost";

export const PostForm = () => {
  const dispatch = useAppDispatch();

  const route = useRouter();
  const createPostSchema = Yup.object().shape({
    description: Yup.string()
      .min(2, "Too Short!")
      .max(250, "Too Long!")
      .required("Required"),
    image: Yup.mixed().required("Image is required"),
  });

  const handleFormData = async (values: FormPostValues) => {
    const formData = new FormData();
    formData.append("description", values.description);
    if (values.image) {
      formData.append("image", values.image);
    }
    try {
      await dispatch(createExhibit(formData)).unwrap();
      route.push("/");
    } catch (err) {
      console.error("Error", err);
    }
  };
  return (
    <Formik
      initialValues={{ description: "", image: null }}
      validationSchema={createPostSchema}
      onSubmit={handleFormData}
    >
      {({ setFieldValue, values, errors, touched }) => (
        <Form autoComplete="off">
          <Stack spacing={3}>
            <Field
              as={TextField}
              fullWidth
              multiline
              name="description"
              rows={3}
              label="Description"
              variant="outlined"
              required
              error={Boolean(touched.description && errors.description)}
              helperText={touched.description && errors.description}
              sx={{
                "& .MuiOutlinedInput-root": {
                  transition: "border-color 0.3s",
                  "&.Mui-focused fieldset": {
                    borderColor: "primary.main",
                    borderWidth: "2px",
                  },
                },
              }}
            />

            <UploadFileForPost
              setFieldValue={setFieldValue}
              value={values.image}
              error={touched.image && errors.image}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ py: 1.5, mt: 2 }}
            >
              Create Post
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};
