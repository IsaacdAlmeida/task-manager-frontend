import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import { PasswordInput } from './PasswordInput';
// import { createUser } from '../../services/fetchPetsAPI';

interface FormData {
  nome: string;
  sobrenome: string;
  email: string;
  senha: string;
  confirmarSenha: string;
}

export default function CreateUserForm() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // await createUser(formData);
    setFormData({
      nome: '',
      sobrenome: '',
      email: '',
      senha: '',
      confirmarSenha: '',
    });
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Faça seu cadastro
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="nome" isRequired>
                  <FormLabel>Nome</FormLabel>
                  <Input
                    value={formData.nome}
                    type="text"
                    id="nome"
                    onChange={handleChange}
                    name='nome'
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="sobrenome" isRequired>
                  <FormLabel>Sobrenome</FormLabel>
                  <Input
                    value={formData.sobrenome}
                    type="text"
                    id="sobrenome"
                    onChange={handleChange}
                    name='sobrenome'
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                value={formData.email}
                type="text"
                id="email"
                onChange={handleChange}
                name='email'
              />
            </FormControl>
            <PasswordInput 
              name='senha'
              label='Senha'
              onChange={handleChange}
              value={formData.senha}
              id='senha'
            />
            <PasswordInput 
              name='confirmarSenha'
              label='Confirme sua senha'
              onChange={handleChange}
              value={formData.confirmarSenha}
              id='confirmarSenha'
            />
            <Stack spacing={10} pt={2}>
              <Button
                onClick={() => {
                  void handleSubmit();
                }}
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Cadastrar
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}