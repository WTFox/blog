import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { ReactElement } from "react";

import { PostList } from "../components/PostList/PostList";
import { MainLayout } from "@/components/Layouts";

const Index = ({ posts }) => <PostList posts={posts} />;

Index.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getStaticProps() {
  const postsDirectory = path.join(__dirname, "../../../src/_posts");
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join(postsDirectory, filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    const link = `/posts/${filename.replace(".mdx", "")}`;

    return {
      frontMatter,
      link,
      slug: filename.split(".")[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default Index;
