import React from "react";
import UserChatItemContent from './components/UserChatItemContent'

function UserChatItem({chatHistory}) {
  const {historyId, createTime, content, isBreak} = chatHistory

  const time = createTime.split(' ')[1]
  return (
    <li className="d-flex message right">
      <div className="message-body">
        {isBreak && <span className="date-time text-muted">
          {time}<i className="zmdi zmdi-check-all text-primary"></i>
        </span>}
       <UserChatItemContent key={historyId} content={content}/>
      </div>
    </li>
  );
}

export default UserChatItem;
