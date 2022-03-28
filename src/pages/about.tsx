import { Stack, Divider, Heading, Text } from "@chakra-ui/react";

import { MainLayout } from "@/components/Layouts";
import { ReactElement } from "react";
import Section from "@/components/Section";

const About = () => {
  return (
    <Stack px={{ base: 8, lg: 20 }}>
      <Section pb={5} delay={0.1}>
        <Heading id="Posts" size="lg">
          <Text display={"inline-block"}>{"❯_ about"}</Text>
        </Heading>
        <Divider pt={5} size={"md"} />
      </Section>

      <Section pb={5} delay={0.3}>
        <Text>
          Anthony is an experienced speaker, tech blogger, and dedicated
          software engineer. In the past, he’s participated in weekend
          hack-a-thons, authored projects that made the front page of Hacker
          News, and has been featured in programming newsletters such as Django
          Weekly, and PyCoders Weekly. When Anthony isn’t glued to a glowing
          rectangle, he spends time reading, exercising, and going on road-trips
          with his wife, Paola, and aussie, Alt.
        </Text>
      </Section>
    </Stack>
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default About;
