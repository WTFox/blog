import { Link as ChakraLink, Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

export interface PostListItemProps {
  link: string;
  frontMatter: {
    title: string;
    summary: string;
    date: string;
    readTimeInMinutes: number;
  };
}

const PostListItem = (props: PostListItemProps) => {
  return (
    <Box py={5} maxW={"8xl"}>
      <Link href={props.link} passHref>
        <ChakraLink>
          <Heading mb={5} size="md">
            {props.frontMatter.title}
          </Heading>
        </ChakraLink>
      </Link>

      <Text mt={5} fontSize="md">
        {props.frontMatter.summary}
      </Text>

      <Text pt={5} fontSize="md">
        {props.frontMatter.readTimeInMinutes} minutes
      </Text>
    </Box>
  );
};

export default PostListItem;
