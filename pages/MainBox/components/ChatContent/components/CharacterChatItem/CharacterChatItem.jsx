import React from "react";
import CharacterChatItemContent from "./components/CharacterChatItemContent";

function CharacterChatItem({avatar, chatHistory}) {
  const {historyId, time, content} = chatHistory
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
        <span className="date-time text-muted">Michelle, {time}</span>
        {content.map((contentItem)=><CharacterChatItemContent key={historyId} content={contentItem}/>)}
      </div>
    </li>
  );
}

export default CharacterChatItem;
