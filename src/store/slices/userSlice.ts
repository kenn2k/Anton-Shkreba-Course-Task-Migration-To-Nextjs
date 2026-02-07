import { loginUser, registerUser } from "@/api/actions/userActions";
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

const token = localStorage.getItem("access_token");

const initialState: UsersState = {
  isAuthenticated: !!token,
  user: null,
  loading: "idle",
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.loading = "idle";
      state.error = null;

      localStorage.removeItem("access_token");
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
      });
  },
});
export const { logout } = userSlice.actions;
export default userSlice.reducer;
