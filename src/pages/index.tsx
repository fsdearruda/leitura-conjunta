import type { NextPage } from "next";
import { FiExternalLink } from "react-icons/fi";
import {
  Flex,
  Box,
  Text,
  Button,
  Progress,
  Stack,
  HStack,
  Heading,
  Divider,
  Center,
} from "@chakra-ui/react";
import Image from "next/image";

import { IoBookOutline } from "react-icons/io5";
import { AiOutlineCalendar } from "react-icons/ai";

const Home: NextPage = () => {
  return (
    <>
      <Box maxW="1490px" w="100%" m="0 auto" px="2em" py="3em">
        <Flex flexDirection={{ base: "column", xl: "row" }}>
          <HStack flexDirection={{ base: "column", md: "row" }}>
            <Stack minW="400px">
              <Text
                color="gray.700"
                maxW={"400px"}
                fontWeight="bold"
                fontSize="5xl"
                lineHeight="1.2"
                mb=".3em"
              >
                Leitura Conjunta{" "}
                <Text as="span" color="purple.400">
                  13° Edição
                </Text>
              </Text>
              <Text fontSize="lg" maxW={"400px"}>
                Almost anything can be represented in a tree structure Almost
                anything can be represen
              </Text>
              <Button
                size="md"
                fontWeight={600}
                maxW="20ch"
                color="white"
                colorScheme="purple"
                mt=".3em"
              >
                Participar da LC
              </Button>
            </Stack>
            <Image src="/static/lchero.svg" alt="hero" width={580} height={560} />
          </HStack>
          <Flex flexDirection={"column"}>
            <Heading mb={12} fontWeight="light" fontSize="2rem">
              <Text as="span" fontWeight="bold" color="purple.500">
                Livros
              </Text>{" "}
              da Leitura Conjunta
            </Heading>
            <Box
              w={{ base: "100%", xl: "480px" }}
              h="250px"
              boxShadow={"md"}
              borderRadius="21px"
            ></Box>
          </Flex>
        </Flex>

        <Flex
          align="center"
          mt={8}
          bgColor="purple.400"
          w="100%"
          h="220px"
          borderRadius="21px"
          px={"3em"}
        >
          <Box
            d="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            px="2.8em"
            py="0.725em"
            borderRadius="25%"
            boxShadow="lg"
            bgColor="white"
            mr={"4em"}
          >
            <Text fontSize="2rem" color="gray.500">
              Ter
            </Text>
            <Text fontWeight={"bold"} fontSize="2.8rem" color="#344054">
              27
            </Text>
          </Box>

          <Flex flexDirection="column" minW="320px">
            <Flex justifyContent="space-between" mb="1em">
              <Text fontSize="1.5rem" color="white" fontWeight="400">
                Progresso
              </Text>
              <Box
                bgColor="white"
                py="0.375em"
                px="1em"
                borderRadius="11px"
                boxShadow="lg"
              >
                <Text fontWeight="600" fontSize="1.2rem">
                  30%
                </Text>
              </Box>
            </Flex>
            <Progress
              mt={3}
              value={20}
              size="md"
              height=".4rem"
              bgColor="white"
              colorScheme={"green"}
            />
          </Flex>
          <Center height="130px" mx="4em">
            <Divider orientation="vertical" bgColor="white" />
          </Center>

          <Flex
            flexDirection="column"
            justifyContent="space-between"
            minW="320px"
          >
            <Flex flexDirection="column" color="white">
              <Text fontSize="1.5rem" color="white" fontWeight="400" mb="1em">
                Páginas Lidas
              </Text>
              <Flex alignItems="center">
                <IoBookOutline size="32px" />
                <Text ml="10px" fontWeight="600" fontSize="1.4rem">
                  79/256
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex
            flexDirection="column"
            justifyContent="space-between"
            minW="320px"
          >
            <Flex flexDirection="column" color="white">
              <Text fontSize="1.5rem" color="white" fontWeight="400" mb="1em">
                Semana
              </Text>
              <Flex alignItems="center">
                <AiOutlineCalendar size="32px" />
                <Text ml="10px" fontWeight="600" fontSize="1.4rem">
                  3/12
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Home;

{
  /* <Flex alignItems="center" borderRadius="20px" p={5} bg="#6389B8" maxW="90vw">
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
</Flex> */
}
