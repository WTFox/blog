import { Text, Heading, HeadingProps, TextProps } from "@chakra-ui/react";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import { PostListItemProps } from "@/components/PostListItem";

interface Props extends PostListItemProps {
  mdxSource: MDXRemoteProps;
}

const components = {
  h1: (props: HeadingProps) => (
    <Heading as="h1" size="2xl">
      {props.children}
    </Heading>
  ),
  p: (props: TextProps) => (
    <Text as="p" size="md">
      {props.children}
    </Text>
  ),
};

const PostLayout = (props: Props) => (
  <MDXRemote {...props.mdxSource} components={components} />
);

export default PostLayout;
