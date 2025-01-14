import { Box, Center, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"

const StravaMiles = () => {
  const [mileage, setMileage] = useState(null)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/strava")
      if (!response.ok) {
        throw new Error("Failed to fetch mileage")
      }
      const data = await response.json()
      const miles = Math.round(data.miles)
      setMileage(miles)
    }
    fetchData()
  }, [])

  return (
    <Center>
      <Box>
        <Text fontSize={"2xl"}>
          {currentYear}: {mileage} mi 🚴🏃🚶‍♂️
        </Text>
      </Box>
    </Center>
  )
}

export default StravaMiles
