import type { NextPage } from "next";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

type ItemProps = {
  text?: string;
};

const NewHighlight: NextPage<ItemProps> = ({ text }) => {
  return (
    <Flex>
      <Text
        textTransform={"uppercase"}
        color={"blue.400"}
        fontWeight={600}
        fontSize={"sm"}
        bg={useColorModeValue("blue.200", "blue.900")}
        p={2}
        alignSelf={"flex-start"}
        rounded={"md"}
      >
        {text ? text : "novo!"}
      </Text>
    </Flex>
  );
};

export default NewHighlight;
