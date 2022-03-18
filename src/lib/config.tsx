import { BsFillPersonFill, BsMicFill } from "react-icons/bs";
import { DownloadIcon, EmailIcon } from "@chakra-ui/icons";

import { FaTwitter } from "react-icons/fa";
import { GoOctoface } from "react-icons/go";
import { Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Link {
  href: string;
  icon: IconType | typeof Icon;
  text: string;
  isExternal: boolean;
}

interface ISiteConfig {
  name: string;
  subtitle: string;
  links: Link[];
}

const SiteConfig: ISiteConfig = {
  name: "Anthony Fox",
  subtitle: "writer of code. maker of things.",
  links: [
    {
      href: "/about",
      icon: BsFillPersonFill,
      text: "/about",
      isExternal: false,
    },
    { href: "/talks", icon: BsMicFill, text: "/talks", isExternal: false },
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
      href: "/resume.pdf",
      icon: DownloadIcon,
      text: "resume",
      isExternal: false,
    },
    {
      href: "mailto:anthonyfox1988@gmail.com",
      icon: EmailIcon,
      text: "email",
      isExternal: true,
    },
  ],
};

export default SiteConfig;
