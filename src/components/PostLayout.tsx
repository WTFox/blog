import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import { PostListItemProps } from "@/components/PostListItem";
import { components } from "@/components/MDXComponents";

interface Props extends PostListItemProps {
  mdxSource: MDXRemoteProps;
}

const PostLayout = (props: Props) => (
  <MDXRemote {...props.mdxSource} components={components} />
);

export default PostLayout;
