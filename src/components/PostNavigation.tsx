import { Box, Flex, Link as ChakraLink, Text, useColorModeValue } from "@chakra-ui/react"
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import SiteConfig from "@/lib/SiteConfig"

interface NavPost {
  link: string
  frontMatter: { title: string }
}

interface Props {
  prev: NavPost | null
  next: NavPost | null
}

const PostNavigation = ({ prev, next }: Props) => {
  const t = SiteConfig.theme
  const hoverBg = useColorModeValue(t.light.hover, t.dark.elevated)
  const borderColor = useColorModeValue(t.light.border, t.dark.border)
  const accentColor = useColorModeValue(SiteConfig.lightAccent, SiteConfig.darkAccent)

  if (!prev && !next) return null

  return (
    <Flex
      justifyContent="space-between"
      gap={4}
      py={6}
    >
      {prev ? (
        <ChakraLink
          href={prev.link}
          _hover={{ textDecoration: "none", bg: hoverBg }}
          flex={1}
          borderWidth="1px"
          borderColor={borderColor}
          borderRadius="md"
          p={3}
          transition="background-color 0.2s"
        >
          <Text fontSize="xs" color="gray.500" _dark={{ color: t.dark.mutedText }} mb={1} fontFamily="heading">
            <ChevronLeftIcon /> Previous
          </Text>
          <Text fontSize="sm" fontWeight="medium" color={accentColor} noOfLines={2} fontFamily="heading">
            {prev.frontMatter.title}
          </Text>
        </ChakraLink>
      ) : (
        <Box flex={1} />
      )}
      {next ? (
        <ChakraLink
          href={next.link}
          _hover={{ textDecoration: "none", bg: hoverBg }}
          flex={1}
          borderWidth="1px"
          borderColor={borderColor}
          borderRadius="md"
          p={3}
          textAlign="right"
          transition="background-color 0.2s"
        >
          <Text fontSize="xs" color="gray.500" _dark={{ color: t.dark.mutedText }} mb={1} fontFamily="heading">
            Next <ChevronRightIcon />
          </Text>
          <Text fontSize="sm" fontWeight="medium" color={accentColor} noOfLines={2} fontFamily="heading">
            {next.frontMatter.title}
          </Text>
        </ChakraLink>
      ) : (
        <Box flex={1} />
      )}
    </Flex>
  )
}

export default PostNavigation
