import {
  Text,
  Box,
  Image,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react"

import { ReactElement } from "react"
import Section from "@/components/Section"
import { FullWidthLayout } from "@/components/Layouts"

import me from "../../public/images/me.jpg"
import bike from "../../public/images/bike.png"
import { Container } from "@/components/Container"

function getAge(dateString: string): string {
  var today = new Date()
  var birthDate = new Date(dateString)
  var age = today.getFullYear() - birthDate.getFullYear()
  var m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age.toFixed(0)
}

const Sect = (children: any) => {
  return <Section pb={5} delay={0.3} {...children} />
}

const About = () => {
  const age = getAge("10-05-1988")

  const { colorMode } = useColorMode()
  const borderColor = useColorModeValue("#7928CA", "#FF0080")

  let borderProps: any
  if (colorMode === "light") {
    borderProps = { borderColor }
  } else {
    borderProps = { bgGradient: "linear(to-l, #7928CA, #FF0080)" }
  }

  return (
    <Container maxW={"40rem"} px={{ base: 8, lg: 20 }}>
      <Sect>
        <Box
          borderWidth={2}
          w={"20rem"}
          display="inline-block"
          borderRadius="50"
          overflow="hidden"
          {...borderProps}
        >
          <Image src={me.src} alt="Picture of Anthony" />
        </Box>
      </Sect>

      <Sect>
        <Text>Hello, I&apos;m Anthony Fox.</Text>
      </Sect>

      <Sect>
        I&apos;m {age} years old and I&apos;m currently a Principal Engineer for
        Stratasan, a company focused on healthcare analytics.
      </Sect>

      <Sect>
        I live in California with my wife, Paola, and my Australian Shepher,
        Alto.
      </Sect>

      <Sect>You can follow me on Strava, if you&apos;d like.</Sect>
    </Container>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return <FullWidthLayout>{page}</FullWidthLayout>
}

export default About
