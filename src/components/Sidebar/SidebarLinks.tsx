import React from "react";
import Link from "next/link";
import {
  Link as ChakraLink, Grid,
  GridItem,
  Text
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import Section from "@/components/Section";
import SiteConfig from "../../lib/config";

export const SidebarLinks = () => {
  return (
    <Section pt={5} textAlign={{ lg: "center" }}>
      <Grid
        justifyItems={"left"}
        templateColumns={{ base: "repeat(2, 1fr)" }}
        gap={5}
      >
        {SiteConfig.links.map((link, index) => {
          return (
            <GridItem key={index}>
              <Link passHref href={link.href}>
                <ChakraLink isExternal={link.isExternal} fontSize={"xl"}>
                  <Text>
                    <Icon as={link.icon} /> {link.text}{" "}
                  </Text>
                </ChakraLink>
              </Link>
            </GridItem>
          );
        })}
      </Grid>
    </Section>
  );
};
