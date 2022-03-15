import { Link as ChakraLink, Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

const PostListItem = (props: PostListItemProps) => {
  return (
    <Box py={5} maxW={"8xl"}>
      <Link href={props.link} passHref>
        <ChakraLink>
          <Heading mb={5} size="md">
            {props.title}
          </Heading>
        </ChakraLink>
      </Link>

      <Text mt={5} fontSize="md">
        {props.summary}
      </Text>

      <Text pt={5} fontSize="md">
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
