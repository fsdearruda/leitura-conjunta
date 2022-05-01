import type { NextPage } from "next";
import { FiExternalLink } from "react-icons/fi";
import { Flex, Box, Text, Icon, Button, Progress, Spacer } from "@chakra-ui/react";
const Home: NextPage = () => {
  return (
    <Flex mx={40} direction="column">
      <Flex maxW="30vw" my={7} justifyContent="center" alignItems="flex-start" direction="column">
        <Flex maxW="50vw" fontFamily="Inter" direction="row">
          <Flex direction="column">
            <Text lineHeight="10" color="gray.700" fontWeight="bold" fontSize="3xl">
              Leitura Conjunta
            </Text>
            <Text fontWeight="bold" fontSize="4xl" color="purple.500">
              13° Edição
            </Text>
            <Text fontSize="lg" my={3}>
              Almost anything can be represented in a tree structure Almost anything can be represen
            </Text>
            <Button size="md" fontWeight="light" maxW="20ch" color="white" colorScheme="purple">
              Participar da LC
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex alignItems="center" borderRadius="20px" p={5} bg="#6389B8" maxW="90vw">
        <Flex boxShadow="md" mr={5} borderRadius="20px" w="7em" justifyContent="center" alignItems="center" flexDirection="column" bg="white" p={5}>
          <Text color="GrayText" fontSize="xl">
            Ter
          </Text>
          <Text fontSize="xl" fontWeight="bold">
            27
          </Text>
        </Flex>
        <Flex w="10vw" direction="column">
          <Flex alignItems="center" justifyContent="center" direction="row">
            <Flex>
              <Text fontSize="xl" color="blue.50">
                Progresso
              </Text>
            </Flex>
            <Spacer />
            <Flex boxShadow="md" alignItems="center" w="5ch" justifyContent="center" borderRadius="lg" bg="white">
              <Text m={.5} fontWeight="medium">20%</Text>
            </Flex>
          </Flex>
          <Progress mt={3} value={20} size="md" height=".5rem" colorScheme="purple" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
