// @ts-nocheck

import { Box, Heading } from "@chakra-ui/react";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";

import { PostListItemProps } from "@/components/PostList/PostListItem";
import { components } from "@/components/MDXComponents";

interface Props extends PostListItemProps {
  mdxSource: MDXRemoteProps;
}

const PostDetail = (props: Props) => (
  <Box>
    <Heading
      textAlign={"center"}
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      bgClip="text"
      textTransform={"uppercase"}
      fontWeight="extrabold"
      as="h1"
      size="4xl"
      pb={20}
    >
      {props.frontMatter.title}
    </Heading>
    <MDXRemote {...props.mdxSource} components={components} />
  </Box>
);

export default PostDetail;
