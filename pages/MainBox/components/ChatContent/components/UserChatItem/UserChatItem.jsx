import React from "react";
import UserChatItemContent from './components/UserChatItemContent'

function UserChatItem({chatHistory}) {
  const {historyId, time, content} = chatHistory
  return (
    <li className="d-flex message right">
      <div className="message-body">
        <span className="date-time text-muted">
          {time}<i className="zmdi zmdi-check-all text-primary"></i>
        </span>
        {content.map((contentItem)=><UserChatItemContent key={historyId} content={contentItem}/>)}
      </div>
    </li>
  );
}

export default UserChatItem;
