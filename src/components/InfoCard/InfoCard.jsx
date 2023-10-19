import React, { useRef } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";

const InfoCard = () => {
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your info</h4>
        <div>
          <ProfileModal />
        </div>
      </div>
      <div className="info">
        <span>
          <b>Pet: </b>
        </span>
        <span>Dog</span>
      </div>
      <div className="info">
        <span>
          <b>From: </b>
        </span>
        <span>Boston</span>
      </div>
      <div className="info">
        <span>
          <b>Member since: </b>
        </span>
        <span>2019</span>
      </div>
      <div className="btn-container">
        <button className="button logout-button">Logout</button>
      </div>
    </div>
  );
};

function ProfileModal() {
  const [opened, { open, close }] = useDisclosure(false);
  const buttonRef = useRef();

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Edit your info"
        size="40%"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <form className="infoForm">
          <h3>Your info</h3>
          <div>
            <input
              className="infoInput"
              type="text"
              name="firstName"
              id=""
              placeholder="First Name"
              style={{ marginRight: "1rem" }}
            />
            <input
              className="infoInput"
              type="text"
              name="lastName"
              id=""
              placeholder="Last Name"
              style={{ marginLeft: "1rem" }}
            />
          </div>
          <div>
            <input
              className="infoInput"
              type="text"
              name="pet"
              id=""
              placeholder="Pet"
              style={{ marginTop: "-1rem", width: "100%" }}
            />
          </div>
          <div>
            <input
              className="infoInput"
              type="text"
              name="from"
              id=""
              placeholder="From"
              style={{ marginRight: "1rem", marginTop: "-1rem" }}
            />
            <input
              className="infoInput"
              type="text"
              name="memberSince"
              id=""
              placeholder="Member since"
              style={{ marginLeft: "1rem", marginTop: "-1rem" }}
            />
          </div>
          <div>
            <span style={{ marginRight: "1rem" }}>Profile Image</span>
            <input type="file" name="profileImg" id="" />
          </div>
          <div>
            <span style={{ marginRight: "1rem" }}>Cover Image</span>
            <input type="file" name="coverImg" id="" />
          </div>
          <button className="button infoButton">Update Info</button>
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
