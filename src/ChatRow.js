import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatRow.css";
import { Link } from "react-router-dom";
const ChatRow = ({ name, message, timestamp, profilepic }) => {
  return (
    <Link to={`/chats/${name}`}>
      <div className="chatRow">
        <Avatar className="chatRow__image" alt={name} src={profilepic} />
        <div className="chatRow__details">
          <h2> {name}</h2>
          <p>{message}</p>
        </div>
        <p className="chatRow__timestamp">{timestamp}</p>
      </div>
    </Link>
  );
};

export default ChatRow;
