import React from 'react';
import UserChatItem from './components/UserChatItem'
import TimeSplitLine from '../TimeSplitLine';
import CharacterChatItem from './components/CharacterChatItem';

function ChatContent({chatHistory, avatar}) {
    return (
        <div className="chat-content">
          <div className="container-xxl">
            <ul className="list-unstyled py-4">
              <UserChatItem />
              <UserChatItem />
              <UserChatItem />

              <CharacterChatItem avatar={avatar}/>
              <TimeSplitLine />    
            </ul>
          </div>
        </div>
    );
}

export default ChatContent;