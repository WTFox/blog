import { DownloadIcon, EmailIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsFillPersonFill, BsMicFill } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { GoOctoface } from "react-icons/go";

interface Link {
  href: string;
  icon: IconType | typeof Icon;
  text: string;
  isExternal: boolean;
}

interface ISiteConfig {
  links: Link[];
}

const SiteConfig: ISiteConfig = {
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
