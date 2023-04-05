import DefaultChatReminder from "../../components/DefaultChatReminder";
import ChatHeader from './components/ChatHeader'
import ChatContent from './components/ChatContent'
import ChatInput from './components/ChatInput'


export const MainBox = ({currentChatCharacter}) => {
  const {id,name,time,history,avatar} = currentChatCharacter

  return (
    <div className="main px-xl-5 px-lg-4 px-3">
      <div className="chat-body">
        <ChatHeader name={name} avatar={avatar} time={time}/>
        <ChatContent chatHistory={history} avatar={avatar}/>
        <ChatInput />
      </div>
    </div>
  );
};

export default MainBox;
