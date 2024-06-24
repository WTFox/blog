import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Center,
  Divider,
  Heading,
  HeadingProps,
  Kbd,
  Link as ChakraLink,
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
import PhotoGrid from "./PhotoGrid"
import {
  CodeBlock,
  atomOneLight as lightTheme,
  nord as darkTheme,
} from "react-code-blocks"
import YouTubeEmbed from "./YouTubeEmbed"

const P = ({ children, ...delegated }: TextProps) => {
  return (
    <Text as="p" py={4} fontSize={"lg"} lineHeight="tall" {...delegated}>
      {children}
    </Text>
  )
}

const Ul = ({ children, ...delegated }: BoxProps) => {
  return (
    <Box as="ul" pt={2} pl={4} ml={2} {...delegated}>
      {children}
    </Box>
  )
}

const Ol = ({ children, ...delegated }: BoxProps) => {
  return (
    <Box as="ol" pt={2} pl={4} ml={2} {...delegated}>
      {children}
    </Box>
  )
}

const Li = ({ children, ...delegated }: BoxProps) => {
  return (
    <Box as="li" pb={1} fontSize={"lg"} {...delegated}>
      {children}
    </Box>
  )
}

const BlockQuote = (props) => {
  return (
    <Box
      borderLeft={"10px solid #ccc"}
      m={"1.5em 10px"}
      p={"0.5em 10px"}
      fontSize={"larger"}
    >
      <blockquote color="#ccc" {...props}></blockquote>
    </Box>
  )
}

const HR = () => {
  const borderColor = useColorModeValue("gray.200", "gray.600")
  return <Divider borderColor={borderColor} my={4} w="full" />
}

const H1 = ({ children, ...delegated }: HeadingProps) => {
  return (
    <Heading as="h1" size="2xl" py={5} {...delegated}>
      {children}
    </Heading>
  )
}

const H2 = ({ children, ...delegated }: HeadingProps) => {
  return (
    <Heading py={5} as="h2" fontWeight="bold" size="xl" {...delegated}>
      {children}
    </Heading>
  )
}

const H3 = ({ children, ...delegated }: HeadingProps) => {
  return (
    <Heading py={5} as="h3" size="lg" fontWeight="bold" {...delegated}>
      {children}
    </Heading>
  )
}

const H4 = ({ children, ...delegated }: HeadingProps) => {
  return (
    <Heading py={5} as="h4" size="lg" fontWeight="bold" {...delegated}>
      {children}
    </Heading>
  )
}

const H5 = ({ children, ...delegated }: HeadingProps) => {
  return (
    <Heading py={5} as="h5" size="lg" fontWeight="bold" {...delegated}>
      {children}
    </Heading>
  )
}

const Link = ({
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
  return (
    <NextLink
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref ?? true}
      prefetch={prefetch}
      locale={locale}
    />
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
    <NextLink
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref ?? true}
      prefetch={prefetch}
      locale={locale}
    >
      <Button as="a" {...props} />
    </NextLink>
  )
}

const Table = (props: BoxProps) => (
  <Box as="table" textAlign="left" mt="32px" width="full" {...props} />
)

const Th = (props: BoxProps) => {
  const bg = useColorModeValue("gray.50", "whiteAlpha.100")

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

const CustomCodeBlock = (props) => {
  const { className, copy, children } = props
  const { colorMode } = useColorMode()

  if (!className) {
    return <kbd>{children}</kbd>
  }

  let language =
    className.match(/language-(\w.*?)\b/) != null
      ? className.match(/language-(\w.*?)\b/)[0]
      : "javascript"

  language = language.replace("language-", "")

  return (
    <Box py={3}>
      <CodeBlock
        text={children}
        language={language}
        theme={colorMode === "dark" ? darkTheme : lightTheme}
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
      <Center>
        <Image
          loading="eager"
          alt={alt}
          src={require(`../../content/${slug}/${src}`).default}
        />
      </Center>
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
  kbd: Kbd,
  a: Link,
  Link,
  ButtonLink,
  Button,
  Stack,
  Mermaid,
  code: (props) => <CustomCodeBlock {...props} />,
  YouTubeEmbed,
})
