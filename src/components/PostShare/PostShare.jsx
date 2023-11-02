import React, { useState, useRef } from "react";
import "./PostShare.css";
import ProfileImage from "../../img/profileImg.jpg";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useSelector, useDispatch } from "react-redux";
import { uploadImage, uploadPost } from "../../actions/uploadAction";
import axios from "axios";
import { Image } from "cloudinary-react";

export const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const dispatch = useDispatch();
  const desc = useRef();
  const { user } = useSelector((state) => state.authReducer.authData);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  const reset = () => {
    setImage(null);
    desc.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);
      data.append("upload_preset", "pet_pals");
      axios
        .post("https://api.cloudinary.com/v1_1/dufov2soa/image/upload", data)
        .then((res) => {
          newPost.image = res.data.public_id;
          dispatch(uploadImage(data));
          dispatch(uploadPost(newPost));
          reset();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      dispatch(uploadPost(newPost));
      reset();
    }
  };
  return (
    <div className="PostShare">
      <Image
        className="ProfilePic2"
        cloudName="dufov2soa"
        publicId={
          user.profilePicture ? user.profilePicture : "defaultProfile_qu4khz"
        }
        alt="profile-picture"
      />
      <div className="inp-container">
        <input
          type="text"
          name=""
          id=""
          placeholder="What's happening?"
          className="inp-happening"
          ref={desc}
          required
        />
        <div className="postOptions">
          <div
            className="option photo"
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option video">
            <UilPlayCircle />
            Video
          </div>
          <div className="option location">
            <UilLocationPoint />
            Location
          </div>
          <div className="option schedule">
            <UilSchedule />
            Schedule
          </div>
          <button className="button ps-button" onClick={handleSubmit}>
            Share
          </button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
