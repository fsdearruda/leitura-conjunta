import type { NextPage } from "next";
import useFetch from "../hooks/useFetch";
import LeaderBoard from "../components/LeaderBoard";
import type { User } from "../models/User";
import { Flex, Spinner, Text } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
const LeaderboardPage: NextPage = () => {
  const { data } = useFetch<User[]>("users");

  if (!data) {
    return (
      <Sidebar>
        <Flex justifyContent="center" alignItems="center" direction="column">
          <Text fontSize="3xl">Loading</Text>
          <Spinner size="md" />
        </Flex>
      </Sidebar>
    );
  }
  return (
    <Sidebar>
      <Flex my={7} justifyContent="center" alignItems="center" direction="column">
        <Text mb={3} fontWeight={650} fontSize="3xl">
          Quarto de despejo
        </Text>
        <LeaderBoard users={data} />
        <Text color="gray.400">bom dia!</Text>
      </Flex>
    </Sidebar>
  );
};

export default LeaderboardPage;
