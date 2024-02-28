import {
  Text,
  Box,
  Image,
  VStack,
  useColorMode,
  useColorModeValue,
  Link,
} from "@chakra-ui/react"

import React, { ReactElement } from "react"
import Section from "@/components/Section"
import { FullWidthLayout } from "@/components/Layouts"
import Rainbowify from "@/components/Rainbowify"
import MileageDisplay from "@/components/Mileage"

import me from "../../public/images/me.jpg"
import bike from "../../public/images/bike.png"
import SiteConfig from "@/lib/SiteConfig"
import Head from "next/head"

function getAge(): number {
  const today = new Date()
  const birthDate = new Date(1988, 9, 5)
  const m = today.getMonth() - birthDate.getMonth()
  let age = today.getFullYear() - birthDate.getFullYear()

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
}

const About = ({ age }) => {
  const { colorMode } = useColorMode()
  const borderColor = useColorModeValue(
    SiteConfig.lightAccent,
    SiteConfig.darkAccent
  )

  let borderProps: any
  if (colorMode === "light") {
    borderProps = { borderColor }
  } else {
    borderProps = { bgGradient: SiteConfig.gradient }
  }

  const currentYear = new Date().getFullYear()
  const fontSize = "xl"

  return (
    <div>
      <Head>
        <title>{"About me!"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <VStack maxW={"40rem"} textAlign={"justify"}>
        <Section pb={5} delay={0.3}>
          <Box
            borderWidth={2}
            display="inline-block"
            borderRadius="50"
            overflow="hidden"
            {...borderProps}
          >
            <Image src={me.src} alt="Picture of Anthony" />
          </Box>
        </Section>

        <Section pb={5} delay={0.3}>
          <Text fontSize={fontSize}>Hello, I&apos;m Anthony Fox.</Text>
        </Section>

        <Section pb={5} delay={0.3}>
          <Text fontSize={fontSize}>
            I&apos;m a <Rainbowify>{age}</Rainbowify> year old
            <Rainbowify> Principal Software Engineer</Rainbowify>.
          </Text>
        </Section>

        <Section pb={5} delay={0.3}>
          <Text fontSize={fontSize}>
            Learning is my passion and I prefer to learn by reading. Reading has
            always helped me keep imposter syndrome at bay, but what good is
            knowledge if you don&apos;t share it?
          </Text>
        </Section>

        <Section pb={5} delay={0.3}>
          <Text fontSize={fontSize}>
            My days are usually spent pairing with others on my team, sharing
            best practices, and trying to keep up with the ever-changing
            landscape that is software engineering. I&apos;ve also spoken at
            many meetups and a few conferences, too.
          </Text>
        </Section>

        <Section pb={5} delay={0.3}>
          <Text fontSize={fontSize}>
            I live in California with my wife, Paola, and my Australian
            Shepherd, Alto. When I&apos;m not programming, reading, or spending
            time with my wife, I&apos;m on my bike.
          </Text>
        </Section>

        <Section pb={5} delay={0.3}>
          <Box
            borderWidth={2}
            display="inline-block"
            borderRadius="50"
            overflow="hidden"
            {...borderProps}
          >
            <Image src={bike.src} alt="Picture of Anthony's road bike." />
          </Box>
        </Section>

        <Section pb={5} delay={0.3}>
          <Text fontSize={"2xl"}>
            {currentYear}: <MileageDisplay /> miles 🚴🏃🚶‍♂️
          </Text>
        </Section>

        <Section pb={5} delay={0.3}>
          <Text fontSize={fontSize}>
            You can follow me on{" "}
            <Link
              textDecoration={"underline"}
              isExternal
              href={"https://strava.com/athletes/wtfox"}
            >
              <Rainbowify>Strava</Rainbowify>
            </Link>
            , if you&apos;d like.
          </Text>
        </Section>

        <Section py={10} delay={0.3}>
          {" "}
        </Section>
      </VStack>
    </div>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return <FullWidthLayout>{page}</FullWidthLayout>
}

export async function getServerSideProps() {
  return {
    props: { age: getAge() },
  }
}

export default About
