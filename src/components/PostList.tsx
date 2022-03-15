import { Heading, Box, Stack } from "@chakra-ui/react";

import PostListItem from "@/components/PostListItem";

export const PostList = ({ posts }) => {
  return (
    <Stack alignContent="center" px={20} pt={10}>
      <Heading size="3xl">Posts</Heading>
      {posts.map((post) => {
        return <PostListItem {...post.frontMatter} />;
      })}
    </Stack>
  );
};
