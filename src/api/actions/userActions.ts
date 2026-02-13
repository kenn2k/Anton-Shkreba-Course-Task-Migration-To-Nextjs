import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../instances/axiosInstance";
import { User } from "@/types";

export const registerUser = createAsyncThunk(
  "user/register",
  async (data: User, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/api/users/register", data);
      return response.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "Registration failed";
      return rejectWithValue(errorMessage);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (data: User, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/api/auth/login", data);

      return response.data;
    } catch (error: any) {
      const message = error.response?.data?.message || "Login failed";
      return rejectWithValue(message);
    }
  }
);

export const getCurrentUser = createAsyncThunk("user/me", async () => {
  const response = await axiosInstance.get("/api/users/my-profile");
  return response.data;
});

export const logoutUser = createAsyncThunk("user/logout", async () => {
  await axiosInstance.post("/api/auth/logout");
  return true;
});
