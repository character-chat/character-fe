import DefaultChatReminder from "../../components/DefaultChatReminder";
import ChatHeader from './components/ChatHeader'
import ChatContent from './components/ChatContent'
import ChatInput from './components/ChatInput'
import { useState } from "react";


export const MainBox = ({currentChatCharacter}) => {
  const {id,name,time,history,avatar} = currentChatCharacter
  const [mockHistory, setMockHistory] = useState([
    {historyId: 1, sender:'cxc', type: 'user', content:['hello','today is sunny day'], time:'7:00 PM'},
    {historyId: 2, sender:'Musk', type: 'character', content:['Yeah, what a nice day!'], time:'7:01 PM'},
    {historyId: 3, sender:'cxc', type: 'user', content:['I want to eat noodles'], time:'7:03 PM'},
    {historyId: 4, sender:'Musk', type: 'character', content:['what kind of noodles do you like?','LanZhou beef noodles is a good choice'], time:'7:05 PM'},
    {historyId: 5, sender:'cxc', type: 'user', content:['emmmmm...... I dont known'], time:'7:07 PM'},
    {historyId: 6, sender:'Musk', type: 'character', content:['Ok','what about ChongQing noodles??'], time:'7:10 PM'}
  ])

  return (
    <div className="main px-xl-5 px-lg-4 px-3">
      <div className="chat-body">
        <ChatHeader name={name} avatar={avatar} time={time}/>
        <ChatContent chatHistoryArray={mockHistory} avatar={avatar}/>
        <ChatInput setMockHistory={setMockHistory}/>
      </div>
    </div>
  );
};

export default MainBox;
