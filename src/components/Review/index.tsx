import { Flex, Text, Badge, Avatar, Box, Spacer, useColorMode } from "@chakra-ui/react";
import type ReviewType from "../../models/Review";
import Link from "next/link";
interface ReviewProps extends ReviewType {
  isNew: boolean;
  profilePicture: string | null;
}

const Review = ({ book_id, author, title, date, review, rating, isNew, author_id, profilePicture }: ReviewProps) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      maxW="70ch"
      direction="row"
      boxShadow="lg"
      rounded="md"
      color={colorMode !== "dark" ? "gray.800" : "pink.50"}
      bg={colorMode !== "dark" ? "white" : "gray.700"}
      width="100%"
      my={5}
      p="1rem"
      borderRadius="0.5rem"
    >
      {profilePicture ? <Avatar name={author} src={profilePicture} /> : <Avatar name={author} />}
      <Box ml={5}>
        <Flex>
          <Text lineHeight="20px" fontSize="xl" fontWeight="bold">
            <Link href={`https://skoob.com.br/usuario/${author_id}`} passHref>
              <a target="_blank">{author}</a>
            </Link>
            {isNew && (
              <Badge userSelect="none" fontSize="0.7em" mb="1" borderRadius="md" color="pink.50" bg={colorMode !== "dark" ? "pink.400" : "pink.600"} ml="0.5rem">
                Novo!
              </Badge>
            )}
            <Text fontSize="sm" fontWeight="thin">
              {date}
            </Text>
          </Text>
        </Flex>
        <Flex direction="column">
          <Text fontSize="md" fontWeight="bold" lineHeight="1.5">
            {title}
          </Text>
          <Box>
            <Text fontSize="sm">{review}</Text>
          </Box>
        </Flex>
      </Box>
      <Spacer />
      <Flex userSelect="none" ml={4} alignSelf="flex-end">
        <Flex alignItems="center" justifyContent="center" h="3em" w="3em" borderRadius="3xl" bg={colorMode !== "dark" ? "pink.400" : "pink.600"}>
          <Text color="pink.50" fontSize="xl" fontWeight="bold">
            {rating}/5
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Review;
