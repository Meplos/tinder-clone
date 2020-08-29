import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { name: "Ellen", image: "...", message: "Yo what's up?" },
    { name: "Ellen", image: "...", message: "Are U here? " },
    { message: "Hows it going! " },
  ]);

  const handleClick = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        You matched with Ellen on 10/08/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen_text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen_textUser">{message.message}</p>
          </div>
        )
      )}
      <div>
        <form className="chatScreen__input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chatScreen__inputField"
            type="text"
            placeholder="Enter a message"
          />
          <button
            onClick={handleClick}
            type="submit"
            className="chatScreen__inputButton"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
