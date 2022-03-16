import { AnimatePresence, motion } from "framer-motion";
import {
  Box,
  IconButton,
  Link,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { SunIcon, MoonIcon, TriangleUpIcon } from "@chakra-ui/icons";

const ScrollToTop = () => {
  return (
    <Link href="/#top">
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

const DarkModeSwitch = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{
          display: "inline-block",
          position: "fixed",
          top: "1rem",
          right: "1rem",
        }}
        key={useColorModeValue("light", "dark")}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle theme"
          bgColor={useColorModeValue("#7928CA", "#FF0080")}
          color="white"
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  );
};

export { DarkModeSwitch, ScrollToTop };