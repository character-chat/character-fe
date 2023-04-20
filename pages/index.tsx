import SideBar from "../components/SideBar";
import RecentChat from "../components/MiddleBar/RecentChat";
import Contact from "../components/MiddleBar/Contact";

import MainBox from "../components/MainBox";
import DefaultChatReminder from "../components/DefaultChatReminder";
import CharacterSet from "../components/MainBox/CharacterSet"
import ToolColumn from "../components/ToolColumn";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from 'next/dynamic'


export default function Home() {
  const [currentChatCharacter, setCurrentChatCharacter] = useState();
  const [currentMiddleBar, setCurrentMiddleBar] = useState('');
  const [currentMainBox, setCurrentMainBox] = useState('');

  const currentMiddleBarContent = () => {
    switch (currentMiddleBar) {
      case 'RecentChat':
        return <RecentChat setCurrentChatCharacter={setCurrentChatCharacter}/>
      default:
        return <Contact setCurrentChatCharacter={setCurrentChatCharacter}/>
    }
  }

  const currentMainBoxContent = () => {
    switch (currentMainBox) {
      case 'RecentChat':
        return currentChatCharacter === undefined ? (
          <DefaultChatReminder />
        ) :(<MainBox currentChatCharacter={currentChatCharacter}/>)
      case 'Contact':
        return currentChatCharacter === undefined ? (
          <DefaultChatReminder />
        ) :(<CharacterSet currentChatCharacter={currentChatCharacter}/>)
      default:
        return <DefaultChatReminder />
    }
  }

  return (
    <div className="App">
      <div id="layout" className="theme-cyan">
        <SideBar setCurrentMiddleBar={setCurrentMiddleBar} setCurrentChatCharacter={setCurrentChatCharacter} setCurrentMainBox={setCurrentMainBox}/>
        {currentMiddleBarContent()}
        {currentMainBoxContent()}
        <ToolColumn />
      </div>
    </div>
  );
}
