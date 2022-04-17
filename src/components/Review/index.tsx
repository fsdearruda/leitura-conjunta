import { Flex, Text, Badge, Avatar, Box, Spacer, useColorMode, Collapse } from "@chakra-ui/react";
import type ReviewType from "../../models/Review";
import Link from "next/link";
import { useState } from "react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
interface ReviewProps extends ReviewType {
  isNew: boolean;
  profilePicture: string | null;
}

const Review = ({ book_id, author, title, date, review, rating, isNew, author_id, profilePicture }: ReviewProps) => {
  const { colorMode } = useColorMode();
  const formattable = review.split(" ").length > 50;
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(visibility => !visibility);
  };
  return (
    <Flex
      fontFamily="Raleway"
      maxW="70ch"
      direction="row"
      boxShadow="lg"
      color={colorMode !== "dark" ? "gray.800" : "pink.50"}
      bg={colorMode !== "dark" ? "white" : "gray.700"}
      width="100%"
      my={7}
      p="1rem"
      borderRadius="20px"
      borderTopLeftRadius={0}
    >
      <Box p={1} py={0}>
        <Flex mb={2}>
          <Flex m={1} mr={3}>
            {profilePicture ? <Avatar name={author} src={profilePicture} /> : <Avatar name={author} />}
          </Flex>
          <Flex justifyContent="center" alignSelf="center">
            <Text as="span" lineHeight="24px" fontSize="xl" fontWeight="bold">
              <Link href={`https://skoob.com.br/usuario/${author_id}`} passHref>
                <a target="_blank">{author}</a>
              </Link>
              {isNew && (
                <Badge fontSize="0.7em" borderRadius="md" color="pink.50" bg={colorMode !== "dark" ? "pink.400" : "pink.600"} ml="0.5rem">
                  Novo!
                </Badge>
              )}
              <Text display="block" as="span" fontFamily="Jost" fontSize="sm" fontWeight="thin">
                {date}
              </Text>
            </Text>
          </Flex>
          <Spacer />
          <Flex ml={4} justifyContent="center" alignSelf="center">
            <Flex alignItems="center" justifyContent="center" h="3em" w="3em" borderRadius="3xl" bg={colorMode !== "dark" ? "pink.400" : "pink.600"}>
              <Text as="span" fontFamily="Jost" color="pink.50" fontSize="xl" fontWeight="bold">
                {rating}/5
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex direction="column">
          <Text as="span" fontSize="md" fontWeight="bold" lineHeight="1.5">
            {title}
          </Text>
          <Box>
            <Collapse startingHeight={70} in={visible}>
              {review
                .split(" ")
                .join(" ")
                .trim()
                .split("\n")
                .map((line, i) => {
                  return (
                    <Text as="span" key={i}>
                      {line}
                    </Text>
                  );
                })}
            </Collapse>
            {formattable && (
              <Box my={2}>
                <Text userSelect="none" as="span" fontFamily="Jost" cursor="pointer" fontWeight="semibold" color="pink.500" onClick={handleClick}>
                  Mostrar {visible ? "menos" : "mais"} {visible ? <TriangleUpIcon boxSize={3} /> : <TriangleDownIcon boxSize={3} />}
                </Text>
              </Box>
            )}
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Review;
