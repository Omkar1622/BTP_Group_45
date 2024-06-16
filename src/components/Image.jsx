import React from 'react'
import { useState, useEffect, useContext } from "react";
import ImageContext from "../context/ImageContext";

function Image() {
    const {url , setUrl} = useContext(ImageContext);
  return (
    <>
      <div><img src={url} /></div>
    </>
   
  )
}

export default Image