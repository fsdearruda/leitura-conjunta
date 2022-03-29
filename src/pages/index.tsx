import type { NextPage } from "next";
import { Text, Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
const Home: NextPage = () => {
  return (
    <Sidebar>
      <Flex justifyContent="start" alignItems="start" direction="column">
        <Text lineHeight="5" fontWeight="bold" fontSize="4xl">
          Leitura Conjunta
        </Text>
        <Text color="pink.400" fontWeight="bold" fontSize="4xl">
          13° Edição
        </Text>
        <Button color="white" bg="pink.500" _hover={{ bg: "pink.600", color: "pink.50" }}>
          Participe da LC
        </Button>
      </Flex>
    </Sidebar>
  );
};

export default Home;
