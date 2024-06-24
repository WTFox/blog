import { BsFillPersonFill } from "react-icons/bs"
import { EmailIcon } from "@chakra-ui/icons"

import { FaRss, FaGithub } from "react-icons/fa"
import { Icon } from "@chakra-ui/react"
import { IconType } from "react-icons"

import path from "path"

interface Link {
  href: string
  icon: IconType | typeof Icon
  text: string
  isExternal: boolean
}

interface ISiteConfig {
  authorName: string
  siteTitle: string
  siteURL: string
  gradient: string
  postsDirectory: string
  lightAccent: string
  darkAccent: string
  links: Link[]
  authorEmail: string
  siteDescription: string
}

const SiteConfig: ISiteConfig = {
  postsDirectory: path.join(__dirname, "../../../content"),
  siteTitle: "A. Fox Blog",
  authorName: "Anthony Fox",
  authorEmail: "anthonyfox1988@gmail.com",
  siteDescription: "Random thoughts and musings.",
  siteURL: "https://afox.dev",
  links: [
    {
      href: "/about",
      icon: BsFillPersonFill,
      text: "/about",
      isExternal: false,
    },
    {
      href: "https://github.com/wtfox/",
      icon: FaGithub,
      text: "github",
      isExternal: true,
    },
    // {
    //   href: "https://docs.google.com/viewer?url=https://docs.google.com/document/d/1NlGqYx4y47pHcgdFibr9-zFWBz6BMeM-wRga8vYAuwE/export?format=pdf",
    //   icon: DownloadIcon,
    //   text: "resume",
    //   isExternal: true,
    // },
    {
      href: "mailto:anthonyfox1988@gmail.com",
      icon: EmailIcon,
      text: "email",
      isExternal: true,
    },
    {
      href: "/rss/feed.xml",
      icon: FaRss,
      text: "rss",
      isExternal: false,
    },
  ],
  gradient: "linear(to-l, #7928CA, #FF0080)",
  lightAccent: "#7928CA",
  darkAccent: "#FF0080",
}

export default SiteConfig
