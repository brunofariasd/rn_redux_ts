import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../stores/storeCounter.store';

const store = configureStore({
  reducer: {
    counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
