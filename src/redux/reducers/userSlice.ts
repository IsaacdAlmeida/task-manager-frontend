import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';


interface User {
  nome: string;
  sobrenome: string;
  email: string;
  token: string;
}

const initialState: User = {
  nome: '',
  sobrenome: '',
  email: '',
  token: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      Object.assign(state, action.payload);
    },
    clearUser: (state) => {
      Object.assign(state, {
        nome: '',
        sobrenome: '',
        email: '',
        token: '',
      });
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export const selectUser =
  (state: RootState) => state.user;

export default userSlice.reducer;