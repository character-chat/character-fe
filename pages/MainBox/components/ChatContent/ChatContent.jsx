import React from 'react';
import UserChatItem from './components/UserChatItem'
import TimeSplitLine from '../TimeSplitLine';
import CharacterChatItem from './components/CharacterChatItem';

function ChatContent({chatHistoryArray, avatar}) {
    return (
        <div className="chat-content">
          <div className="container-xxl">
            <ul className="list-unstyled py-4">
              {chatHistoryArray.map((history)=>{
                if(history.type==='user'){
                  return( <UserChatItem key={history.historyId} chatHistory={history}/>)
                }
                return(<CharacterChatItem key={history.historyId} chatHistory={history} avatar={avatar}/>)
              })}
            </ul>
          </div>
        </div>
    );
}

export default ChatContent;