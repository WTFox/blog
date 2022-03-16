import Section from "@/components/Section";
import { Container, Text, Heading } from "@chakra-ui/react";
import Image from "next/image";

import pic from "../public/images/aboutme.jpg";

const AboutMe = () => {
  return (
    <Container maxW={"4xl"}>
      <Section delay={0.3}>
        <Image src={pic}></Image>
      </Section>

      <Section py={10} delay={0.7}>
        <Heading>Hi, </Heading>
        <Text py={10}>
          I'm a developer from Tennessee, currently living in Irvine, CA.
        </Text>
      </Section>
    </Container>
  );
};

export default AboutMe;
