import {
  getCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
} from "@/api/actions/userActions";
import { createSlice } from "@reduxjs/toolkit";

interface User {
  id: number;
  username: string;
}

interface UsersState {
  isAuthenticated: boolean;
  user: User | null;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: UsersState = {
  isAuthenticated: false,
  user: null,
  loading: "idle",
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = "failed";
        state.error =
          (action.payload as string) ??
          action.error.message ??
          "Registration failed";
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.loading = "succeeded";
        state.isAuthenticated = true;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = "failed";
        state.isAuthenticated = false;
        state.error =
          (action.payload as string) ?? action.error.message ?? "Log in failed";
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.loading = "succeeded";
      })
      .addCase(getCurrentUser.rejected, (state) => {
        state.isAuthenticated = false;
        state.user = null;
        state.loading = "failed";
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = null;
      });
  },
});

export const { clearError } = userSlice.actions;
export default userSlice.reducer;
