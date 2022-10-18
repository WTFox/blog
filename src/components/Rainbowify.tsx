import SiteConfig from "@/lib/SiteConfig"
import { Text } from "@chakra-ui/react"

export default ({ children }) => {
  return (
    <Text
      display={"inline"}
      fontSize={"2xl"}
      bgGradient={SiteConfig.gradient}
      bgClip="text"
      as={"span"}
    >
      {children}
    </Text>
  )
}
