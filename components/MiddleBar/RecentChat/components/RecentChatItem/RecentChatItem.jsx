import axios from "axios";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

const RecentChatItem = ({ professionalChatItem, setCurrentChatCharacter,userInfo}) => {
  const [lastChat, setLastChat] = useState("");

  const currentChatInfo={
    chatId: professionalChatItem.articleId,
    chatType: "PROFESSIONAL",
    chatTitle: professionalChatItem.articleName,
    createTime: professionalChatItem.createTime,
    avatar: professionalChatItem.avatar,
  }

  useEffect(() => {
    const fetchLastChat = async () => {
      const chat = await axios.get(
        `http://localhost:8080/api/v1/chat/professionalAssistant/user/${userInfo.userId}/${professionalChatItem.articleId}/last`
      );
      console.log(chat)
      setLastChat(chat.data);
    };

    fetchLastChat()
  }, []);

  return (
    <div>
      <li
        key={professionalChatItem.professionalChatId}
        className="online"
        onClick={() => {
          setCurrentChatCharacter(currentChatInfo);
        }}
      >
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
          <div className="card-body">
            <div className="media">
              <div className="avatar me-3">
                <div className="avatar rounded-circle no-image bg-info text-light">
                  <img
                    className="rounded-circle no-image bg-info text-light"
                    src={`images/${professionalChatItem.avatar}`}
                  />
                </div>
              </div>

              <div className="media-body overflow-hidden">
                <div className="d-flex align-items-center mb-1">
                  <h6 className="text-truncate mb-0 me-auto">
                    {professionalChatItem.articleName}
                  </h6>
                  <p className="small text-muted text-nowrap ms-4 mb-0">
                    {professionalChatItem.createTime}
                  </p>
                </div>
                <div className="text-truncate">
                  {lastChat.content}
                </div>
              </div>
            </div>
          </div>
        </a>
      </li>
    </div>
  );
};

const mapStateToProps = (state)=>{
    return{
        userInfo: state.userInfo
    }
}

const mapDispatchToProps = () =>{

}

export default connect(mapStateToProps,mapDispatchToProps)(RecentChatItem);

