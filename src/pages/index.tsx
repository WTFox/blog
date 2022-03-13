import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Sidebar, MobileNav } from "../components/Sidebar";

import { Grid, GridItem } from "@chakra-ui/react";

const Index = ({ posts }) => (
  <Container>
    <DarkModeSwitch />
    <Grid templateColumns="repeat(5, 1fr)">
      <GridItem colSpan={1} alignItems="start" justifyContent="start">
        <Sidebar />
      </GridItem>

      <GridItem
        alignItems="start"
        justifyContent="start"
        colStart={{ sm: 1, xl: 3 }}
        colEnd={5}
      >
        <MobileNav />
        <Main posts={posts} />
      </GridItem>
    </Grid>
  </Container>
);

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

    frontMatter.link = link;

    return {
      frontMatter,
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
