import { Center } from "@chakra-ui/react"

const YouTubeEmbed = ({ videoId }) => {
  return (
    <Center>
      <iframe
        title="YouTube video player"
        width={"560"}
        height={"315"}
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Center>
  )
}

export default YouTubeEmbed
