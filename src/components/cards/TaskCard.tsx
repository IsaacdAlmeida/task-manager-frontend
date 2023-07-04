import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  IconButton,
  useColorModeValue,
  Badge,
} from '@chakra-ui/react';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin2Line } from 'react-icons/ri';

export default function TaskCard() {
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            TÍTULo da tarefa
          </Heading>
          <Box alignItems="baseline">
            <Badge rounded="full" px="2" fontSize="0.8em"
              colorScheme="green" mr="10px">
              status
            </Badge>
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
              prioridade
            </Badge>
          </Box>
          <Text color={'gray.500'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <IconButton
            colorScheme="blue"
            size="sm"
            mr={2}
            icon={<FiEdit />}
            aria-label="editar task"
          />
          <IconButton
            colorScheme="red"
            size="sm"
            mr={2}
            icon={<RiDeleteBin2Line />}
            aria-label="deletar task"
          />
        </Stack>
      </Box>
    </Center>
  );
}