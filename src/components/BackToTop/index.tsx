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
      {scrollPosition > 500 && (
        <Box onClick={backWeGo} position="fixed" bottom="20px" right={["16px", "84px"]} zIndex={1}>
          <IconButton size="lg" icon={<FiArrowUpCircle />} aria-label="back to top button" />
        </Box>
      )}
    </Box>
  );
};

export default BackToTop;
