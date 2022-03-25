import type { NextPage } from "next";
import useFetch from "../hooks/useFetch";
import LeaderBoard from "../components/LeaderBoard";
import type User from "../models/User";
import { Flex, Spinner, Text } from "@chakra-ui/react";

const Home: NextPage = () => {
  const { data } = useFetch<User[]>("users");

  if (!data) {
    return (
      <Flex justifyContent="center" alignItems="center" direction="column">
        <Text fontSize="3xl">Loading</Text>
        <Spinner size="md" />
      </Flex>
    );
  }
  return (
    <>
      <Flex my={7} justifyContent="center" alignItems="center" direction="column">
        <Text mb={3} fontWeight={650} fontSize="3xl">
          Ranking
        </Text>
      </Flex>
      <LeaderBoard users={data} />
    </>
  );
};

export default Home;
