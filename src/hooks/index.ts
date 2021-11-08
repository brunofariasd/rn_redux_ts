import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import counterReducer from './storeCounter.store'

const store = configureStore({
  reducer: {
    counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store;
