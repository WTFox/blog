import { useEffect, useState } from "react"
import { Text } from "@chakra-ui/react"

import SiteConfig from "@/lib/config"

const RoloText = ({ children }) => {
  const subtitles: typeof SiteConfig["subtitles"] = children
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % subtitles.length)
    }, 2500)
  })

  return <Text as={"i"}>{subtitles[index]}</Text>
}

export default RoloText
