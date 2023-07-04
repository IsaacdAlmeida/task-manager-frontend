import { useAppSelector } from '../hooks/reduxHook';
import { RootState } from '../redux/store';
import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: 'https://task-manager-production-4b8f.up.railway.app/api/tarefas',
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
    const response = await instance.get('/', { headers });
    return response;
  } catch (error) {
    throw new Error('Erro ao listar as tarefas');
  }
};

export const cadastrarTarefa = async (
  tarefa: Omit<Tarefa, 'id' | 'usuario'>,
): Promise<AxiosResponse<Tarefa>> => {
  try {
    const response = await instance.post('/', tarefa, { headers });
    return response;
  } catch (error) {
    throw new Error('Erro ao cadastrar a tarefa');
  }
};

export const editarTarefa = async (
  id: number,
  tarefa: Omit<Tarefa, 'id' | 'usuario'>,
): Promise<AxiosResponse<Tarefa>> => {
  try {
    const response = await instance.put(`/${id}`, tarefa, { headers });
    return response;
  } catch (error) {
    throw new Error('Erro ao editar a tarefa');
  }
};

export const deletarTarefa = async (id: number): Promise<void> => {
  try {
    await instance.delete(`/${id}`, { headers });
  } catch (error) {
    throw new Error('Erro ao deletar a tarefa');
  }
};

