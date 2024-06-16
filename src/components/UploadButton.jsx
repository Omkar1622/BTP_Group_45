import * as React from "react";
import { useState, useEffect, useContext } from "react";
import Button from "@mui/material/Button";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import ImageContext from "../context/ImageContext";
import { useNavigate } from 'react-router-dom';

const UploadButtons = () => {
  const [image, setImage] = useState("");
  // const [url, setUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();
  const {url , setUrl} = useContext(ImageContext);

  let uploadImage = async () => {
    setUploading(true);

    if (image) {
      setUploading(true);
      let data = new FormData();
      data.append("file", image);

      try {
        data.append("upload_preset", "car_damage_detection");
        data.append("cloud_name", "dxpol7udm");

        fetch("https://api.cloudinary.com/v1_1/dxpol7udm/image/upload", {
          method: "post",
          body: data,
        })
          .then((resp) => resp.json())
          .then((data) => {
            setUrl(data.url);
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log("error in uploading image ");
      } finally {
        setUploading(false);
        navigate('/detect')
        setImage(null);
      }
    } else {
      setUploading(false);
    }
  };

  useEffect(() => {
    uploadImage();
  }, [image]);

  return (
    <Stack direction="row" alignItems="center" spacing={2} >
      <Button
        variant="contained"
        component="label"
        color="secondary"
        size="large"
        sx={{ minWidth: 200, color : "#fff" }}
        endIcon={uploading ? <CircularProgress /> : <PhotoCamera />}
      >
        Upload
        <input
          hidden
          accept="image/*"
          multiple
          type="file"
         
          disabled={uploading}
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
      </Button>
      {/* {url ? <img src={url} /> : null} */}
    </Stack>
  );
};
export default UploadButtons;
