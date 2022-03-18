import { Box, IconButton, Link, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { TriangleUpIcon } from "@chakra-ui/icons";

const SCROLLBREAKPOINT = 500;

const ScrollToTopButton = () => {
  return (
    <Link href="#top">
      <Box
        display="inline-block"
        position="fixed"
        bottom="1rem"
        right="1rem"
        key={useColorModeValue("light", "dark")}
      >
        <IconButton
          aria-label="Scroll to top"
          bgColor={useColorModeValue("#7928CA", "#FF0080")}
          color="white"
          icon={<TriangleUpIcon />}
        ></IconButton>
      </Box>
    </Link>
  );
};

const ScrollToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

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

  return scrollPosition > SCROLLBREAKPOINT && <ScrollToTopButton />;
};

export default ScrollToTop;
