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
import { NavLink as ReachLink } from 'react-router-dom';

export const LoginForm = () => (
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
              <Input id="email" type="email" />
            </FormControl>
            <PasswordInput />
          </Stack>
          <Stack spacing="6">
            <Button variant="outline" colorScheme="teal">Entrar</Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Container>
);
