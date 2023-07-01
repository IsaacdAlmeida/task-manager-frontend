import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/api/auth',
});

interface Token {
  token: string;
}

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
  token: null;
}

export const login = async (userInfos: UserInfos): Promise<Token> => {
  const response = await instance.post<Token>('/login', userInfos);
  const token = response.data.token;  

  return { token };
};

export const createUser = async (newUser: NewUSer): Promise<ReturnedUser> => {
  const response = await instance.post<ReturnedUser>('/cadastro', newUser);
  const userInfos = response.data;

  return userInfos;
};


