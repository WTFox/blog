import path from "path"
import Image from "next/image"
import { Box, SimpleGrid, Link as ChakraLink } from "@chakra-ui/react"
import Link from "next/link"

const PhotoGrid = ({ slug, images }) => {
  return (
    <Box py={5}>
      <SimpleGrid minChildWidth={"150px"} spacing={5}>
        {images.map((image: string, index: number) => {
          const alt = path.basename(image, path.extname(image))
          const key = `${alt}-${index}`
          const srcLink = require(`../../content/${slug}/${image}`).default

          return (
            <Link key={key} href={srcLink.src} passHref>
              <ChakraLink key={key} isExternal zIndex={"-1"}>
                <Image
                  key={key}
                  loading="eager"
                  src={srcLink}
                  alt={alt}
                  layout={"responsive"}
                />
              </ChakraLink>
            </Link>
          )
        })}
      </SimpleGrid>
    </Box>
  )
}

export default PhotoGrid
