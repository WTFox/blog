import SiteConfig from "@/lib/config"
import { Text } from "@chakra-ui/react"

const Rainbowify = ({ children }) => {
  return (
    <Text display={"inline"} bgGradient={SiteConfig.gradient} bgClip="text">
      {children}
    </Text>
  )
}

export default Rainbowify
