import { Divider, Heading, Stack, Text } from "@chakra-ui/react";

import PostListItem from "./PostListItem";
import { PostListItemProps } from "./PostListItem";
import React from "react";
import Section from "../Section";

interface PostListProps extends React.FC {
  posts: PostListItemProps[];
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  const sortedPosts = posts.sort((a, b) => {
    const [dateA, dateB] = [
      new Date(a.frontMatter.date).getTime(),
      new Date(b.frontMatter.date).getTime(),
    ];
    return dateA - dateB;
  });

  return (
    <Stack px={{ base: 8, lg: 20 }}>
      <Section pb={5} delay={0.1}>
        <Heading id="Posts" size="lg">
          <Text display={"inline-block"}>{"❯_"}</Text>
          {" writings"}
        </Heading>
        <Divider pt={5} size={"md"} />
      </Section>
      {sortedPosts.map((post, index: number) => {
        return (
          <Section key={index} delay={(index + 1) / 10 + 0.3}>
            <PostListItem {...post} />
          </Section>
        );
      })}
    </Stack>
  );
};
