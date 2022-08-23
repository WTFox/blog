import SiteConfig from "@/lib/SiteConfig"
import { Text } from "@chakra-ui/react"

const Rainbowify = ({ children }) => {
  return (
    <Text display={"inline"} fontSize={"2xl"} bgGradient={SiteConfig.gradient} bgClip="text">
      {children}
    </Text>
  )
}

export default Rainbowify
