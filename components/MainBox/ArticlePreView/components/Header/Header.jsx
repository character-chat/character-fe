import axios from "axios";
import React from "react";
import { Button } from 'react-bootstrap';
import { connect } from "react-redux";
import {addChatList} from "../../../../../store/actions";
import {updateCurrentMiddleBar} from "../../../../../store/actions";
import {updateCurrentMainBox} from "../../../../../store/actions";
import {updateCurrentChatCharacter} from "../../../../../store/actions";


function Header({article, addChatList,updateCurrentMiddleBar,updateCurrentMainBox,updateCurrentChatCharacter}) {
  const currentChat = {characterGetDto:{characterId:article.articleId,name:article.title,avatar:''},history:[]};
  const  currentCharacter =
  {
    characterId: article.articleId,
    name: article.title,
    time: "last 6 seconds",
    avatar:
      "",
  }
  const initialChat = (async ()=>{
    await axios.post(`http://localhost:8080/api/v1/chat/user/${currentCharacter.characterId}`);
  })

  return (
    <div className="chat-header border-bottom py-xl-4 py-md-3 py-2">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-8 col-xl-8">
            <div className="w-100"><h2>{article?.title}</h2></div>
          </div>

          <div className="col-3 col-xl-4 text-end">
            <ul className="nav justify-content-end">
       
              <li className="nav-item list-inline-item add-user-btn">
                <a
                  href="#"
                  className="nav-link text-muted px-3"
                  title="Add Account"
                >
                  <i className="zmdi zmdi-account-add zmdi-hc-lg"></i>
                </a>
              </li>
              <Button className="rounded" onClick={()=>{addChatList(currentChat);updateCurrentMiddleBar('RecentChat');updateCurrentMainBox('RecentChat');updateCurrentChatCharacter(currentCharacter),initialChat()}}>Chat</Button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentChatCharacter: state.currentChatCharacter,
    currentChatList: state.currentChatList
  };
};

const mapDispatchToProps = {
  addChatList,
  updateCurrentMiddleBar,
  updateCurrentMainBox,
  updateCurrentChatCharacter
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

