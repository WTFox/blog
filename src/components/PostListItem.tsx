import { Link, Box, Divider, Heading, Text } from "@chakra-ui/react";

const PostListItem = (props: PostListItemProps) => {
  return (
    <Box maxW={"2xl"} py={5}>
      <Link href={props.link}>
        <Heading mb={5} size="lg">
          {props.title}
        </Heading>
      </Link>

      <Divider width="sm" orientation="horizontal" />

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
