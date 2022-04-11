import React, { ReactNode } from "react";
import Link from "next/link";
import { IconButton, useColorMode, Box, CloseButton, Flex, Icon, useColorModeValue, Drawer, DrawerContent, Text, useDisclosure, BoxProps, FlexProps } from "@chakra-ui/react";
import { FiHome, FiMenu, FiSun, FiMoon, FiStar, FiBarChart2 } from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";
import { BsTelegram } from "react-icons/bs";
import { route } from "next/dist/server/router";

interface LinkItemProps {
  target?: string;
  name: string;
  icon: IconType;
  route: string;
}
const LinkItems: Array<LinkItemProps> = [
  /* { name: "Início", icon: FiHome, route: "/" }, */
  { name: "Ranking", icon: FiBarChart2, route: "/" },
  /* { name: "Resenhas", icon: FiStar, route: "/reviews" }, */
  { name: "Telegram", icon: BsTelegram, route: "https://t.me/lcmsfisher1", target: "_blank" },
];

export default function SimpleSidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent onClose={() => onClose} display={{ base: "none", md: "block" }} />
      <Drawer autoFocus={false} isOpen={isOpen} placement="left" onClose={onClose} returnFocusOnClose={false} onOverlayClick={onClose} size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const ColorModeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      onClick={toggleColorMode}
      align="center"
      p="4"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      _hover={{
        bg: useColorModeValue("pink.400", "pink.600"),
        color: "white",
      }}
      transitionProperty="background-color, color"
      transitionDuration="150ms"
    >
      <Icon
        mr="4"
        fontSize="16"
        _groupHover={{
          color: "white",
        }}
        as={colorMode === "dark" ? FiSun : FiMoon}
      />
      <Text fontSize="sm">Tema {colorMode === "dark" ? "Claro" : "Escuro"}</Text>
    </Flex>
  );
};

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex my={4} h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold">
          Leitura Conjunta
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map(link => (
        <NavItem target={link?.target} route={link.route} key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
      <ColorModeToggler />
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  target?: string;
  icon: IconType;
  children: ReactText;
  route: string;
}
const NavItem = ({ icon, children, route, target, ...rest }: NavItemProps) => {
  return (
    <Link href={route} passHref>
      <a target={target}>
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: useColorModeValue("pink.400", "pink.600"),
            color: "white",
          }}
          transitionProperty="background-color"
          transitionDuration="150ms"
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </a>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton variant="outline" onClick={onOpen} aria-label="open menu" icon={<FiMenu />} />

      <Text fontSize="2xl" ml="8" fontWeight="bold">
        Leitura Conjunta
      </Text>
    </Flex>
  );
};
