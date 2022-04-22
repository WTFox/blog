import { Text } from "@chakra-ui/react"

const Rainbowify = ({ children }) => {
  return (
    <Text
      display={"inline"}
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      bgClip="text"
    >
      {children}
    </Text>
  )
}

export default Rainbowify
