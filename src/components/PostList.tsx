import { Heading, Stack } from "@chakra-ui/react";

import PostListItem from "./PostListItem";
import Section from "./Section";

export const PostList = ({ posts }) => {
  return (
    <Stack px={20}>
      <Section pb={5} delay={0.1}>
        <Heading id="Posts" size="xl">
          Writings
        </Heading>
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
