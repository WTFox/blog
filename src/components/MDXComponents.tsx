import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Code,
  Divider,
  Heading,
  HeadingProps,
  Link,
  LinkProps,
  Stack,
  Text,
  TextProps,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react"
import NextLink, { LinkProps as NextLinkProps } from "next/link"

import Image from "next/image"
import Mermaid from "./Mermaid"
import SiteConfig from "@/lib/SiteConfig"
import { getPostImage } from "@/lib/postImages"
import PhotoGrid from "./PhotoGrid"
import {
  CodeBlock,
  solarizedLight,
  railscast,
  atomOneLight,
  nord,
  github,
  obsidian,
  dracula,
} from "react-code-blocks"

import YouTubeEmbed from "./YouTubeEmbed"
import StravaMiles from "./StravaMiles"

const codeThemeMap = { solarizedLight, railscast, atomOneLight, nord, github, obsidian, dracula }
const lightCodeTheme = codeThemeMap[SiteConfig.theme.codeThemeLight]
const darkCodeTheme = codeThemeMap[SiteConfig.theme.codeThemeDark]
const t = SiteConfig.theme

const P = ({ children, ...delegated }: TextProps) => (
  <Text as="p" mt={0} mb={4} fontSize="md" lineHeight="1.75" {...delegated}>
    {children}
  </Text>
)

const Ul = ({ children, ...delegated }: BoxProps) => (
  <Box as="ul" mt={1} mb={4} pl={6} listStyleType="disc" {...delegated}>
    {children}
  </Box>
)

const Ol = ({ children, ...delegated }: BoxProps) => (
  <Box as="ol" mt={1} mb={4} pl={6} listStyleType="decimal" {...delegated}>
    {children}
  </Box>
)

const Li = ({ children, ...delegated }: BoxProps) => (
  <Box as="li" mb={1.5} fontSize="md" lineHeight="1.75" {...delegated}>
    {children}
  </Box>
)

const BlockQuote = (props) => {
  const borderColor = useColorModeValue(t.light.blockquoteBorder, t.dark.blockquoteBorder)
  const bg = useColorModeValue(t.light.surface, t.dark.surface)
  return (
    <Box
      borderLeftWidth="4px"
      borderLeftColor={borderColor}
      borderLeftStyle="solid"
      bg={bg}
      pl={4}
      pr={3}
      py={3}
      my={5}
      borderRadius="sm"
      fontStyle="italic"
      {...props}
    />
  )
}

const HR = () => {
  const borderColor = useColorModeValue(t.light.border, t.dark.border)
  return <Divider borderColor={borderColor} my={8} w="full" />
}

const H1 = ({ children, ...delegated }: HeadingProps) => (
  <Heading as="h1" size="xl" mt={8} mb={2} fontWeight="bold" {...delegated}>
    {children}
  </Heading>
)

const H2 = ({ children, ...delegated }: HeadingProps) => (
  <Heading as="h2" size="lg" mt={7} mb={2} fontWeight="bold" {...delegated}>
    {children}
  </Heading>
)

const H3 = ({ children, ...delegated }: HeadingProps) => (
  <Heading as="h3" size="md" mt={6} mb={1} fontWeight="semibold" {...delegated}>
    {children}
  </Heading>
)

const H4 = ({ children, ...delegated }: HeadingProps) => (
  <Heading as="h4" size="sm" mt={5} mb={1} fontWeight="semibold" {...delegated}>
    {children}
  </Heading>
)

const H5 = ({ children, ...delegated }: HeadingProps) => (
  <Heading as="h5" size="xs" mt={4} mb={1} fontWeight="medium"
    letterSpacing="wide" textTransform="uppercase" {...delegated}>{children}</Heading>
)

