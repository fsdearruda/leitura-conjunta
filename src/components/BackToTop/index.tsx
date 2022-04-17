import { useState, useEffect } from "react";
import { FiArrowUpCircle } from "react-icons/fi";
import { Box, IconButton } from "@chakra-ui/react";

const BackToTop = () => {
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
          <IconButton bg="gray.900" opacity=".8" size="lg" icon={<FiArrowUpCircle />} aria-label="back to top button" />
        </Box>
      )}
    </Box>
  );
};

export default BackToTop;
