import React from "react";

function ContactItem({ currentCharacter, setCurrentChatCharacter }) {
  const { name, time, history, avatar } = currentCharacter;
  return (
    <li>
      <div className="hover_action">
        <button type="button" className="btn btn-link text-info">
          <i className="zmdi zmdi-eye"></i>
        </button>
        <button type="button" className="btn btn-link text-warning">
          <i className="zmdi zmdi-star"></i>
        </button>
        <button type="button" className="btn btn-link text-danger">
          <i className="zmdi zmdi-delete"></i>
        </button>
      </div>
      <a href="#" className="card">
        <div className="card-body" onClick={()=>{setCurrentChatCharacter(currentCharacter)}}>
          <div className="media">
            <div className="avatar me-3">
              <img
                className="avatar rounded-circle"
                src={avatar}
                alt="avatar"
              />
            </div>
            <div className="media-body overflow-hidden">
              <div className="d-flex align-items-center mb-1">
                <h6 className="text-truncate mb-0 me-auto">{name}</h6>
              </div>
              <div className="text-truncate">{time}</div>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
}

export default ContactItem;
