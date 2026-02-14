import { createExhibit } from "@/api/actions/exhibitActions";
import { Exhibit } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ExhibitState {
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  exhibits: Exhibit[];
}

const initialState: ExhibitState = {
  loading: "idle",
  error: null,
  exhibits: [],
};

const exhibitSlice = createSlice({
  name: "exhibit",
  initialState,
  reducers: {
    addExhibit: (state, action: PayloadAction<Exhibit>) => {
      state.exhibits.unshift(action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(createExhibit.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.exhibits.unshift(action.payload);
      })
      .addCase(createExhibit.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(createExhibit.rejected, (state, action) => {
        state.loading = "failed";
        state.error =
          (action.payload as string) ??
          action.error.message ??
          "Exhibit creation failed";
      });
  },
});
export const { addExhibit } = exhibitSlice.actions;
export default exhibitSlice.reducer;
