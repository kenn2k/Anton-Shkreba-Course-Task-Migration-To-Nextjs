import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./slices/userSlice";
import exhibitReduser from "./slices/exhibitSlice";
import commentReduser from "./slices/commentSlice";

export const store = configureStore({
  reducer: {
    user: userReduser,
    exhibit: exhibitReduser,
    comment: commentReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
