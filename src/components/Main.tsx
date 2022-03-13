import { Heading, Stack, HStack } from "@chakra-ui/react";

import { Container } from "./Container";
import PostListItem from "./PostListItem";

export const Main = ({ posts }) => {
  return (
    <Container direction="column">
      <Stack textAlign="left">
        <Heading pt={20} alignSelf="left" size="3xl">
          Posts
        </Heading>

        <HStack flexFlow={"column"} pt={10}>
          {posts.map((post) => {
            return <PostListItem {...post.frontMatter} />;
          })}
        </HStack>
      </Stack>
    </Container>
  );
};
