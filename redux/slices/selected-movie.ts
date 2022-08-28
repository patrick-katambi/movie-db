import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SelectedMovieStateI {
  name: string;
  id: number | null;
}

const initialState: SelectedMovieStateI = {
  name: "",
  id: null,
};

export const selectedMovieSlice = createSlice({
  name: "selectedMovie",
  initialState,
  reducers: {
    setSelectedMovie: (state, action: PayloadAction<SelectedMovieStateI>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
    },
  },
});

export const { setSelectedMovie } = selectedMovieSlice.actions;
export default selectedMovieSlice.reducer;
