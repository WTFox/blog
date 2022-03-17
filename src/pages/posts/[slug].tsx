import PostLayout from "../../components/PostLayout";
import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PostPage = ({ link, frontMatter, mdxSource }) => {
  return (
    <PostLayout link={link} frontMatter={frontMatter} mdxSource={mdxSource} />
  );
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
export default PostPage;
