import { useState, useEffect } from "react";
import { FiArrowUpCircle } from "react-icons/fi";
import { Box, IconButton, useColorModeValue } from "@chakra-ui/react";

const BackToTop = () => {
  const isDarkMode = useColorModeValue(true, false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const backWeGo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box>
      {scrollPosition > 200 && (
        <Box onClick={backWeGo} position="fixed" bottom="65px" right={["40px", "60px"]} zIndex={1}>
          <IconButton _hover={{bg: "pink.500", opacity: 1 }} _focus={{bg: "pink.500", opacity: 1 }} bg="pink.500" color="white" opacity=".8" size="lg" icon={<FiArrowUpCircle />} aria-label="back to top button" />
        </Box>
      )}
    </Box>
  );
};

export default BackToTop;
