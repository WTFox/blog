import { Heading, Stack } from "@chakra-ui/react";

import PostListItem from "./PostListItem";
import Section from "./Section";

export const PostList = ({ posts }) => {
  return (
    <Stack alignContent="center" px={20} pt={10}>
      <Section delay={0.2}>
        <Heading size="3xl">Posts</Heading>
      </Section>
      {posts.map((post, index) => {
        return (
          <Section delay={0.4}>
            <PostListItem {...post.frontMatter} />
          </Section>
        );
      })}
    </Stack>
  );
};
