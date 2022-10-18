import { useEffect, useState } from "react"

import { AnimatePresence, motion } from "framer-motion"

type Props = {
  values: string[]
  delay?: number
}

const RoloText = ({ values, delay = 3000 }: Props) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setTimeout(() => {
      setIndex((index + 1) % values.length)
    }, delay)
    return () => clearTimeout(id)
  })

  const displayText = values[index]

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
        {displayText}
      </motion.div>
    </AnimatePresence>
  )
}

export default RoloText
