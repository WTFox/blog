import { Heading, Stack, HStack, Text } from "@chakra-ui/react";

import { Container } from "./Container";
import { Footer } from "./Footer";
import PostListItem from "./PostListItem";

export const Main = () => {
  return (
    <Container direction="column" flexGrow={3} height="100vh">
      <Container direction="row">
        <Stack textAlign="left" ml="10rem">
          <Heading size="3xl">Posts</Heading>

          <HStack flexFlow={"column"} pl={5}>
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

      <Container direction="row">
        <Footer position="fixed" bottom="1rem">
          <Text opacity="25%">Thnks bye</Text>
        </Footer>
      </Container>
    </Container>
  );
};
