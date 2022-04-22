import { useEffect, useState } from "react"
import { Heading } from "@chakra-ui/react"

import SiteConfig from "@/lib/config"
import { AnimatePresence, motion } from "framer-motion"

const RoloText = ({ children }) => {
  const subtitles: typeof SiteConfig["subtitles"] = children
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % subtitles.length)
    }, 3000)
  })

  const displayText = subtitles[index]

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{
          display: "inline-block",
        }}
        key={displayText}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Heading size={"md"} fontWeight={"medium"}>
          {displayText}
        </Heading>
      </motion.div>
    </AnimatePresence>
  )
}

export default RoloText
