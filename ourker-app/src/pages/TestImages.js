import React, { Fragment, useEffect, useState } from "react";
import storage from "../firebase";

export default function TestImages() {
  // // Upload image
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  // const upload = () => {
  //   if (image == null) return;

  //   storage
  //     .ref(`/images/${image.name}`)
  //     .put(image)
  //     .on("state_change", alert("success"), alert);
  // };

  const handleChange = e =>{
      if(e.target.files[0]){
          setImage(e.target.files[0]);
      }
  }

  const upload = () => {
    const uploadTask = storage.ref(`/images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            // console.log(url);
            setUrl(url);
          });
      }
    );
  };

  console.log("image: ", image);

  return (
    <Fragment>
      <div className="App">
        <center>
          <input
            type="file"
            onChange={handleChange}
            // onChange={(e) => {
            //   setImage(e.target.files[0]);
            // }}
          />
          <button onClick={upload}>Upload</button>
        </center>
        
        <img src={url} alt="test"/>
      </div>
    </Fragment>
  );
}
