import axios from "axios";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

const GroupChatItem = ({
  groupChatItem,
  setCurrentChatCharacter,
  userInfo,
}) => {
  const [lastChat, setLastChat] = useState("");

  const currentChatInfo={
    chatId: groupChatItem.groupId,
    chatType: "GROUP",
    chatTitle: groupChatItem.groupChatName,
    groupMembers: groupChatItem.members,
  }

  useEffect(() => {
    const fetchLastChat = async () => {
      const chat = await axios.get(
        `http://localhost:8080/api/v1/chat/professionalAssistant/user/${userInfo.userId}/${groupChatItem.articleId}/last`
      );
      console.log(chat);
      setLastChat(chat.data);
    };

    fetchLastChat();
  }, []);

  return (
    <div>
      <li
        key={groupChatItem.groupId}
        className="online"
        onClick={() => {
          // adjust groupchatItem
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
                <span className="status rounded-circle"></span>
                <div className="avatar rounded-circle no-image timber">
                  <span>{groupChatItem.groupChatName[0].toUpperCase()}</span>
                </div>
              </div>
              <div className="media-body overflow-hidden">
                <div className="d-flex align-items-center mb-1">
                  <h6 className="text-truncate mb-0 me-auto">
                    {groupChatItem.groupChatName}
                  </h6>
                  <p className="small text-muted text-nowrap ms-4 mb-0">
                    11:08 am
                  </p>
                </div>
                <div className="text-truncate">
                  <i className="zmdi zmdi-file-text me-1"></i> It is a long
                  established fact that a reader w...
                  <div className="avatar-list avatar-list-stacked mt-1">
                    {groupChatItem.members.map((member,index) => (
                           <img
                           className="avatar xs rounded"
                           src={`images/avatar${index+1}.jpg`}
                           data-toggle="tooltip"
                           data-placement="top"
                           title="Sean"
                         />
                    //   <div className="avatar xs rounded" key={member.articleId}>
                    //     <span className="status rounded-circle"></span>
                    //     <div className="avatar rounded-circle no-image timber">
                    //       <span>{member.title[0].toUpperCase()}</span>
                    //     </div>
                    //   </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </li>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo,
  };
};

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(GroupChatItem);
