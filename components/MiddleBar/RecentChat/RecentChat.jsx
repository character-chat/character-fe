import axios from "axios";
import {useEffect} from "react";
import { connect } from "react-redux";
import { updateCurrentChatCharacter,updateProfessionalChatList } from "../../../store/actions";
import RecentChatItem from "./components/RecentChatItem"

const RecentChat = ({
  updateCurrentChatCharacter,
  professionalChat,
  updateProfessionalChatList,
  userInfo,
  isCheckArticle
}) => {
  const setCurrentChatCharacter = (event) => {
    updateCurrentChatCharacter(event);
  };


  useEffect(()=>{
    const fetchCurrentChat = async ()=>{
      const fetchedData = await axios.get(`http://localhost:8080/api/v1/chat/professionalAssistantChat/user/${userInfo.userId}`)
      console.log(fetchedData.data)
      updateProfessionalChatList(fetchedData.data)
    }
    fetchCurrentChat()
  },[])

  return (
    <div className={`sidebar border-end py-xl-4 py-3 px-xl-4 px-3 ${isCheckArticle? 'w-15': ''}`}>
      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="nav-tab-chat"
          role="tabpanel"
        >
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="mb-0 text-primary">Chat</h3>
            <div>
              <button className="btn btn-dark" type="button">
                New Chat
              </button>
            </div>
          </div>

          <div className="form-group input-group-lg search mb-3">
            <i className="zmdi zmdi-search"></i>
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
            />
          </div>

          <ul className="chat-list">
            <li className="header d-flex justify-content-between ps-3 pe-3 mb-1">
              <span>RECENT CHATS</span>
              <div className="dropdown">
                <a
                  className="btn btn-link px-1 py-0 border-0 text-muted dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="zmdi zmdi-filter-list"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
            </li>
            <li>
              <a href="bot-chat.html" className="card">
                <div className="card-body">
                  <div className="media">
                    <div className="avatar me-3">
                      <div className="avatar rounded-circle no-image bg-primary text-light">
                        <span>
                          <i className="zmdi zmdi-comment-text"></i>
                        </span>
                      </div>
                    </div>
                    <div className="media-body overflow-hidden">
                      <div className="d-flex align-items-center mb-1">
                        <h6 className="text-truncate mb-0 me-auto">
                          Support ChatBot
                        </h6>
                      </div>
                      <div className="text-truncate">
                        <i className="zmdi zmdi-circle text-success"></i> Online
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            {professionalChat.map((professionalChatItem) => (
              <RecentChatItem key={professionalChatItem.professionalChatId}  professionalChatItem={professionalChatItem} setCurrentChatCharacter={setCurrentChatCharacter} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentChatCharacter: state.currentChatCharacter,
    currentChatList: state.currentChatList,
    professionalChat: state.professionalChat,
    userInfo: state.userInfo,
    isCheckArticle: state.isCheckArticle,
  };
};

const mapDispatchToProps = {
  updateCurrentChatCharacter,
  updateProfessionalChatList
};

export default connect(mapStateToProps, mapDispatchToProps)(RecentChat);
