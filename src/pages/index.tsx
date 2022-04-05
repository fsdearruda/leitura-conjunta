import type { NextPage } from "next";
import useFetch from "../hooks/useFetch";
import LeaderBoard from "../components/LeaderBoard";
import type { User } from "../models/User";
import { Flex, Spinner, Text, Icon } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

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
        <Link href="https://amzn.to/3DkTKuS" passHref>
          <a title="Link de afiliado Amazon" target="_blank">
            <Text _hover={{ color: "pink.400" }} mb={3} fontWeight={650} fontSize="3xl">
              Quarto de despejo <Icon as={FiExternalLink} w={5} h={5} />
            </Text>
          </a>
        </Link>
        <LeaderBoard users={data} />
        <Text color="gray.400">bom dia!</Text>
      </Flex>
    </Sidebar>
  );
};

export default LeaderboardPage;
