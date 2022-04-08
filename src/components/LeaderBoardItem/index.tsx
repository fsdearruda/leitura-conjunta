import { motion, usePresence } from "framer-motion";
import { Text, Avatar, useColorModeValue, Box, useMediaQuery } from "@chakra-ui/react";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import Link from "next/link";

const transition = { type: "spring", stiffness: 500, damping: 50, mass: 1 };

interface ItemProps {
  user: { nome: string; id: number; skoob?: string; pages: number; foto: string };
}

const LeaderBoardItem = ({ user }: ItemProps) => {
  const [desktopQuery] = useMediaQuery("(min-width: 1280px)");
  const [isDesktop, setDesktop] = useState(false);
  const [isPresent, safeToRemove] = usePresence();
  const { nome, skoob, pages, foto, id } = user;
  const loggedUser = useContext(UserContext);
  useEffect(() => {
    if (desktopQuery) {
      setDesktop(true);
    }
  }, [desktopQuery]);
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

  return (
    <Link href={`https://skoob.com.br/usuario/${id}`} passHref>
      <a style={{ margin: ".8em" }} target="_blank">
        <Box
          p="1em"
          w={isDesktop ? "50vw" : "90vw"}
          minW="300px"
          borderRadius="md"
          borderLeft="0px solid"
          borderLeftColor={useColorModeValue("white", "gray.700")}
          background={useColorModeValue("white", "gray.700")}
          _hover={{
            borderLeft: "3px solid",
            borderLeftColor: useColorModeValue("pink.400", "pink.600"),
          }}
          transition="border 150ms ease-in-out"
        >
          <motion.div {...animations}>
            <Avatar size="sm" mr={4} name={skoob ? skoob.charAt(0) : nome.charAt(0)} src={foto} />
            <Text as="span" color={useColorModeValue("gray.800", "gray.300")}>
              {skoob ? skoob : nome}
              <Text as="span" float="right" color={useColorModeValue("gray.800", "gray.200")}>
                {pages} <Text as="span"  fontSize=".8rem" color={useColorModeValue("gray.400", "gray.400")}>páginas</Text>
              </Text>
            </Text>
          </motion.div>
        </Box>
      </a>
    </Link>
  );
};

export default LeaderBoardItem;
