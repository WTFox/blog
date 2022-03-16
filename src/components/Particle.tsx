import Particles from "react-tsparticles";

import { Box, useColorModeValue } from "@chakra-ui/react";

const particleOptions = (color: string): any => {
  return {
    fpsLimit: 60,
    particles: {
      color: {
        value: color,
      },
      move: {
        direction: "right",
        enable: true,
        outMode: "out",
        random: true,
        speed: 2,
        straight: false,
      },
      number: {
        value: 10,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: true,
        value: 5,
      },
    },
    detectRetina: true,
  };
};

const Particle = () => {
  return (
    <Box zIndex={-1} pos={"fixed"}>
      <Particles
        options={particleOptions(useColorModeValue("#16161D", "#FBB6CE"))}
      />
    </Box>
  );
};

export default Particle;
