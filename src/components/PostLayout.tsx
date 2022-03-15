import { Text, Heading } from "@chakra-ui/react";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";

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

interface PostProps {
  frontMatter: {
    title: string;
    summary: string;
    date: string;
    readTimeInMinutes: number;
  };
}

interface Props extends PostProps {
  mdxSource: MDXRemoteProps;
}

const PostLayout = (props: Props) => (
  <MDXRemote {...props.mdxSource} components={components} />
);

export default PostLayout;