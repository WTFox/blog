import { Box, Heading, Stack, HStack, Text } from "@chakra-ui/react";

import { Container } from "./Container";
import { Footer } from "./Footer";
import PostListItem from "./PostListItem";

export const Main = () => {
  return (
    <Container direction="column" order={2}>
      <Stack textAlign="left" ml={{ xl: "10rem" }}>
        <Heading alignSelf={"center"} size="3xl">
          Posts
        </Heading>
        <HStack flexFlow={"column"} pl={5} pt={10}>
          {new Array(10).fill("").map((val) => {
            return (
              <PostListItem
                title="How I did a thing"
                summary="Because the item on the left is larger then the right, the center between them. Next give text-align for elements left, center and right. Because the item on the left is larger then the right, the center between them. Next give text-align for elements left, center and right."
                readTimeInMinutes={12}
              />
            );
          })}
        </HStack>
      </Stack>
    </Container>
  );
};
