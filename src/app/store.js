import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import movieSlice from '../features/movie/movieSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    hotstar: movieSlice
  },
});
