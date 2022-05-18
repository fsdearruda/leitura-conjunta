import type { NextPage } from "next";
import Carousel from "../../components/Carousel";
import LcProgress from "../../components/LcProgress";
import { Image, Flex, Box, Text, Button, Stack, HStack, Heading, useColorModeValue, useBreakpointValue } from "@chakra-ui/react";

const Home: NextPage = () => {
  const isDark = useColorModeValue(false, true);
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <>
      <Box maxW="1540px" w="fit-content" m="0 auto" px="2em" py="3em">
        <Flex flexDirection={{ base: "column", xl: "row" }}>
          <HStack flexDirection={{ base: "column", md: "row" }} justifyContent="space-between">
            <Stack minW="400px">
              <Text color={isDark ? "gray.100 " : "gray.700"} fontWeight="bold" fontSize="5xl" lineHeight="1.2" mb=".3em">
                Leitura Conjunta{" "}
                <Text as="span" color="purple.400">
                  13° Edição
                </Text>
              </Text>
              <Text fontSize="lg" maxW={"400px"}>
                Almost anything can be represented in a tree structure Almost anything can be represen
              </Text>
              <Button size="md" fontWeight={600} maxW="20ch" color="purple.50" colorScheme="purple" bg="purple.500" mt=".3em">
                Participar da LC
              </Button>
            </Stack>
            <Image src="/static/lchero.svg" alt="hero" width={980} height={960} />
          </HStack>
          <Flex flexDirection={"column"}>
            <Heading mb={12} fontWeight="light" fontSize="2rem">
              <Text as="span" fontWeight="bold" color="purple.500">
                Livros
              </Text>{" "}
              da Leitura Conjunta
            </Heading>
            {isDesktop && (
              <Box bg="white" color="black" w={{ base: "100%", xl: "480px" }} h="250px" boxShadow={"md"} borderRadius="21px">
                <Carousel
                  // Vai ficar aqui só de placeholder
                  books={[
                    "https://images-na.ssl-images-amazon.com/images/I/91yEPgRcELL.jpg",
                    "https://images-na.ssl-images-amazon.com/images/I/61Sor5r12SL.jpg",
                    "https://images-na.ssl-images-amazon.com/images/I/91JszmktCJS.jpg",
                    "https://images-na.ssl-images-amazon.com/images/I/418Dq8vTZ1L.jpg",
                    "https://images-na.ssl-images-amazon.com/images/I/71RqrTxQmpL.jpg",
                    "https://images-na.ssl-images-amazon.com/images/I/51B4MuHHjZL.jpg",
                    "https://images-na.ssl-images-amazon.com/images/I/9157mzaUZ1L.jpg",
                    "https://images-na.ssl-images-amazon.com/images/I/71PLoOGQB3L.jpg",
                    "https://images-na.ssl-images-amazon.com/images/I/71Hr1-by3UL.jpg",
                  ]}
                />
              </Box>
            )}
          </Flex>
          <LcProgress value={50} />
        </Flex>
      </Box>
    </>
  );
};

export default Home;
