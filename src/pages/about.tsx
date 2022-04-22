import {
  Text,
  Box,
  Image,
  VStack,
  useColorMode,
  useColorModeValue,
  Link,
} from "@chakra-ui/react"

import { ReactElement } from "react"
import Section from "@/components/Section"
import { FullWidthLayout } from "@/components/Layouts"
import Rainbowify from "@/components/Rainbowify"

import me from "../../public/images/me.jpg"
import bike from "../../public/images/bike.png"

function getAge(dateString: string): number {
  var today = new Date()
  var birthDate = new Date(dateString)
  var age = today.getFullYear() - birthDate.getFullYear()
  var m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
}

const About = () => {
  const age = getAge("10-5-1988")

  const { colorMode } = useColorMode()
  const borderColor = useColorModeValue("#7928CA", "#FF0080")

  let borderProps: any
  if (colorMode === "light") {
    borderProps = { borderColor }
  } else {
    borderProps = { bgGradient: "linear(to-l, #7928CA, #FF0080)" }
  }

  return (
    <VStack maxW={"40rem"}>
      <Section pb={5} delay={0.3}>
        <Box
          borderWidth={2}
          w={"25rem"}
          display="inline-block"
          borderRadius="50"
          overflow="hidden"
          {...borderProps}
        >
          <Image src={me.src} alt="Picture of Anthony" />
        </Box>
      </Section>

      <Section pb={5} delay={0.3}>
        Hello, I&apos;m Anthony Fox.
      </Section>

      <Section pb={5} delay={0.3}>
        I&apos;m a <Rainbowify>{age}</Rainbowify> year old
        <Rainbowify> Principal Engineer </Rainbowify>
        for <Rainbowify>Stratasan</Rainbowify>, a company focused on healthcare
        analytics.
      </Section>

      <Section pb={5} delay={0.3}>
        Learning is my passion and I prefer to learn by reading. Reading has
        always helped me keep imposter syndrome at bay, but what good is
        knowledge if you don&apos;t share it?
      </Section>

      <Section pb={5} delay={0.3}>
        My days are usually spent pairing with others on my team, sharing best
        practices, and trying to keep up with the ever-changing landscape that
        is software engineering. I&apos;ve also spoken at many meetups and a few
        conferences, too.
      </Section>

      <Section pb={5} delay={0.3}>
        I live in California with my wife, Paola, and my Australian Shepherd,
        Alto. When I&apos;m not programming, reading, or spending time with my
        wife, I&apos;m on my bike.
      </Section>

      <Section pb={5} delay={0.3}>
        <Box
          borderWidth={2}
          w={"25rem"}
          display="inline-block"
          borderRadius="50"
          overflow="hidden"
          {...borderProps}
        >
          <Image src={bike.src} alt="Picture of Anthony's road bike." />
        </Box>
      </Section>

      <Section pb={5} delay={0.3}>
        <Text>
          You can follow me on{" "}
          <Link
            textDecoration={"underline"}
            isExternal
            href={"https://strava.com/athletes/wtfox"}
          >
            <Rainbowify>Strava</Rainbowify>
          </Link>
          , if you&apos;d like. I&apos;m more active during the summer. ;)
        </Text>
      </Section>

      <Section py={10} delay={0.3}>
        {" "}
      </Section>
    </VStack>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return <FullWidthLayout>{page}</FullWidthLayout>
}

export default About
