import ChatHeader from './components/ChatHeader'
import ChatContent from './components/ChatContent'
import ChatInput from './components/ChatInput'
import { useEffect, useState } from "react";
import axios from 'axios';


export const MainBox = ({currentChatCharacter}) => {
  const {id, name,time, avatar} = currentChatCharacter
  const [history, setHistory] = useState([])

  const getHistory = async function() {
    const res = await axios.get(`http://localhost:8080/api/v1/chat/history/user/1?characterId=${id}`)
    const data = res.data
    setHistory(data)
  }

  useEffect(()=>{
    getHistory()
  } ,[currentChatCharacter])

  return (
    <div className="main px-xl-5 px-lg-4 px-3">
      <div className="chat-body">
        <ChatHeader name={name} avatar={avatar} time={time}/>
        <ChatContent chatHistoryArray={history} name={name} avatar={avatar}/>
        <ChatInput setHistory={setHistory} currentChatCharacter={currentChatCharacter}/>
      </div>
    </div>
  );
};

export default MainBox;
