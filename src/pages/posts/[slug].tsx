import { Container } from "@chakra-ui/react";
import PostDetail from "@/components/PostDetail";
import { PostDetailLayout } from "@/components/Layouts";
import { ReactElement } from "react";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";

const PostDetailView = ({ link, frontMatter, mdxSource }) => {
  return (
    <Container pt={"15"}>
      <PostDetail link={link} frontMatter={frontMatter} mdxSource={mdxSource} />
    </Container>
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
