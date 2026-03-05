import Image from "next/image"
import { Box, SimpleGrid, Link as ChakraLink } from "@chakra-ui/react"
import { getPostImage } from "@/lib/postImages"

const PhotoGrid = ({ slug, images }) => {
  return (
    <Box py={5}>
      <SimpleGrid minChildWidth={"150px"} spacing={5}>
        {images.map((image: string, index: number) => {
          const alt = image.replace(/\.[^.]+$/, "")
          const key = `${alt}-${index}`
          const srcLink = getPostImage(slug, image)

          return (
            <ChakraLink key={key} href={srcLink.src} isExternal>
              <Image key={key} loading="eager" src={srcLink} alt={alt} />
            </ChakraLink>
          )
        })}
      </SimpleGrid>
    </Box>
  )
}

export default PhotoGrid
