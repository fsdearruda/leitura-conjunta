import { Flex, Box, Text, Center, Progress, Divider } from "@chakra-ui/react";
import { IoBookOutline } from "react-icons/io5";
import { AiOutlineCalendar } from "react-icons/ai";

const LcProgress = ({ value }: { value: number }) => {
  return (
    <Flex align="center" mt={8} bgColor="purple.400" w="100%" h="220px" borderRadius="21px" px={"3em"}>
      <Box d="flex" alignItems="center" justifyContent="center" flexDirection="column" px="2.8em" py="0.725em" borderRadius="25%" boxShadow="lg" bgColor="white" mr={"4em"}>
        <Text fontSize="2rem" color="gray.500">
          Ter
        </Text>
        <Text fontWeight={"bold"} fontSize="2.8rem" color="#344054">
          27
        </Text>
      </Box>

      <Flex color="black" flexDirection="column" minW="320px">
        <Flex justifyContent="space-between" mb="1em">
          <Text fontSize="1.5rem" color="white" fontWeight="400">
            Progresso
          </Text>
          <Box bgColor="white" py="0.375em" px="1em" borderRadius="11px" boxShadow="lg">
            <Text fontWeight="600" fontSize="1.2rem">
              {value.toString()}%
            </Text>
          </Box>
        </Flex>
        <Progress mt={3} value={value} size="md" height=".4rem" bgColor="white" colorScheme="green" />
      </Flex>
      <Center height="130px" mx="4em">
        <Divider orientation="vertical" bgColor="white" />
      </Center>

      <Flex flexDirection="column" justifyContent="space-between" minW="320px">
        <Flex flexDirection="column" color="white">
          <Text fontSize="1.5rem" color="white" fontWeight="400" mb="1em">
            Páginas Lidas
          </Text>
          <Flex alignItems="center">
            <IoBookOutline size="32px" />
            <Text ml="10px" fontWeight="600" fontSize="1.4rem">
              79/256
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex flexDirection="column" justifyContent="space-between" minW="320px">
        <Flex flexDirection="column" color="white">
          <Text fontSize="1.5rem" color="white" fontWeight="400" mb="1em">
            Semana
          </Text>
          <Flex alignItems="center">
            <AiOutlineCalendar size="32px" />
            <Text ml="10px" fontWeight="600" fontSize="1.4rem">
              3/12
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LcProgress;
