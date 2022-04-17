import { motion, usePresence } from "framer-motion";
import { Text, Avatar, useColorModeValue, Flex, Box, useMediaQuery, Spacer } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Link from "next/link";

const transition = { type: "spring", stiffness: 500, damping: 50, mass: 1 };

interface ItemProps {
  user: { nome: string; id: number; skoob?: string; pages: number; foto: string };
}

const LeaderBoardItem = ({ user }: ItemProps) => {
  const isDarkMode = useColorModeValue(true, false);

  const [loaded, setLoaded] = useState(false);
  const [isPresent, safeToRemove] = usePresence();
  const { nome, skoob, pages, foto, id } = user;

  useEffect(() => {
    if (!loaded) setLoaded(true);
  }, [loaded]);

  const animations = {
    layout: true,
    initial: "out",
    animate: isPresent ? "in" : "out",
    variants: {
      in: { scaleY: 1, opacity: 1 },
      out: { scaleY: 0, opacity: 0, zIndex: -1 },
    },
    onAnimationComplete: () => !isPresent && safeToRemove(),
    transition,
  };
  const [isDesktop] = useMediaQuery("(min-width: 768px)");
  if (loaded) {
    return (
      <Link href={`https://skoob.com.br/usuario/${id}`} passHref>
        <a style={{ margin: ".8em" }} target="_blank">
          <Box
            p="1em"
            w={isDesktop ? "65vw" : "90vw"}
            minW="300px"
            borderRadius="md"
            borderLeft="0px solid"
            borderLeftColor={isDarkMode ? "white" : "gray.700"}
            background={isDarkMode ? "white" : "gray.700"}
            _hover={{
              borderLeft: "3px solid",
              borderLeftColor: isDarkMode ? "pink.400" : "pink.600",
            }}
            transition="border 150ms ease-in-out"
          >
            <motion.div style={{ display: "flex", flexDirection: "row" }} {...animations}>
              <Avatar size="sm" mr={4} name={skoob ? skoob.charAt(0) : nome.charAt(0)} src={foto} />
              <Text alignSelf="center" as="span" color={isDarkMode ? "gray.800" : "gray.300"}>
                {skoob ? skoob : nome}
              </Text>
              <Spacer />
              <Text alignSelf="center" as="span" float="right" color={isDarkMode ? "gray.800" : "gray.200"}>
                {pages}{" "}
              </Text>
              <Text ml={1} alignSelf="center" as="span" fontSize=".8rem" color={isDarkMode ? "gray.400" : "gray.400"}>
                páginas
              </Text>
            </motion.div>
          </Box>
        </a>
      </Link>
    );
  } else {
    return (
      <Flex
        height="20px"
        p="1em"
        w={isDesktop ? "65vw" : "90vw"}
        minW="300px"
        borderRadius="md"
        borderLeft="0px solid"
        borderLeftColor={isDarkMode ? "white" : "gray.700"}
        background={isDarkMode ? "white" : "gray.700"}
        _hover={{
          borderLeft: "3px solid",
          borderLeftColor: isDarkMode ? "pink.400" : "pink.600",
        }}
        transition="border 150ms ease-in-out"
      >
        <motion.div {...animations}>
          <Avatar size="sm" mr={4} name={skoob ? skoob.charAt(0) : nome.charAt(0)} src={foto} />
          <Text as="span" color={isDarkMode ? "gray.800" : "gray.300"}>
            <Text as="span" float="right" color={isDarkMode ? "gray.800" : "gray.200"}>
              <Text as="span" fontSize=".8rem" color={isDarkMode ? "gray.400" : "gray.400"}>
                páginas
              </Text>
            </Text>
          </Text>
        </motion.div>
      </Flex>
    );
  }
};

export default LeaderBoardItem;
