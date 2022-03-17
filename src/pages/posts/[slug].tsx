import PostDetail from "../../components/PostDetail";
import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ReactElement } from "react";
import { PostDetailLayout } from "@/components/Layouts";

const PostDetailView = ({ link, frontMatter, mdxSource }) => {
  return (
    <PostDetail link={link} frontMatter={frontMatter} mdxSource={mdxSource} />
  );
};

PostDetailView.getLayout = function getLayout(page: ReactElement) {
  return <PostDetailLayout>{page}</PostDetailLayout>;
};

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join(__dirname, "../../../../src/_posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join(__dirname, "../../../../src/_posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export { getStaticProps, getStaticPaths };
export default PostDetailView;
