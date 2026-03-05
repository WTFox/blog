import Image from "next/image"
import {
  Box,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  IconButton,
  HStack,
  Text,
  Link,
} from "@chakra-ui/react"
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { useState, useEffect, useCallback } from "react"
import { getPostImage } from "@/lib/postImages"

interface ParsedImage {
  filename: string
  caption?: string
}

/**
 * Parses "file.jpg | caption, file2.jpg" into structured entries.
 * Captions can contain markdown-style links: [text](url)
 */
function parseImages(images: string): ParsedImage[] {
  return images.split(",").map((entry) => {
    const pipeIndex = entry.indexOf("|")
    if (pipeIndex === -1) {
      return { filename: entry.trim() }
    }
    return {
      filename: entry.slice(0, pipeIndex).trim(),
      caption: entry.slice(pipeIndex + 1).trim() || undefined,
    }
  }).filter((e) => e.filename)
}

/** Renders a caption string, turning [text](url) into links. */
const Caption = ({ text }: { text: string }) => {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/)
  return (
    <Text
      color="whiteAlpha.800"
      fontSize="sm"
      textAlign="center"
      mt={3}
      px={4}
    >
      {parts.map((part, i) => {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (match) {
          return (
            <Link
              key={i}
              href={match[2]}
              color="whiteAlpha.900"
              textDecoration="underline"
              isExternal
            >
              {match[1]}
            </Link>
          )
        }
        return <span key={i}>{part}</span>
      })}
    </Text>
  )
}

const GridCaption = ({ text }: { text: string }) => {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/)
  return (
    <Text fontSize="xs" color="gray.500" mt={1} noOfLines={2}>
      {parts.map((part, i) => {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (match) {
          return (
            <Link
              key={i}
              href={match[2]}
              textDecoration="underline"
              isExternal
              onClick={(e) => e.stopPropagation()}
            >
              {match[1]}
            </Link>
          )
        }
        return <span key={i}>{part}</span>
      })}
    </Text>
  )
}

const PhotoGrid = ({ slug, images }: { slug: string; images: string }) => {
  const imageList = parseImages(images)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [activeIndex, setActiveIndex] = useState(0)

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % imageList.length)
  }, [imageList.length])

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + imageList.length) % imageList.length)
  }, [imageList.length])

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext()
      else if (e.key === "ArrowLeft") goPrev()
      else if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [isOpen, goNext, goPrev, onClose])

  const [touchStart, setTouchStart] = useState<number | null>(null)

  const openAt = (index: number) => {
    setActiveIndex(index)
    onOpen()
  }

  const active = imageList[activeIndex]
  const activeSrc = active ? getPostImage(slug, active.filename) : null

  return (
    <>
      <Box py={5}>
        <SimpleGrid minChildWidth={"150px"} spacing={5}>
          {imageList.map((entry, index) => {
            const alt = entry.caption || entry.filename.replace(/\.[^.]+$/, "")
            const key = `${entry.filename}-${index}`
            const srcLink = getPostImage(slug, entry.filename)

            return (
              <Box
                key={key}
                cursor="pointer"
                onClick={() => openAt(index)}
              >
                <Box
                  borderRadius="md"
                  overflow="hidden"
                  transition="transform 0.15s ease, box-shadow 0.15s ease"
                  _hover={{ transform: "scale(1.02)", boxShadow: "lg" }}
                >
                  <Image loading="eager" src={srcLink} alt={alt} />
                </Box>
                {entry.caption && <GridCaption text={entry.caption} />}
              </Box>
            )
          })}
        </SimpleGrid>
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
            flexDirection="column"
            p={0}
            position="relative"
            onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchStart === null) return
              const diff = e.changedTouches[0].clientX - touchStart
              if (Math.abs(diff) > 50) {
                diff < 0 ? goNext() : goPrev()
              }
              setTouchStart(null)
            }}
          >
            {/* Top bar */}
            <HStack
              position="fixed"
              top={4}
              right={4}
              left={4}
              justifyContent="space-between"
              zIndex={10}
              pointerEvents="none"
            >
              {imageList.length > 1 ? (
                <Text color="whiteAlpha.700" fontSize="sm" pointerEvents="none">
                  {activeIndex + 1} / {imageList.length}
                </Text>
              ) : (
                <Box />
              )}
              <IconButton
                aria-label="Close"
                icon={<CloseIcon />}
                variant="ghost"
                color="whiteAlpha.800"
                _hover={{ color: "white", bg: "whiteAlpha.200" }}
                size="sm"
                pointerEvents="auto"
                onClick={onClose}
              />
            </HStack>

            {/* Navigation arrows */}
            {imageList.length > 1 && (
              <>
                <IconButton
                  aria-label="Previous image"
                  icon={<ChevronLeftIcon boxSize={8} />}
                  variant="ghost"
                  color="whiteAlpha.800"
                  _hover={{ color: "white", bg: "whiteAlpha.200" }}
                  position="fixed"
                  left={2}
                  top="50%"
                  transform="translateY(-50%)"
                  size="lg"
                  borderRadius="full"
                  onClick={(e) => { e.stopPropagation(); goPrev() }}
                />
                <IconButton
                  aria-label="Next image"
                  icon={<ChevronRightIcon boxSize={8} />}
                  variant="ghost"
                  color="whiteAlpha.800"
                  _hover={{ color: "white", bg: "whiteAlpha.200" }}
                  position="fixed"
                  right={2}
                  top="50%"
                  transform="translateY(-50%)"
                  size="lg"
                  borderRadius="full"
                  onClick={(e) => { e.stopPropagation(); goNext() }}
                />
              </>
            )}

            {/* Image + caption */}
            {activeSrc && (
              <Box
                maxW="90vw"
                maxH="85vh"
                position="relative"
                onClick={(e) => e.stopPropagation()}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image
                  src={activeSrc}
                  alt={active.caption || active.filename.replace(/\.[^.]+$/, "")}
                  loading="eager"
                  style={{ maxHeight: "80vh", width: "auto", objectFit: "contain" }}
                />
                {active.caption && <Caption text={active.caption} />}
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default PhotoGrid
