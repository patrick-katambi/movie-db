import { configureStore } from "@reduxjs/toolkit";
import selectedMovieReducer from "./slices/selected-movie";

export const store = configureStore({
  reducer: { selectedMovie: selectedMovieReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
