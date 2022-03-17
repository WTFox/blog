import { Text, Heading } from "@chakra-ui/react";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import { PostListItemProps } from "@/components/PostListItem";

const components = {
  h1: (props: any) => (
    <Heading as="h1" size="2xl">
      {props.children}
    </Heading>
  ),
  p: (props: any) => (
    <Text as="p" size="md">
      {props.children}
    </Text>
  ),
};

interface Props extends PostListItemProps {
  mdxSource: MDXRemoteProps;
}

const PostLayout = (props: Props) => (
  <MDXRemote {...props.mdxSource} components={components} />
);

export default PostLayout;
