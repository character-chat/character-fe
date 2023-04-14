import SideBar from "../components/SideBar";
import Contact from "./MiddleBar/Contact";
import MainBox from "./MainBox";
import DefaultChatReminder from "../components/DefaultChatReminder";
import CharacterSet from "./CharacterSet"
import ToolColumn from "../components/ToolColumn";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentChatCharacter, setCurrentChatCharacter] = useState();

  return (
    <div className="App">
      <div id="layout" className="theme-cyan">
        <SideBar />
        <Contact setCurrentChatCharacter={setCurrentChatCharacter} />
        {currentChatCharacter === undefined ? (
          <DefaultChatReminder />
        ) :(<CharacterSet currentChatCharacter={currentChatCharacter}/>)}
        {/* {currentChatCharacter === undefined ? (
          <DefaultChatReminder />
        ) : (
          <MainBox currentChatCharacter={currentChatCharacter} />
        )} */}
        <ToolColumn />
      </div>
    </div>
  );
}
