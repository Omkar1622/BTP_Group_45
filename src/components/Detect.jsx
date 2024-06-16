import Image from "./Image";
import { useState, useEffect, useContext , useCallback} from "react";
import ImageContext from "../context/ImageContext";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Detect() {

  const { url, setUrl } = useContext(ImageContext);

  const [imgSrc, setImgSrc] = useState("");

  // const onLoad = useCallback(() => {
  //   setImgSrc(url);
  // }, [url]);


  // useEffect(() => {
  //   const img = new Image();
  //   img.src = url;
  //   img.addEventListener("load", onLoad);
  //   return () => {
  //     img.removeEventListener("load", onLoad);
  //   };
  // }, [url, onLoad]);

  return (
    <Box>
      <Grid
        container
        spacing={2}
        p={4}
        alignItems="center"
        justifyContent="center"
        // style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12} alignItems="center" textAlign="center">
          <Button
            variant="contained"
            component="label"
            color="secondary"
            size="large"
            sx={{ minWidth: 200, color: "#fff" }}
          >
            Detect
          </Button>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              backgroundColor: "#fff",
              border: "2px solid ",
            }}
          >
            {url ? <img src={url} width="100%" height="100%" /> : null}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              backgroundColor: "#fff",
              border: "2px solid ",
            }}
          >
            {url ? <img src={url} width="100%" height="100%" /> : null}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
