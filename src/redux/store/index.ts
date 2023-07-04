import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userSlice from '../reducers/userSlice';
import tasksSlice, { setTarefas } from '../reducers/tasksSlice';
import { listarTarefas } from '../../services/fetchTasksApi';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  user: userSlice,
  task: tasksSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// async function fetchTasksToRedux() {
//   try {
//     const response = await listarTarefas();
//     const tasks = response.data;
//     store.dispatch(setTarefas(tasks));
//   } catch (error) {
//     console.log(error);
//   }
// }

// void fetchTasksToRedux();