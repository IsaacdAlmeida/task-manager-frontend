import { useAppSelector } from '../hooks/reduxHook';
import { RootState } from '../redux/store';
import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/api/tarefas',
});

const user = useAppSelector((
  state: RootState) => state.user);

const { token: userToken } = user;

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

const headers = {
  Authorization: `Bearer ${userToken}`,
};


export const listarTarefas = async (): Promise<AxiosResponse<Tarefa[]>> => {
  try {
    const response = await instance.get('/listar', { headers });
    return response;
  } catch (error) {
    throw new Error('Erro ao listar as tarefas');
  }
};

