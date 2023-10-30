import React from "react";
import "./RightSide.css";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../TrendCard/TrendCard";
import PostShare from "../PostShare/PostShare";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import { Link } from "react-router-dom";

const RightSide = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="RightSide">
      <div className="navIcons">
        <Link to="/home">
          <img src={Home} alt="home" />
        </Link>
        <UilSetting />
        <img src={Noti} alt="notification" />
        <img src={Comment} alt="comment" />
      </div>
      <TrendCard />
      <Button className="button r-button" onClick={open}>
        Share
      </Button>
      <ShareModal open={open} opened={opened} close={close} />
      <Button className="button r-button" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

function ShareModal({ open, opened, close }) {
  const isMobile = window.innerWidth <= 767;

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Edit your info"
        size={isMobile ? "95%" : "40%"}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <PostShare />
      </Modal>
    </>
  );
}

function handleLogout() {
  localStorage.clear();
  window.location.reload();
}
export default RightSide;
