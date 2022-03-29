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
  return (
    <Flex direction="row" boxShadow="lg" rounded="md" bg={"white"} color="black" width="100%" my={5} p="1rem" mb="1rem" border="1px solid #e2e8f0" borderRadius="0.5rem">
      <Avatar />
      <Box ml={5}>
        <Flex>
          <Text fontSize="xl" fontWeight="bold">
            {name}
            <Text mx={2} as="span">
              •
            </Text>
            <Text as="span" fontSize="sm" fontWeight="thin">
              {date}
            </Text>
            {isNew && (
              <Badge fontSize="0.7em" mb="1" borderRadius="md" color="pink.50" bg="pink.500" ml="0.5rem">
                Novo!
              </Badge>
            )}
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
      <Box>
        <Flex alignItems="center" justifyContent="center" h="3em" w="3em" borderRadius="3xl" bg="pink.500">
          <Text color="pink.50" fontSize="xl" fontWeight="bold">
            {rating}/5
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Review;
