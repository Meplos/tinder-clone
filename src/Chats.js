import React from "react";
import "./Chats.css";
import ChatRow from "./ChatRow";
const Chats = () => {
  return (
    <div>
      <ChatRow
        name="Bill"
        message="Yo what's up ? "
        timestamp="40 seconds ago"
        profilepic="https://img-0.journaldunet.com/wqqB5hyWXIRpmixAXpbZfJUVhXc=/931x/smart/206e2137b616429dbdfb0260326abcdc/ccmcms-jdn/11547842.jpg"
      />
      <ChatRow
        name="Jeff"
        message="Yo what's up ? "
        timestamp="40 seconds ago"
      />
      <ChatRow
        name="Steve"
        message="Yo what's up ? "
        timestamp="40 seconds ago"
        profilepic="https://www.biography.com/.image/t_share/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg"
      />
      <ChatRow
        name="Mark"
        message="Yo what's up ? "
        timestamp="40 seconds ago"
      />
    </div>
  );
};

export default Chats;
