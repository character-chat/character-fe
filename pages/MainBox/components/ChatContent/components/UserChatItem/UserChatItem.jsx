import React from "react";
import UserChatItemContent from './components/UserChatItemContent'

function UserChatItem(props) {
  return (
    <li className="d-flex message right">
      <div className="message-body">
        <span className="date-time text-muted">
          7:19 PM <i className="zmdi zmdi-check-all text-primary"></i>
        </span>
        <UserChatItemContent />
      </div>
    </li>
  );
}

export default UserChatItem;
