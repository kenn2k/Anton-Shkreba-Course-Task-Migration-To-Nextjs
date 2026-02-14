import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./slices/userSlice";
import exhibitReduser from "./slices/exhibitSlice";
import commentReduser from "./slices/commentSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      user: userReduser,
      exhibit: exhibitReduser,
      comment: commentReduser,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
