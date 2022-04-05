import type { NextPage } from "next";
import Link from "next/link";
import { Text, Flex, Button, Icon } from "@chakra-ui/react";
import { BsTelegram } from "react-icons/bs";
import Sidebar from "../components/Sidebar";
const Home: NextPage = () => {
  return (
    <Sidebar>
      <Flex justifyContent="start" alignItems="start" direction="column">
        <Text fontWeight="bold" fontSize="4xl">
          Leitura Conjunta
        </Text>
        <Link href="https://t.me/lcmsfisher1" passHref>
          <a target="_blank">
            <Button color="white" bg="pink.500" _hover={{ bg: "pink.600", color: "pink.50" }}>
              Participe da LC <Icon ml={3} as={BsTelegram}></Icon>
            </Button>
          </a>
        </Link>
      </Flex>
    </Sidebar>
  );
};

export default Home;
