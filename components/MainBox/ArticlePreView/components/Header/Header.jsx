import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Modal, Input } from "react-bootstrap";
import { connect } from "react-redux";
import {
  addChatList,
  updateCurrentChatCharacter,
  updateHistory,
  addHistory,
  updateCurrentMiddleBar,
  updateCurrentMainBox,
  addProfessionalChat,
  updateArticleList,
  updateGroupChatList,
  addGroupChatList,
} from "../../../../../store/actions";

function Header({
  article,
  updateCurrentMiddleBar,
  updateCurrentMainBox,
  updateCurrentChatCharacter,
  addHistory,
  addProfessionalChat,
  userInfo,
  professionalChatList,
  isComeFromChat = false,
  articleList,
  addGroupChatList,
}) {
  // states
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedArticles, setSelectedArticles] = useState([]);
  const [groupChatName, setGroupChatName] = useState("");

  useEffect(() => {
    console.log(groupChatName);
  }, [groupChatName]);

  // add selected article together
  const handleItemClick = (articleId) => {
    setSelectedArticles((prevSelected) => {
      if (prevSelected.includes(articleId)) {
        return prevSelected.filter((id) => id !== articleId);
      } else {
        return [...prevSelected, articleId];
      }
    });
  };

  useEffect(() => {
    console.log(selectedArticles);
  }, [selectedArticles]);

  // functions
  const chatSummaryHandler = (articleName, articleId) => {
    const isProfessionalChat = professionalChatList.find((item) => {
      console.log(item.articleName);
      return item.articleName === articleName;
    });

    if (isProfessionalChat) {
      articleId = isProfessionalChat.professionalChatId.split("_")[1];
    }
    axios
      .get(
        `http://localhost:8080/api/v1/chat/professionalAssistant/user/${userInfo.userId}/${articleId}/summary`
      )
      .then((response) => {
        const responseHistory = response.data;
        console.log(responseHistory);
        addHistory(responseHistory);
      });
  };

  const chatQaHandler = (articleName, articleId) => {
    const isProfessionalChat = professionalChatList.find((item) => {
      console.log(item.articleName);
      return item.articleName === articleName;
    });

    if (isProfessionalChat) {
      articleId = isProfessionalChat.professionalChatId.split("_")[1];
    }

    axios
      .get(
        `http://localhost:8080/api/v1/chat/professionalAssistant/user/${userInfo.userId}/${articleId}/qa`
      )
      .then((response) => {
        const responseHistory = response.data;
        // const newHistoryResponse = [...history, ...responseHistory];
        console.log(responseHistory);
        addHistory(responseHistory);
      });
  };

  const chatHighlightHandler = (articleName, articleId) => {
    const isProfessionalChat = professionalChatList.find((item) => {
      return item.articleName === articleName;
    });

    if (isProfessionalChat) {
      articleId = isProfessionalChat.professionalChatId.split("_")[1];
    }

    axios
      .get(
        `http://localhost:8080/api/v1/chat/professionalAssistant/user/${userInfo.userId}/${articleId}/highlight`
      )
      .then((response) => {
        const responseHistory = response.data;
        // const newHistoryResponse = [...history, ...responseHistory];
        addHistory(responseHistory);
      });
  };

  const addProfessionalAssistantChat = (articleId, articleName) => {
    const professionalChatId = userInfo?.userId + "_" + articleId;

    const isProfessionalChat = professionalChatList.find((item) => {
      return item.articleName === articleName;
    });

    if (isProfessionalChat) {
      articleId = isProfessionalChat.professionalChatId.split("_")[1];
    }

    if (!isProfessionalChat) {
      const randomNum = Math.floor(Math.random() * 10) + 1;
      const avatar = `images/avatar${randomNum}.jpg`;

      const professionalAssistantChat = {
        professionalChatId: professionalChatId,
        articleName: articleName,
        notificationNumber: 0,
        isInBox: false,
        isTop: false,
        isDelete: false,
        avatar: avatar,
      };
      addProfessionalChat(professionalAssistantChat);
      updateCurrentChatCharacter(professionalAssistantChat),
        axios.post(
          `http://localhost:8080/api/v1/chat/professionalAssistant/user/${userInfo.userId}/${articleId}/${articleName}/${avatar}`
        );
    }
  };

  // add new group chat in database
  const addGroupChat = (articles) => {
    const formData = new FormData();
    formData.append("groupChatName", groupChatName);
    formData.append("articles", articles);
    axios
      .post(
        `http://localhost:8080/api/v1/chat/group/user/${userInfo.userId}`,
        formData
      )
      .then((res) => {
        const groupChat = res.data;
        addGroupChatList(groupChat);
        const professionalAssistantChat = {
          professionalChatId: groupChat.groupId,
          articleName: groupChat.groupChatName,
          notificationNumber: 0,
          isInBox: false,
          isTop: false,
          isDelete: false,
          avatar: "",
        };
        updateCurrentChatCharacter(professionalAssistantChat);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // handle chat with current article
  const handleChatWithCurrentArticle = () => {
    if (Object.keys(article).length === 0) {
      return;
    }
    updateCurrentMiddleBar("RecentChat");
    updateCurrentMainBox("RecentChat");
    addProfessionalAssistantChat(article.articleId, article.title);
    chatSummaryHandler(article.title, article.articleId);
    chatQaHandler(article.title, article.articleId),
      chatHighlightHandler(article.title, article.articleId);
  };

  // handle chat with multiple article
  const handleChatWithMultipleArticle = () => {
    if (Object.keys(article).length === 0) {
      return;
    }
    const totalSelectedArticle = [...selectedArticles, article.articleId];
    addGroupChat(totalSelectedArticle);
    updateCurrentMiddleBar("RecentChat");
    updateCurrentMainBox("RecentChat");
  };

  return (
    <div className="chat-header border-bottom py-xl-4 py-md-3 py-2">
      <div className="container-xxl">
        <div className="row align-items-center">
          {isComeFromChat ? (
            <div className="w-100">
              <h2>{article?.title}</h2>
            </div>
          ) : (
            <div className="col-8 col-xl-8">
              <div className="w-100">
                <h2>{article?.title}</h2>
              </div>
            </div>
          )}

          <div className="col-3 col-xl-4 text-end">
            <ul className="nav justify-content-end">
              {!isComeFromChat && (
                <>
                  <li className="nav-item list-inline-item add-user-btn">
                    <a
                      href="#"
                      className="nav-link text-muted px-3"
                      title="Add Account"
                    >
                      <i className="zmdi zmdi-account-add zmdi-hc-lg"></i>
                    </a>
                  </li>
                  <Button
                    className="rounded"
                    onClick={() => {
                      setIsDialogOpen(true);
                    }}
                  >
                    Chat
                  </Button>
                </>
              )}
            </ul>
          </div>

          <Modal
            show={isDialogOpen}
            onHide={() => setIsDialogOpen(false)}
            centered
            backdrop={false}
            className="custom-modal-size"
          >
            <Modal.Header closeButton>
              <h2>Chat Options</h2>
              <button onClick={() => setIsDialogOpen(false)} className="border">
                X
              </button>
            </Modal.Header>

            <Modal.Body>
              <div className="d-flex flex-column justify-between">
                <div>
                  <h4 className="w-100">Option 1</h4>
                  <div className="w-full d-flex align-items-center">
                    <h6 className="w-50">Chat with current article</h6>
                    <div className="w-503 d-flex">
                      <button
                        type="button"
                        className="w-95 btn btn-purple"
                        onClick={handleChatWithCurrentArticle}
                      >
                        Chat
                      </button>
                    </div>
                  </div>
                </div>

                <hr></hr>

                <div>
                  <h4 className="w-100">Option 2</h4>
                  <div className="w-full d-flex">
                    <h6 className="w-50">Chat with multiple articles</h6>
                    <div className="d-flex flex-column justify-content-center">
                      <ul className="list-group mb-4 custom-list-group-cxc">
                        {articleList.map((article) => {
                          return (
                            <li
                              onClick={() => handleItemClick(article.articleId)}
                              className={`list-group-item ${
                                selectedArticles.includes(article.articleId)
                                  ? "character-selected"
                                  : ""
                              }`}
                              key={article.articleId}
                            >
                              {article.title}
                            </li>
                          );
                        })}
                      </ul>
                      <div>
                        Please input group chat name:
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e) => {
                              setGroupChatName(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      {/* <button type="button" className="btn btn-outline-primary">Primary</button> */}
                      <button
                        type="button"
                        className="w-95 btn btn-purple"
                        onClick={handleChatWithMultipleArticle}
                      >
                        Chat
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentChatCharacter: state.currentChatCharacter,
    currentChatList: state.currentChatList,
    history: state.history,
    articleList: state.articleList,
    addProfessionalChat: state.addProfessionalChat,
    userInfo: state.userInfo,
    professionalChatList: state.professionalChatList,
    groupChatList: state.groupChatList,
  };
};

const mapDispatchToProps = {
  addChatList,
  updateCurrentMiddleBar,
  updateCurrentMainBox,
  updateCurrentChatCharacter,
  updateHistory,
  addHistory,
  addProfessionalChat,
  updateArticleList,
  updateGroupChatList,
  addGroupChatList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
