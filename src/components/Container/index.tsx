import { HStack } from "@chakra-ui/react";
import React from "react";

export default function index(children?: React.ReactNode) {
  return (
    <>
      <HStack maxW="1480px" m="0 auto" flexWrap={"wrap"}>
        {children}
      </HStack>
    </>
  );
}
