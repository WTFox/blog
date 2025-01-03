import { Divider, Heading, Stack, Text } from "@chakra-ui/react"

import PostListItem from "./PostListItem"
import { PostListItemProps } from "./PostListItem"
import React from "react"
import Section from "../Section"

interface PostListProps {
  posts: PostListItemProps[]
}

export const PostList = ({ posts }: PostListProps) => {
  const sortedPosts = posts.sort((a, b) => {
    const [dateA, dateB] = [
      new Date(a.frontMatter.date).getTime(),
      new Date(b.frontMatter.date).getTime(),
    ]
    return dateB - dateA
  })

  return (
    <Stack maxW={"4xl"} px={{ base: 8, lg: 20 }}>
      <Heading id="Posts" size="2xl">
        {"❯ Posts"}
      </Heading>
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
