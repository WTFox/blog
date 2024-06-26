import { AnimatePresence, motion } from "framer-motion"
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import SiteConfig from "@/lib/SiteConfig"

const DarkModeSwitch = ({ motionProps } = null) => {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence mode={"wait"} initial={false}>
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
        {...motionProps}
      >
        <IconButton
          aria-label="Toggle theme"
          bgColor={useColorModeValue(
            SiteConfig.lightAccent,
            SiteConfig.darkAccent
          )}
          color="white"
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default DarkModeSwitch
