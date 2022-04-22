import { BsFillPersonFill } from "react-icons/bs"
import { DownloadIcon, EmailIcon } from "@chakra-ui/icons"

import { FaTwitter, FaNewspaper, FaBicycle } from "react-icons/fa"
import { GoOctoface } from "react-icons/go"
import { Icon } from "@chakra-ui/react"
import { IconType } from "react-icons"

interface Link {
  href: string
  icon: IconType | typeof Icon
  text: string
  isExternal: boolean
}

interface ISiteConfig {
  name: string
  subtitles: string[]
  links: Link[]
}

const SiteConfig: ISiteConfig = {
  name: "Anthony Fox",
  subtitles: ["Coder", "Maker", "Dog person", "Batman?"],
  links: [
    {
      href: "/",
      icon: FaNewspaper,
      text: "/writings",
      isExternal: false,
    },
    {
      href: "/about",
      icon: BsFillPersonFill,
      text: "/about",
      isExternal: false,
    },
    // { href: "/talks", icon: BsMicFill, text: "/talks", isExternal: false },
    {
      href: "https://twitter.com/__wtfox__",
      icon: FaTwitter,
      text: "twitter",
      isExternal: true,
    },
    {
      href: "https://github.com/wtfox/",
      icon: GoOctoface,
      text: "github",
      isExternal: true,
    },
    {
      href: "https://docs.google.com/viewer?url=https://docs.google.com/document/d/1NlGqYx4y47pHcgdFibr9-zFWBz6BMeM-wRga8vYAuwE/export?format=pdf",
      icon: DownloadIcon,
      text: "resume",
      isExternal: true,
    },
    {
      href: "mailto:anthonyfox1988@gmail.com",
      icon: EmailIcon,
      text: "email",
      isExternal: true,
    },
    //{
    //href: "https://strava.com/athletes/wtfox",
    //icon: FaBicycle,
    //text: "strava",
    //isExternal: true,
    //},
  ],
}

export default SiteConfig
