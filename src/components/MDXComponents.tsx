import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Code,
  Divider,
  Heading,
  HeadingProps,
  IconButton,
  Link,
  LinkProps,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  TextProps,
  Tooltip,
  useColorModeValue,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react"
import { CloseIcon, CopyIcon, CheckIcon, LinkIcon } from "@chakra-ui/icons"
import { useState, useEffect } from "react"
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

const LinkedHeading = ({ as, size, mt, mb, fontWeight, children, ...delegated }: HeadingProps & { as: any }) => {
  const accentColor = useColorModeValue(SiteConfig.lightAccent, SiteConfig.darkAccent)
  const text = typeof children === "string" ? children : ""
  const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")

  return (
    <Heading
      as={as}
      size={size}
      mt={mt}
      mb={mb}
      fontWeight={fontWeight}
      id={id}
      role="group"
      position="relative"
      {...delegated}
    >
      {children}
      <Link
        href={`#${id}`}
        aria-label={`Link to ${text}`}
        ml={2}
        color={accentColor}
        opacity={0}
        _groupHover={{ opacity: 1 }}
        transition="opacity 0.15s"
        fontSize="0.8em"
      >
        #
      </Link>
    </Heading>
  )
}

const H1 = ({ children, ...delegated }: HeadingProps) => (
  <LinkedHeading as="h1" size="xl" mt={8} mb={2} fontWeight="bold" {...delegated}>{children}</LinkedHeading>
)

const H2 = ({ children, ...delegated }: HeadingProps) => (
  <LinkedHeading as="h2" size="lg" mt={7} mb={2} fontWeight="bold" {...delegated}>{children}</LinkedHeading>
)

const H3 = ({ children, ...delegated }: HeadingProps) => (
  <LinkedHeading as="h3" size="md" mt={6} mb={1} fontWeight="semibold" {...delegated}>{children}</LinkedHeading>
)

const H4 = ({ children, ...delegated }: HeadingProps) => (
  <LinkedHeading as="h4" size="sm" mt={5} mb={1} fontWeight="semibold" {...delegated}>{children}</LinkedHeading>
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

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false)
  const color = useColorModeValue("blackAlpha.600", "whiteAlpha.600")
  const hoverColor = useColorModeValue("blackAlpha.800", "whiteAlpha.900")
  const hoverBg = useColorModeValue("blackAlpha.100", "whiteAlpha.200")

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <Tooltip label={copied ? "Copied!" : "Copy"} placement="left" hasArrow>
      <IconButton
        aria-label="Copy code"
        icon={copied ? <CheckIcon /> : <CopyIcon />}
        size="xs"
        variant="ghost"
        color={copied ? "green.400" : color}
        _hover={{ color: copied ? "green.400" : hoverColor, bg: hoverBg }}
        position="absolute"
        top={2}
        right={2}
        onClick={handleCopy}
      />
    </Tooltip>
  )
}

const CustomCodeBlock = (props) => {
  const { className, copy, children } = props
  const { colorMode } = useColorMode()
  const inlineCodeBg = useColorModeValue(t.light.inlineCodeBg, t.dark.inlineCodeBg)
  const inlineCodeColor = useColorModeValue(t.light.inlineCodeColor, t.dark.inlineCodeColor)
  const titleBg = useColorModeValue(t.light.surface, t.dark.surface)
  const titleColor = useColorModeValue(t.light.inlineCodeColor, t.dark.mutedText)
  const titleBorder = useColorModeValue(t.light.border, t.dark.border)

  if (!className) {
    return (
      <Code px={1.5} py={0.5} borderRadius="sm" fontSize="0.875em"
        bg={inlineCodeBg} color={inlineCodeColor} fontFamily="mono">
        {children}
      </Code>
    )
  }

  const classMatch = className.match(/language-(\S+)/)
  let language = classMatch ? classMatch[1] : "javascript"

  // Extract title from language string: language-python:title=utils.py
  let title = null
  if (language.includes(":title=")) {
    const parts = language.split(":title=")
    language = parts[0]
    title = parts[1]
  }

  if (language === "mermaid") {
    return <Mermaid>{children}</Mermaid>
  }

  return (
    <Box my={5} borderRadius="md" overflow="hidden" position="relative" role="group">
      {title && (
        <Box
          px={4}
          py={1.5}
          bg={titleBg}
          borderBottomWidth="1px"
          borderColor={titleBorder}
          fontFamily="mono"
          fontSize="xs"
          color={titleColor}
        >
          {title}
        </Box>
      )}
      <Box
        opacity={0}
        _groupHover={{ opacity: 1 }}
        transition="opacity 0.15s ease"
      >
        <CopyButton text={children} />
      </Box>
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

const ClickableImage = ({ src, alt }: { src: string; alt?: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [isOpen, onClose])

  return (
    <>
      <Box
        as="span"
        display="block"
        cursor="zoom-in"
        onClick={onOpen}
        transition="opacity 0.15s ease"
        _hover={{ opacity: 0.9 }}
      >
        <Image loading="eager" src={src} alt={alt ?? ""} />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="full" isCentered>
        <ModalOverlay bg="blackAlpha.900" />
        <ModalContent
          bg="transparent"
          boxShadow="none"
          maxW="100vw"
          maxH="100vh"
          m={0}
          onClick={onClose}
        >
          <ModalBody
            display="flex"
            alignItems="center"
            justifyContent="center"
            p={0}
            position="relative"
          >
            <IconButton
              aria-label="Close"
              icon={<CloseIcon />}
              variant="ghost"
              color="whiteAlpha.800"
              _hover={{ color: "white", bg: "whiteAlpha.200" }}
              size="sm"
              position="fixed"
              top={4}
              right={4}
              onClick={onClose}
            />
            <Box
              maxW="90vw"
              maxH="90vh"
              onClick={(e) => e.stopPropagation()}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src={src}
                alt={alt ?? ""}
                loading="eager"
                style={{ maxHeight: "90vh", width: "auto", objectFit: "contain" }}
              />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export const components = (slug) => ({
  PhotoGrid: ({ images }) => <PhotoGrid slug={slug} images={images} />,
  img: ({ src, alt }) => (
    <ClickableImage src={getPostImage(slug, src)} alt={alt} />
  ),
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
