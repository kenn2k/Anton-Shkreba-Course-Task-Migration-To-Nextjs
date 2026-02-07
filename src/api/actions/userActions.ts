import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../instances/axiosInstance";
import { User } from "@/types";

export const registerUser = createAsyncThunk(
  "user/register",
  async (data: User) => {
    const response = await axiosInstance.post("/users/register", data);
    return response.data;
  }
);

export const loginUser = createAsyncThunk("user/login", async (data: User) => {
  const response = await axiosInstance.post("/api/auth/login", data);
  const { access_token } = response.data;

  if (!access_token) {
    throw new Error("Server doesn't return an access token");
  }
  localStorage.setItem("access_token", access_token);

  return { access_token };
});

export const getCurrentUser = async () => {
  const response = await axiosInstance.get("/users/my-profile");
  return response.data;
};
