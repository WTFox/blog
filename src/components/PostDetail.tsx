import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import { PostListItemProps } from "@/components/PostList/PostListItem";
import { components } from "@/components/MDXComponents";

interface Props extends PostListItemProps {
  mdxSource: MDXRemoteProps;
}

const PostDetail = (props: Props) => (
  // @ts-ignore
  <MDXRemote {...props.mdxSource} components={components} />
);

export default PostDetail;
