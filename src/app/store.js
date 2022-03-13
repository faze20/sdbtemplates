import { configureStore } from '@reduxjs/toolkit';
import navReducer from '../features/navheads/navSlice'

export const store = configureStore({
  reducer: {
    nav:navReducer
  },
});
