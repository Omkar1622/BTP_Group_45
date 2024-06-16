import React, { useState, useContext } from "react";
import UploadButtons from "./components/UploadButton";
import { ImageContextProvider } from "./context/ImageContext";
import Image from "./components/Image";
import DrawerAppBar from "./components/AppBar";
import withRoot from "./components/withRoot";
import Box from '@mui/material/Box';
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Detections from "./components/Detections";
import Home from "./Pages/Home";
import { Routes, Route, Link } from "react-router-dom";
import Detect from "./components/Detect";

const App = () => {
  return (
    <ImageContextProvider>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detect" element={<Detect />} />
      </Routes>
    </ImageContextProvider>
  );
};
export default withRoot(App);
