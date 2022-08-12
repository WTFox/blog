import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Code,
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
} from "@chakra-ui/react"
import NextLink, { LinkProps as NextLinkProps } from "next/link"

import Image from "next/image"
import Mermaid from "./Mermaid"
import SiteConfig from "@/lib/SiteConfig"

const P = ({ children, ...delegated }: TextProps) => {
  return (
    <Text as="p" py={4} fontSize={"xl"} lineHeight="tall" {...delegated}>
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
    <Box as="li" pb={1} fontSize={"xl"} {...delegated}>
      {children}
    </Box>
  )
}

const BlockQuote = (props: BoxProps) => {
  const bgColor = useColorModeValue("purple.100", "pink.800")

  return (
    <Box
      mt={4}
      w="full"
      bg={bgColor}
      variant="left-accent"
      status="info"
      css={{
        "> *:first-of-type": {
          marginTop: 0,
          marginLeft: 8,
        },
      }}
      {...props}
    />
  )
}

const HR = () => {
  const borderColor = useColorModeValue("gray.200", "gray.600")

  return <Divider borderColor={borderColor} my={4} w="full" />
}

const H1 = ({ children, ...delegated }: HeadingProps) => {
  return (
    <Heading as="h1" size="3xl" py={5} {...delegated}>
      {children}
    </Heading>
  )
}

const H2 = ({ children, ...delegated }: HeadingProps) => {
  return (
    <Heading py={4} as="h2" fontWeight="bold" size="2xl" {...delegated}>
      {children}
    </Heading>
  )
}

const H3 = ({ children, ...delegated }: HeadingProps) => {
  return (
    <Heading py={4} as="h3" size="xl" fontWeight="bold" {...delegated}>
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
    >
      <ChakraLink as="a" color={color} {...props} />
    </NextLink>
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

const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  const trimmed = code.trim()

  return (
    <Box className="Code" fontSize={"md"}>
      <pre>
        <code className={`language-${language}`}>{trimmed}</code>
      </pre>
    </Box>
  )
}

export const components = (slug) => ({
  img: ({ src, alt }) => {
    return <Image alt={alt} src={require(`../_posts/${slug}/${src}`).default} />
  },
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H3,
  h5: H3,
  h6: H3,
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
  code: Code,
  a: Link,
  Link,
  ButtonLink,
  Button,
  Stack,
  Mermaid,
  CodeBlock,
})
