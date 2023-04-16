import React from "react";
import { useNavigate } from "react-router-dom";
import { ChatBubbleLeftRightIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { Button } from "react-chat-engine-advanced";

const CustomerHeader = ({ chat, setUser, setSecret }) => {
  const navigate = useNavigate();

  const handelLogout = () => {
    setUser(null);
    setSecret(null);
    navigate("/");
  };
  return (
    <div className="chat-header">
      <div className="flexbetween">
        <ChatBubbleLeftRightIcon className="icon-chat" />
        <h3 className="header-text">{chat.title}</h3>
      </div>
      <div className="flexbetween">
        {/* <PhoneIcon className="icon-phone" /> */}
        <Button className="" onClick={handelLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default CustomerHeader;
