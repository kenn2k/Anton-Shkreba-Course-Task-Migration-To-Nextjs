import AttachFileIcon from "@mui/icons-material/AttachFile";
import { Box, Button, Stack, Typography } from "@mui/material";

import type { ChangeEvent } from "react";
import type { FormikHelpers } from "formik";
import { FormPostValues } from "@/types";

interface UploadFileForPostProps {
  setFieldValue: FormikHelpers<FormPostValues>["setFieldValue"];
  value: File | null;
  error?: string | boolean;
}

export const UploadFileForPost = ({
  setFieldValue,
  value,
  error,
}: UploadFileForPostProps) => {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    if (file) {
      setFieldValue("image", file);
    }
  };

  return (
    <Box>
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        hidden
        onChange={handleFileChange}
      />

      <Stack direction="row" spacing={2} alignItems="center">
        <label htmlFor="image-upload">
          <Button
            component="span"
            variant="outlined"
            startIcon={<AttachFileIcon />}
          >
            Select Image
          </Button>
        </label>

        <Typography
          variant="body2"
          sx={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            color: "grey.600",
          }}
        >
          {value ? value.name : "Choose your file"}
        </Typography>
      </Stack>
      {error && typeof error === "string" && (
        <Typography variant="caption" color="error" sx={{ mt: 0.5 }}>
          {error}
        </Typography>
      )}
    </Box>
  );
};
