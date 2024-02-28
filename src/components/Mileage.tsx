import { useState, useEffect } from "react"

export default function MileageDisplay() {
  const [mileage, setMileage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch("/api/strava")
        if (!response.ok) {
          throw new Error("Failed to fetch mileage")
        }
        const data = await response.json()
        const miles = Math.round(data.miles)
        setMileage(miles)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <span>
      {isLoading && <span>Loading mileage...</span>}
      {mileage && <span>{mileage}</span>}
    </span>
  )
}
