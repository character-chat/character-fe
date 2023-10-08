import ChatHeader from './components/ChatHeader'
import ChatContent from './components/ChatContent'
import ChatInput from './components/ChatInput'
import { useEffect } from "react";
import axios from 'axios';
import { connect } from 'react-redux';
import {updateHistory} from "../../store/actions";
import ArticlePreview from "./ArticlePreView"
import { useState } from 'react';

const MainBox = ({currentChatCharacter, history, updateHistory,userInfo, currentArticle,isCheckArticle}) => {
  const {articleId, articleName, createTime, avatar} = currentChatCharacter
  
  const setHistory=(event)=>{
    updateHistory(event)
  }

  const getHistory = async function() {
    const res = await axios.get(`http://localhost:8080/api/v1/chat/professionalAssistantChat/user/${userInfo.userId}/${articleId}`)
    const data = res.data
    console.log(data)
    setHistory(data)
  }

  useEffect(()=>{
    getHistory()
  } ,[currentChatCharacter])

  useEffect(()=>{
    console.log(currentArticle)
  },[currentArticle])



  return (
    <>
    <div className={`main w-25 px-xl-5 px-lg-4 px-3`}>
      <div className="chat-body">
        <ChatHeader name={articleName} avatar={avatar} time={createTime} articleId={articleId}/>
        <ChatContent chatHistoryArray={history} name={articleName} avatar={avatar}/>
        <ChatInput setHistory={setHistory} currentChatCharacter={currentChatCharacter}/>
      </div>
    </div>

    {isCheckArticle && <ArticlePreview article={currentArticle} isComeFromChat={true}/>}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    currentChatCharacter: state.currentChatCharacter,
    history: state.history,
    userInfo: state.userInfo,
    currentArticle: state.currentArticle,
    isCheckArticle: state.isCheckArticle
  };
};

const mapDispatchToProps = {
  updateHistory,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainBox);
