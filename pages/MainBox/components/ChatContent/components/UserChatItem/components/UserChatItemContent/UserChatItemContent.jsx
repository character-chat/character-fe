import React from "react";

function UserChatItemContent(props) {
  return (
    <div className="message-row d-flex align-items-center justify-content-end">
      <div className="dropdown">
        <a
          className="text-muted me-1 p-2 text-muted"
          href="#"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="zmdi zmdi-more-vert"></i>
        </a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">
            Edit
          </a>
          <a className="dropdown-item" href="#">
            Share
          </a>
          <a className="dropdown-item" href="#">
            Delete
          </a>
        </div>
      </div>

      <div className="message-content border p-3">Hello, David</div>
    </div>
  );
}

export default UserChatItemContent;
