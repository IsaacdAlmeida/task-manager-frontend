import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface User {
  token: string;
}

const initialState: User = {
  token: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<User>) => {
      state.token = action.payload.token;
    },
  },
});

export const { setToken } = userSlice.actions;

export const selectUser = 
  (state: RootState) => state.user;

export default userSlice.reducer;