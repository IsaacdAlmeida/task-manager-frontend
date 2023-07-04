import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  Link,
} from '@chakra-ui/react';
import { PasswordInput } from './PasswordInput';
import { NavLink as ReachLink, useNavigate } from 'react-router-dom';
import { ChangeEvent, useState, useEffect } from 'react';
import { login } from '../../services/fetchUserApi';
import { RootState } from '../../redux/store';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { setUser } from '../../redux/reducers/userSlice';

interface LoginData {
  email: string;
  senha: string;
}

export default function LoginForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    senha: '',
  });


  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const data = await login(loginData);
    
    if (!data) {
      console.log('deu ruim');
    }

    dispatch(setUser(data));
  };

  
  const token = useAppSelector((
    state: RootState) => state.user.token);

  useEffect(() => {
    if (token) {
      navigate('/home');
    }
  }, [token]);

  return (
    <Container
      maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}
    >
      <Stack
        rounded={'lg'}
        p={8}
      >
        <Stack spacing="6">
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Heading
              size={{ base: 'xs', md: 'sm' }}>Faça Login
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Novo no Task Manager?</Text>
              <Link as={ReachLink} to="/cadastro">
                <Button variant="link" colorScheme="blue">
                  Criar Conta
                </Button>
              </Link>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={{ base: 'transparent', sm: 'bg-surface' }}
          boxShadow={{ base: 'none', sm: 'md' }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl isRequired>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  type="email"
                  value={loginData.email}
                  onChange={handleChange}
                  name="email"
                />
              </FormControl>
              <PasswordInput
                name='senha'
                label='senha'
                onChange={handleChange}
                value={loginData.senha}
                id='senha'
              />
            </Stack>
            <Stack spacing="6">
              <Button
                variant="outline"
                colorScheme="teal"
                onClick={() => {
                  void handleSubmit();
                }}
              >Entrar</Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
