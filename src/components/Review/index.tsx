import { Flex, Text, Badge, useColorModeValue, Avatar, Box, Spacer } from "@chakra-ui/react";

interface ReviewProps {
  bookID: number;
  name: string;
  title: string;
  review: string;
  date: string;
  isNew?: boolean;
  rating: number;
}
const Review = ({ bookID, name, review, date, isNew, rating, title }: ReviewProps) => {
  const highlightColor = useColorModeValue("pink.400", "pink.600");
  return (
    <Flex
      maxW="500px"
      direction="row"
      boxShadow="lg"
      rounded="md"
      /* color={useColorModeValue("gray.900", "gray.50")} */
      color={useColorModeValue("gray.800", "pink.50")}
      bg={useColorModeValue("white", "gray.700")}
      width="100%"
      my={5}
      p="1rem"
      borderRadius="0.5rem"
    >
      <Avatar />
      <Box ml={5}>
        <Flex>
          <Text lineHeight="20px" fontSize="xl" fontWeight="bold">
            {name}
            {isNew && (
              <Badge userSelect="none" fontSize="0.7em" mb="1" borderRadius="md" color="pink.50" bg={highlightColor} ml="0.5rem">
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
        <Flex alignItems="center" justifyContent="center" h="3em" w="3em" borderRadius="3xl" bg={highlightColor}>
          <Text color="pink.50" fontSize="xl" fontWeight="bold">
            {rating}/5
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Review;
