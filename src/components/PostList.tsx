import { Divider, Heading, Stack } from "@chakra-ui/react";

import PostListItem from "./PostListItem";
import Section from "./Section";

export const PostList = ({ posts }) => {
  return (
    <Stack px={20}>
      <Section pb={10} delay={0.1}>
        <Heading size="xl">Posts</Heading>
      </Section>
      {posts.map((post, index) => {
        return (
          <Section key={index} delay={(index + 1) / 10 + 0.3}>
            <PostListItem {...post.frontMatter} />
          </Section>
        );
      })}
    </Stack>
  );
};
