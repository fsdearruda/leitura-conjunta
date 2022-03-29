import type { NextPage } from "next";
import useFetch from "../../hooks/useFetch";
import LeaderBoard from "../../components/LeaderBoard";
import type { User } from "../../models/User";
import { Flex, Spinner, Text } from "@chakra-ui/react";

const OverlayPage: NextPage = () => {
  const { data } = useFetch<User[]>("users");

  if (!data) {
    return (
      <Flex justifyContent="center" alignItems="center" direction="column">
        <Text color={"white"} fontSize="3xl">
          Loading
        </Text>
        <Spinner size="md" />
      </Flex>
    );
  }
  return (
    <Flex my={7} color={"white"} justifyContent="center" alignItems="center" direction="column">
      <Text mb={3} fontWeight={650} fontSize="3xl">
        Leitura Conjunta
      </Text>
      <LeaderBoard users={data} />
      <Text color="gray.400">Preview</Text>
    </Flex>
  );
};

export default OverlayPage;
