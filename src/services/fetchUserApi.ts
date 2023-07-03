import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/api/auth',
});

interface UserInfos {
  email: string;
  senha: string;
}

interface NewUSer {
  nome: string;
  sobrenome: string;
  email: string;
  senha: string;
}

interface ReturnedUser {
  nome: string;
  sobrenome: string;
  email: string;
  token: string | null;
}


export const login = async (userInfos: UserInfos): Promise<ReturnedUser> => {
  const response = await instance.post<ReturnedUser>('/login', userInfos);
  const { data } = response;

  return data;
};

export const createUser = async (newUser: NewUSer): Promise<ReturnedUser> => {
  const response = await instance.post<ReturnedUser>('/cadastro', newUser);
  const userInfos = response.data;

  return userInfos;
};