const MyLink = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  locale,
  ...props
}: LinkProps & NextLinkProps) => {
  const color = useColorModeValue(SiteConfig.lightAccent, SiteConfig.darkAccent)
  const isExternal = typeof href === "string" && (href.startsWith("http") || href.startsWith("//"))
  return (
    <Link
      as={NextLink}
      href={href}
      replace={replace}
      color={color}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref ?? true}
      prefetch={prefetch}
      locale={locale}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {props.children}
    </Link>
  )
}

const ButtonLink = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  locale,
  ...props
}: ButtonProps & NextLinkProps) => {
  return (
    <MyLink
      href={href as string}
      as={NextLink}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref ?? true}
      prefetch={prefetch}
      locale={locale}
    >
      <Button as="a" {...props} />
    </MyLink>
  )
}

const Table = (props: BoxProps) => (
  <Box as="table" textAlign="left" mt="32px" width="full" {...props} />
)

const Th = (props: BoxProps) => {
  const bg = useColorModeValue(t.light.surface, t.dark.surface)

  return (
    <Box as="th" bg={bg} fontWeight="semibold" p={2} fontSize="sm" {...props} />
  )
}

const Td = (props: BoxProps) => (
  <Box
    as="td"
    p={2}
    borderTopWidth="1px"
    borderColor="inherit"
    fontSize="sm"
    whiteSpace="normal"
    {...props}
  />
)

const CustomKbd = ({ children }) => {
  const bg = useColorModeValue(t.light.inlineCodeBg, t.dark.inlineCodeBg)
  const color = useColorModeValue(t.light.inlineCodeColor, t.dark.inlineCodeColor)
  const borderColor = useColorModeValue(t.light.kbdBorder, t.dark.kbdBorder)

  return (
    <Box
      as="kbd"
      display="inline-block"
      px={1.5}
      py={0.5}
      fontSize="0.8em"
      fontFamily="mono"
      bg={bg}
      color={color}
      borderWidth="1px"
      borderColor={borderColor}
      borderBottomWidth="3px"
      borderRadius="md"
      lineHeight="normal"
    >
      {children}
    </Box>
  )
}

const CustomCodeBlock = (props) => {
  const { className, copy, children } = props
  const { colorMode } = useColorMode()
  const inlineCodeBg = useColorModeValue(t.light.inlineCodeBg, t.dark.inlineCodeBg)
  const inlineCodeColor = useColorModeValue(t.light.inlineCodeColor, t.dark.inlineCodeColor)

  if (!className) {
    return (
      <Code px={1.5} py={0.5} borderRadius="sm" fontSize="0.875em"
        bg={inlineCodeBg} color={inlineCodeColor} fontFamily="mono">
        {children}
      </Code>
    )
  }

  let language =
    className.match(/language-(\w.*?)\b/) != null
      ? className.match(/language-(\w.*?)\b/)[0]
      : "javascript"

  language = language.replace("language-", "")

  if (language === "mermaid") {
    return <Mermaid>{children}</Mermaid>
  }

  return (
    <Box my={5} borderRadius="md" overflow="hidden">
      <CodeBlock
        text={children}
        language={language}
        theme={colorMode === "dark" ? darkCodeTheme : lightCodeTheme}
        showLineNumbers={false}
        wrapLines
      />
    </Box>
  )
}

export const components = (slug) => ({
  PhotoGrid: ({ images }) => <PhotoGrid slug={slug} images={images} />,
  img: ({ src, alt }) => {
    return (
      <Image
        loading="eager"
        alt={alt}
        src={getPostImage(slug, src)}
      />
    )
  },
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H5,
  p: P,
  ul: Ul,
  ol: Ol,
  li: Li,
  blockquote: BlockQuote,
  hr: HR,
  table: Table,
  th: Th,
  td: Td,
  kbd: CustomKbd,
  a: MyLink,
  Link: MyLink,
  ButtonLink,
  Button,
  Stack,
  Mermaid,
  code: (props) => <CustomCodeBlock {...props} />,
  YouTubeEmbed,
  StravaMiles: StravaMiles,
})
