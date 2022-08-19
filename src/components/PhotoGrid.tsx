import path from "path"
import Image from "next/image"
import { SimpleGrid, Link as ChakraLink } from "@chakra-ui/react"
import Link from "next/link"

const PhotoGrid = ({ slug, images }) => {
  return (
    <SimpleGrid minChildWidth={"150px"} spacing={1}>
      {images.map((image: string, index: number) => {
        const alt = path.basename(image, path.extname(image))
        const key = `${alt}-${index}`
        const srcLink = require(`../../content/${slug}/${image}`).default

        return (
          <Link key={key} href={srcLink.src} passHref>
            <ChakraLink key={key} isExternal>
              <Image key={key} src={srcLink} alt={alt} layout={"responsive"} />
            </ChakraLink>
          </Link>
        )
      })}
    </SimpleGrid>
  )
}

export default PhotoGrid
