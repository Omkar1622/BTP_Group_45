import React from "react";
import Image from "../components/Image";
import DrawerAppBar from "../components/AppBar";
import Box from "@mui/material/Box";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Detections from "../components/Detections";
export default function Home() {
  return (
    <div>
      <DrawerAppBar />
      {/* <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
    </Box> */}
      <Hero />
      <HowItWorks />
      <Detections />
    </div>
  );
}
