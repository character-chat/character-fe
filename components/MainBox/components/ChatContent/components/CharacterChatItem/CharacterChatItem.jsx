import React from "react";
import CharacterChatItemContent from "./components/CharacterChatItemContent";
import SummaryChatItemContent from "./components/SummaryChatItemContent";
import QAChatItemContent from "./components/QAChatItemContent ";
import HighlightChatItemContent from "./components/HighlightChatItemContent";




function CharacterChatItem({name, avatar, chatHistory}) {
  const {historyId, createTime, content, isBreak, professionalResponseType} = chatHistory
  const time = createTime?.split(' ')[1]

  const responseStyleController = (professionalResponseType) => {
    switch (professionalResponseType) {
      case "SUMMARY":
        return <SummaryChatItemContent key={historyId} content={content}/>;
      case "QA":
        return <QAChatItemContent key={historyId} history={chatHistory}/>;
      case "HIGHLIGHT":
        return <HighlightChatItemContent key={historyId} history={chatHistory}/>;
      default:
        return (
          <CharacterChatItemContent key={historyId} content={content}/>
        );
    }
  };

  return (
    <li className="d-flex message">
      <div className="mr-lg-3 me-2">
        <img
          className="avatar sm rounded-circle"
          src={avatar}
          alt="avatar"
        />
      </div>

      <div className="message-body">
        {isBreak && <span className="date-time text-muted">{name}, {time}</span>}
        {responseStyleController(professionalResponseType)}
      </div>
    </li>
  );
}

export default CharacterChatItem;
