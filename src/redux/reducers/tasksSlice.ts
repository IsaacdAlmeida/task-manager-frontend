import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface Tarefa {
  id: number;
  nome: string;
  descricao: string;
  prioridade: string;
  status: string;
  dataInicio: string;
  dataFinal: string;
  usuario: {
    nome: string;
    sobrenome: string;
    email: string;
    token: string | null;
  };
}

interface TarefaState {
  arrayOfTarefas: Tarefa[];
}

const initialState: TarefaState = {
  arrayOfTarefas: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTarefas: (state, action: PayloadAction<Tarefa[]>) => {
      state.arrayOfTarefas = action.payload;
    },
    removeFromList: (state, action: PayloadAction<number>) => {
      state.arrayOfTarefas = state.arrayOfTarefas
        .filter(item => item.id !== action.payload);
    },
  },
});

export const { setTarefas, removeFromList } = tasksSlice.actions;

export const selectTarefas = 
  (state: RootState) => state.task.arrayOfTarefas;

export default tasksSlice.reducer;