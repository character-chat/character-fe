import axios from "axios";
import { initScriptLoader } from "next/script";
import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import {
  addChatList,
  updateCurrentChatCharacter,
  updateHistory,
  addHistory,
  updateCurrentMiddleBar,
  updateCurrentMainBox,
  addProfessionalChat
} from "../../../../../store/actions";

function Header({
  article,
  articleList,
  updateCurrentMiddleBar,
  updateCurrentMainBox,
  updateCurrentChatCharacter,
  addHistory,
  addProfessionalChat,
  userInfo,
  professionalChat,
}) {
  const currentChat = {
    characterGetDto: {
      characterId: article.articleId,
      name: article.title,
      avatar: "",
    },
    history: [],
  };

  const currentCharacter = {
    characterId: article.articleId,
    name: article.title,
    time: "last 6 seconds",
    avatar: "",
  };

  const chatSummaryHandler = (articleName,articleId) => {
    const isProfessionalChat = professionalChat.find((item)=>{
      console.log(item.articleName)
      return item.articleName === articleName
    })

    if(isProfessionalChat){
      articleId = isProfessionalChat.professionalChatId.split('_')[1]
    }
    axios
      .get(
        `http://localhost:8080/api/v1/chat/professionalAssistant/user/1/${articleId}/summary`
      )
      .then((response) => {
        const responseHistory = response.data;
        console.log(responseHistory);
        addHistory(responseHistory);
      });
  };

  const chatQaHandler = (articleName,articleId) => {
    const isProfessionalChat = professionalChat.find((item)=>{
      console.log(item.articleName)
      return item.articleName === articleName
    })

    if(isProfessionalChat){
      articleId = isProfessionalChat.professionalChatId.split('_')[1]
    }
    
    axios
      .get(
        `http://localhost:8080/api/v1/chat/professionalAssistant/user/1/${articleId}/qa`
      )
      .then((response) => {
        const responseHistory = response.data;
        // const newHistoryResponse = [...history, ...responseHistory];
        console.log(responseHistory);
        addHistory(responseHistory);
      });
  };

  const chatHighlightHandler = (articleName,articleId) => {
    const isProfessionalChat = professionalChat.find((item)=>{
      console.log(item.articleName)
      return item.articleName === articleName
    })

    if(isProfessionalChat){
      articleId = isProfessionalChat.professionalChatId.split('_')[1]
    }

    axios
      .get(
        `http://localhost:8080/api/v1/chat/professionalAssistant/user/1/${articleId}/highlight`
      )
      .then((response) => {
        const responseHistory = response.data;
        // const newHistoryResponse = [...history, ...responseHistory];
        addHistory(responseHistory);
      });
  };

  const addProfessionalAssistantChat = (articleId,articleName) => {
    const professionalChatId = userInfo?.userId+'_'+articleId
    console.log(professionalChat)
    console.log(professionalChatId)

    const isProfessionalChat = professionalChat.find((item)=>{
      console.log(item.articleName)
      return item.articleName === articleName
    })

    if(isProfessionalChat){
      articleId = isProfessionalChat.professionalChatId.split('_')[1]
    }

    console.log(isProfessionalChat)
    console.log(articleId)

    if(!isProfessionalChat){
      const professionalAssistantChat = {
        professionalChatId: professionalChatId,
        articleName: articleName,
        notificationNumber: 0,
        isInBox: false,
        isTop: false,
        isDelete: false,
      }
      addProfessionalChat(professionalAssistantChat)
      axios.post(`http://localhost:8080/api/v1/chat/professionalAssistant/user/1/${articleId}/${articleName}`)
    }
  }

  return (
    <div className="chat-header border-bottom py-xl-4 py-md-3 py-2">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-8 col-xl-8">
            <div className="w-100">
              <h2>{article?.title}</h2>
            </div>
          </div>

          <div className="col-3 col-xl-4 text-end">
            <ul className="nav justify-content-end">
              <li className="nav-item list-inline-item add-user-btn">
                <a
                  href="#"
                  className="nav-link text-muted px-3"
                  title="Add Account"
                >
                  <i className="zmdi zmdi-account-add zmdi-hc-lg"></i>
                </a>
              </li>
              <Button
                className="rounded"
                onClick={() => {
                  updateCurrentMiddleBar("RecentChat");
                  updateCurrentMainBox("RecentChat");
                  updateCurrentChatCharacter(currentCharacter),
                  addProfessionalAssistantChat(article.articleId,article.title),
                  chatSummaryHandler(article.title,article.articleId)
                  chatQaHandler(article.title,article.articleId),
                  chatHighlightHandler(article.title,article.articleId)
                }}
              >
                Chat
              </Button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentChatCharacter: state.currentChatCharacter,
    currentChatList: state.currentChatList,
    history: state.history,
    articleList: state.articleList,
    addProfessionalChat: state.addProfessionalChat,
    userInfo: state.userInfo,
    professionalChat: state.professionalChat
  };
};

const mapDispatchToProps = {
  addChatList,
  updateCurrentMiddleBar,
  updateCurrentMainBox,
  updateCurrentChatCharacter,
  updateHistory,
  addHistory,
  addProfessionalChat
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
