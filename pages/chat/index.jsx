import SideBar from "../../components/SideBar";
import RecentChat from "../../components/MiddleBar/RecentChat";
import Contact from "../../components/MiddleBar/Contact";
import Article from "../../components/MiddleBar/Article";

import MainBox from "../../components/MainBox";
import DefaultChatReminder from "../../components/DefaultChatReminder";
import CharacterSet from "../../components/MainBox/CharacterSet";
import ArticlePreView from "../../components/MainBox/ArticlePreView";
import ToolColumn from "../../components/ToolColumn";
import { connect } from "react-redux";
import { updateUserInfo, updateIsCheckArticle} from "../../store/actions";
import { useEffect } from "react";

function Home({
  currentChatInfo,
  currentMiddleBar,
  currentMainBox,
  currentArticle,
  updateIsCheckArticle,
}) {
  const currentMiddleBarContent = () => {
    switch (currentMiddleBar) {
      case "Article":
        return <Article />;
      case "RecentChat":
        return <RecentChat />;
      default:
        return <Contact />;
    }
  };

  const currentMainBoxContent = () => {
    switch (currentMainBox) {
      case "RecentChat":
        return currentChatInfo === undefined ? (
          <DefaultChatReminder />
        ) : (
          <MainBox currentChatInfo={currentChatInfo} />
        );
      case "Contact":
        return currentChatInfo === undefined ? (
          <DefaultChatReminder />
        ) : (
          <CharacterSet currentChatInfo={currentChatInfo} />
        );
      case "Article":
        return currentArticle === "" ? (
          <DefaultChatReminder />
        ) : (
          <ArticlePreView article={currentArticle} />
        );
      default:
        return <DefaultChatReminder />;
    }
  };

  useEffect(()=>{updateIsCheckArticle(false)},[currentMainBox,currentMiddleBar,currentChatInfo])


  return (
    <div className="App">
      <div id="layout" className="theme-cyan">
        <SideBar />
        {currentMiddleBarContent()}
        {currentMainBoxContent()}
        <ToolColumn />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentChatInfo: state.currentChatInfo,
    currentMiddleBar: state.currentMiddleBar,
    currentMainBox: state.currentMainBox,
    currentArticle: state.currentArticle,
    userInfo: state.userInfo,
  };
};

const mapDispatchToProps = {
  updateUserInfo,
  updateIsCheckArticle  
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
