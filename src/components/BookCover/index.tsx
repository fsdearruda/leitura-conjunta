import { Flex, Image } from "@chakra-ui/react";

const BookCover = ({ bookURL }: { bookURL: string }) => {
  return (
    <Flex>
      <Image borderRadius="8px" width="150px" height="210px" draggable={false} alt="Capa de livro" src={bookURL} />
    </Flex>
  );
};

export default BookCover;
