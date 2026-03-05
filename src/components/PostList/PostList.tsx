import { Box, Heading, Stack, useColorModeValue } from "@chakra-ui/react"

import PostListItem from "./PostListItem"
import { PostListItemProps } from "./PostListItem"
import React, { useState } from "react"
import Section from "../Section"
import SiteConfig from "@/lib/SiteConfig"
import TagFilter from "@/components/TagFilter"

interface PostListProps {
  posts: PostListItemProps[]
  allTags?: string[]
}

export const PostList = ({ posts, allTags = [] }: PostListProps) => {
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const t = SiteConfig.theme
  const bg = useColorModeValue("white", t.dark.bg)
  const headingColor = useColorModeValue(t.light.headingColor, undefined)
  const headingGradient = useColorModeValue(undefined, SiteConfig.gradient)

  const sortedPosts = posts.sort((a, b) => {
    const [dateA, dateB] = [
      new Date(a.frontMatter.date).getTime(),
      new Date(b.frontMatter.date).getTime(),
    ]
    return dateB - dateA
  })

  const filteredPosts = activeTag
    ? sortedPosts.filter((post) => post.frontMatter.tags?.includes(activeTag))
    : sortedPosts

  return (
    <Stack maxW={"4xl"} px={{ base: 8, lg: 20 }} mt={{ base: 0, lg: "-1.5em" }}>
      <Box
        position="sticky"
        top="16"
        bg={bg}
        zIndex={0}
        pb={3}
        pt={3}
        mt={{ base: 0, lg: "-1.5em" }}
        ml={{ base: "-8", lg: "-20" }}
        mr={{ base: "-8", lg: "-20" }}
        pl={{ base: 8, lg: 20 }}
        pr={{ base: 8, lg: 20 }}
      >
        <Heading
          id="Posts"
          size="xl"
          color={headingColor}
          bgGradient={headingGradient}
          bgClip={headingGradient ? "text" : undefined}
          fontWeight="extrabold"
          mb={3}
        >
          {"Latest"}
        </Heading>
        <TagFilter tags={allTags} activeTag={activeTag} onTagClick={setActiveTag} />
      </Box>
      {filteredPosts.map((post, index: number) => {
        return (
          <Section key={post.slug || index} delay={Math.min((index + 1) / 10 + 0.3, 0.8)}>
            <PostListItem {...post} />
          </Section>
        )
      })}
    </Stack>
  )
}
