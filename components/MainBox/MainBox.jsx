import ChatHeader from './components/ChatHeader'
import ChatContent from './components/ChatContent'
import ChatInput from './components/ChatInput'
import { useEffect } from "react";
import axios from 'axios';
import { connect } from 'react-redux';
import {updateHistory} from "../../store/actions";
import ArticlePreview from "./ArticlePreView"

const MainBox = ({currentChatInfo, history, updateHistory,userInfo, currentArticle,isCheckArticle}) => {
  const {chatId, chatTitle, createTime, avatar,chatType,groupMembers} = currentChatInfo
  console.log(chatId)
  
  const setHistory=(event)=>{
    updateHistory(event)
  }

  const getHistory = async function() {
    const res = await axios.get(`http://localhost:8080/api/v1/chat/professionalAssistantChat/user/${userInfo.userId}/${chatId}`)
    const data = res.data
    console.log(data)
    setHistory(data)
  }

  useEffect(()=>{
    getHistory()
  } ,[currentChatInfo])

  useEffect(()=>{
    console.log(currentArticle)
  },[currentArticle])

  return (
    <>
    <div className={`main w-25 px-xl-5 px-lg-4 px-3`}>
      <div className="chat-body">
        <ChatHeader name={chatTitle} avatar={avatar} time={createTime} articleId={chatId} chatType={chatType} groupMemberNumber={groupMembers?.length} groupMembers={groupMembers}/>
        <ChatContent chatHistoryArray={history} name={chatTitle} avatar={avatar}/>
        <ChatInput setHistory={setHistory} currentChatInfo={currentChatInfo}/>
      </div>
    </div>

    {isCheckArticle && <ArticlePreview article={currentArticle} isComeFromChat={true}/>}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    currentChatInfo: state.currentChatInfo,
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
