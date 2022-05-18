import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BookCover from "../BookCover";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const Carousel = ({ books }: { books: string[] }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    if (page + newDirection === books.length) {
      setPage([0, 1]);
      return;
    }
    setPage([page + newDirection, newDirection]);
  };

  setTimeout(() => {
    paginate(1);
  }, 4000);

  return (
    <Flex overflow="hidden" direction={"column"}>
      <Box style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        <Box as="span" m={4} p={0}>
          <AnimatePresence exitBeforeEnter initial={false} custom={direction}>
            {
              <motion.div
                key={books[page]}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", duration: 0.4 },
                  opacity: { duration: 0.1 },
                }}
              >
                <BookCover bookURL={books[page]} />
              </motion.div>
            }
          </AnimatePresence>
        </Box>
      </Box>
    </Flex>
  );
};

export default Carousel;
