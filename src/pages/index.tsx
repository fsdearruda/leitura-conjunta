import type { NextPage } from "next";
import useFetch from "../hooks/useFetch";
import LeaderBoard from "../components/LeaderBoard";
import type { User } from "../models/User";
import { Flex, Text, Icon } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import Loading from "../components/Loading";

const LeaderboardPage: NextPage = () => {
  const { data } = useFetch<User[]>("users", 10000);
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
        {(data && (
          <>
            <LeaderBoard users={data} />
            <Link href="https://twitch.tv/msfisher1" passHref>
              <a>
                <Text title="Twitch" _hover={{ color: "purple.600" }} color="gray.400">
                  LC Msfisher <Icon as={FiExternalLink} w={3} h={3} />
                </Text>
              </a>
            </Link>{" "}
          </>
        )) || <Loading />}
      </Flex>
    </Sidebar>
  );
};

export default LeaderboardPage;
