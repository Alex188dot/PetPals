import React, { useRef, useState, useEffect } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as UserApi from "../../api/UserRequest.js";
import { uploadImage } from "../../actions/uploadAction";
import { updateUser } from "../../actions/UserAction";
import axios from "axios";

const InfoCard = () => {
  const params = useParams();
  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState({});
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
      } else {
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser);
      }
    };
    fetchProfileUser();
  }, [user]);

  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Profile info</h4>
        {user._id === profileUserId ? (
          <div>
            <ProfileModal data={user} />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="info">
        <span>
          <b>Pet: </b>
        </span>
        <span>{profileUser.pet}</span>
      </div>
      <div className="info">
        <span>
          <b>From: </b>
        </span>
        <span>{profileUser.from}</span>
      </div>
      <div className="info">
        <span>
          <b>Member since: </b>
        </span>
        <span>{profileUser.memberSince}</span>
      </div>
      <div className="btn-container">
        <button className="button logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

function handleLogout() {
  localStorage.clear();
  window.location.reload();
}

function ProfileModal({ data }) {
  const [opened, { open, close }] = useDisclosure(false);
  const buttonRef = useRef();
  const isMobile = window.innerWidth <= 767;
  const { password, ...other } = data;
  const [formData, setFormData] = useState(other);
  const [profilePicture, setProfilePicture] = useState(null);
  const [coverPicture, setCoverPicture] = useState(null);
  const dispatch = useDispatch();
  const param = useParams();
  const { user } = useSelector((state) => state.authReducer.authData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      if (e.target.name === "profilePicture") {
        setProfilePicture(img);
      } else if (e.target.name === "coverPicture") {
        setCoverPicture(img);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let UserData = formData;

    if (profilePicture) {
      const data = new FormData();
      const fileName = Date.now() + profilePicture.name;
      data.append("name", fileName);
      data.append("file", profilePicture);
      data.append("upload_preset", "pet_pals");
      axios
        .post("https://api.cloudinary.com/v1_1/dufov2soa/image/upload", data)
        .then((res) => {
          UserData.profilePicture = res.data.public_id;
          dispatch(uploadImage(data));
          dispatch(updateUser(param.id, UserData));
        })
        .catch((error) => {
          console.log(error);
        });

      if (coverPicture) {
        const data = new FormData();
        const fileName = Date.now() + coverPicture.name;
        console.log(fileName);
        console.log(data);
        data.append("name", fileName);
        data.append("file", coverPicture);
        data.append("upload_preset", "pet_pals");
        axios
          .post("https://api.cloudinary.com/v1_1/dufov2soa/image/upload", data)
          .then((res) => {
            UserData.coverPicture = res.data.public_id;
            console.log(res);
            console.log(res.data.public_id);
            dispatch(uploadImage(data));
            dispatch(updateUser(param.id, UserData));
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
    dispatch(updateUser(param.id, UserData));

    close();
  };

  return (
    <>
      <Modal
        className="infoModal"
        opened={opened}
        onClose={close}
        title="Edit your info"
        size={isMobile ? "95%" : "40%"}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <form className="infoForm">
          <h3>Your info</h3>
          <div className="infoForm">
            <input
              className="infoInput"
              type="text"
              name="firstName"
              id=""
              placeholder="First Name"
              style={{ marginBottom: "-1rem" }}
              onChange={handleChange}
              value={formData.firstName}
            />
            <input
              className="infoInput"
              type="text"
              name="lastName"
              id=""
              placeholder="Last Name"
              onChange={handleChange}
              value={formData.lastName}
            />
          </div>
          <div className="infoForm">
            <input
              className="infoInput"
              type="text"
              name="about"
              id=""
              placeholder="About"
              style={{ marginTop: "-1rem", width: "100%" }}
              onChange={handleChange}
              value={formData.about}
            />
          </div>
          <div className="infoForm">
            <input
              className="infoInput"
              type="text"
              name="pet"
              id=""
              placeholder="Pet"
              style={{ marginTop: "-1rem", width: "100%" }}
              onChange={handleChange}
              value={formData.pet}
            />
          </div>
          <div className="infoForm">
            <input
              className="infoInput"
              type="text"
              name="from"
              id=""
              placeholder="From"
              style={{ marginTop: "-1rem" }}
              onChange={handleChange}
              value={formData.from}
            />
            <input
              className="infoInput"
              type="text"
              name="memberSince"
              id=""
              placeholder="Member since"
              style={{ marginTop: "-1rem" }}
              onChange={handleChange}
              value={formData.memberSince}
            />
          </div>
          <div className="infoForm">
            <span>Profile Image</span>
            <input
              type="file"
              name="profilePicture"
              id=""
              onChange={onImageChange}
            />
          </div>
          <div className="infoForm">
            <span>Cover Image</span>
            <input
              type="file"
              name="coverPicture"
              id=""
              onChange={onImageChange}
            />
          </div>
          <button className="button infoButton" onClick={handleSubmit}>
            Update Info
          </button>
        </form>
      </Modal>
      <Button
        style={{ display: "none" }}
        onClick={open}
        ref={buttonRef}
      ></Button>{" "}
      <UilPen
        width="2rem"
        height="1.1rem"
        onClick={() => buttonRef.current.click()}
      />
    </>
  );
}

export default InfoCard;
