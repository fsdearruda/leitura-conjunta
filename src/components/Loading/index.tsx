import { Flex, Text, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Flex flexDirection="row" justifyContent="center" alignItems="center" direction="column">
      <Text fontSize="3xl">Carregando</Text>
      <Spinner ml={5} size="md" />
    </Flex>
  );
};

export default Loading;
