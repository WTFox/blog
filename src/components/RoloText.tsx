import { useEffect, useState } from "react"
import { Text } from "@chakra-ui/react"

const RoloText = ({ children }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % children.length)
    }, 2500)
  })

  return <Text as={"i"}>{children[index]}</Text>
}

export default RoloText
