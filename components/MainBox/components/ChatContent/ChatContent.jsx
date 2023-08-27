import React from 'react';
import UserChatItem from './components/UserChatItem'
import CharacterChatItem from './components/CharacterChatItem';

function ChatContent({chatHistoryArray, avatar, name}) {
    console.log(chatHistoryArray)
    return (
        <div className="chat-content">
          <div className="container-xxl">
            <ul className="list-unstyled py-4">
              {chatHistoryArray?.map((history)=>{
                console.log(history)

                console.log(history.senderType)
                if(history.senderType==='ASSISTANT'){
                  return(<CharacterChatItem key={history.historyId} chatHistory={history} name={name} avatar={avatar}/>)
                }
                return( <UserChatItem key={history.historyId} chatHistory={history}/>)
              })}
            </ul>
          </div>
        </div>
    );
}

export default ChatContent;