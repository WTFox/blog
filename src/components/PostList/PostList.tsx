import { Box, Divider, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react"

import PostListItem from "./PostListItem"
import { PostListItemProps } from "./PostListItem"
import React from "react"
import Section from "../Section"

interface PostListProps {
  posts: PostListItemProps[]
}

export const PostList = ({ posts }: PostListProps) => {
  const bg = useColorModeValue("white", "gray.900")

  const sortedPosts = posts.sort((a, b) => {
    const [dateA, dateB] = [
      new Date(a.frontMatter.date).getTime(),
      new Date(b.frontMatter.date).getTime(),
    ]
    return dateB - dateA
  })

  return (
    <Stack maxW={"4xl"} px={{ base: 8, lg: 20 }} mt={{ base: 0, lg: 0 }}>
      <Box
        position="sticky"
        top="16"
        bg={bg}
        zIndex={0}
        pb={3}
        pt={3}
        mt={{ base: 0, lg: 0 }}
        ml={{ base: "-8", lg: "-20" }}
        mr={{ base: "-8", lg: "-20" }}
        pl={{ base: 8, lg: 20 }}
        pr={{ base: 8, lg: 20 }}
      >
        <Heading id="Posts" size="xl">
          {"❯ Posts"}
        </Heading>
      </Box>
      {sortedPosts.map((post, index: number) => {
        return (
          <Section key={index} delay={(index + 1) / 10 + 0.3}>
            <PostListItem {...post} />
          </Section>
        )
      })}
    </Stack>
  )
}
