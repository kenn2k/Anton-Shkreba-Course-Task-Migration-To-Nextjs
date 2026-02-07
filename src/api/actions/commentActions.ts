import { CreateCommentArgs } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../instances/axiosInstance";

export const createComment = createAsyncThunk(
  "comment/create",
  async ({ data, exhibitId }: CreateCommentArgs) => {
    const response = await axiosInstance.post(
      `/api/exhibits/${exhibitId}/comments`,
      data
    );
    return response.data;
  }
);

export const getCommentsByExhibitId = async (exhibitId: number) => {
  const response = await axiosInstance.get(
    `/api/exhibits/${exhibitId}/comments`
  );
  return response.data;
};

export const deleteComment = createAsyncThunk(
  "comments/delete",
  async ({
    exhibitId,
    commentId,
  }: {
    exhibitId: number;
    commentId: number;
  }) => {
    await axiosInstance.delete(
      `/api/exhibits/${exhibitId}/comments/${commentId}`
    );

    return { commentId };
  }
);
