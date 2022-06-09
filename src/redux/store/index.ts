import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { postsRedicer } from '../reducers/postsSlice';
import { userReducer } from '../reducers/userSlice';
import { usersReducer } from '../reducers/usersSlice';

const rootReducer = combineReducers({
  postsRedicer,
  userReducer,
  usersReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
