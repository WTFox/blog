import { Link as ChakraLink, Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

const PostListItem = (props: PostListItemProps) => {
  return (
    <Box maxW={"4xl"} py={5}>
      <Link href={props.link} passHref>
        <ChakraLink>
          <Heading mb={5} size="lg">
            {props.title}
          </Heading>
        </ChakraLink>
      </Link>

      <Text mt={5} fontSize="xl">
        {props.summary}
      </Text>

      <Text textAlign="right" mt={5} fontSize="lg">
        {props.readTimeInMinutes} minutes
      </Text>
    </Box>
  );
};

export default PostListItem;

export interface PostListItemProps {
  title: string;
  link: string;
  summary: string;
  readTimeInMinutes: number;
}
