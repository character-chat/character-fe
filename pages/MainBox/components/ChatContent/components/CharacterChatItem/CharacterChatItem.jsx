import React from "react";
import CharacterChatItemContent from "./components/CharacterChatItemContent";

function CharacterChatItem({avatar}) {
  return (
    <li className="d-flex message">
      <div className="mr-lg-3 me-2">
        <img
          className="avatar sm rounded-circle"
          src={avatar}
          alt="avatar"
        />
      </div>

      <div className="message-body">
        <span className="date-time text-muted">Michelle, 7:19 PM</span>
        <CharacterChatItemContent/>
      </div>
    </li>
  );
}

export default CharacterChatItem;
