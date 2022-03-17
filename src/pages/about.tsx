import Section from "@/components/Section";
import { Image, Container, Text, Heading } from "@chakra-ui/react";

import pic from "../public/images/aboutme.jpg";

const AboutMe = () => {
  return (
    <Container maxW={"4xl"}>
      <Section delay={0.3}>
        <Image alt="Anthony on bike" src={pic.src}></Image>
      </Section>

      <Section py={10} delay={0.7}>
        <Heading>Hi, </Heading>
        <Text py={10}>
          I&apos;m a developer from Tennessee, currently living in Irvine, CA.
        </Text>
      </Section>
    </Container>
  );
};

export default AboutMe;
