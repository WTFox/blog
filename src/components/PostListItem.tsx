import { Box, Divider, Heading, Text } from "@chakra-ui/react";

type PostListItemProps = {
  title: string;
  summary: string;
  readTimeInMinutes: number;
};

const PostListItem = (props: PostListItemProps) => {
  return (
    <Box maxW={"2xl"} py={5}>
      <Heading mb={5} size="lg">
        {props.title}
      </Heading>

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
