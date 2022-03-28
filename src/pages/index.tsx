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

  let posts = files.map((filename) => {
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

  posts = posts
    // filter out drafts
    .filter((post) => {
      if (process.env.NODE_ENV === "development") {
        return true;
      }
      return !post.frontMatter.draft;
    })
    // filter out posts with a date greater than today
    .filter((post) => {
      return new Date(post.frontMatter.date).getTime() <= new Date().getTime();
    });

  return {
    props: {
      posts,
    },
  };
}

export default Index;
