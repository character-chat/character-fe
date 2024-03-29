import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import {
  updateIsCheckArticle,
  updateCurrentArticle,
} from "../../../../store/actions";

function ChatHeader({
  name,
  avatar,
  time,
  isCheckArticle,
  articleId,
  updateIsCheckArticle,
  updateCurrentArticle,
  chatType,
  groupMemberNumber,
  groupMembers,
}) {
  const [isArticleDisplay, setIsArticleDisplay] = useState(true);
  const [displayCheckArticleDropDown, setDisplayCheckArticleDropDown] =
    useState(false);

  console.log(groupMembers);

  const getArticleById = async (articleId) => {
    const res = await axios.get(
      `http://localhost:8080/api/v1/article/${articleId}`
    );
    console.log(res);
    updateCurrentArticle(res.data);
  };



  const handleCheckArticle = () => {
    if (chatType === "GROUP") {
      setIsArticleDisplay(false);
      updateIsCheckArticle(false);
      setDisplayCheckArticleDropDown((state) => !state);
    } else {
      setIsArticleDisplay(!isArticleDisplay);
      updateIsCheckArticle(!isCheckArticle);
      getArticleById(articleId);
    }
  };

  return (
    <div className="chat-header border-bottom py-xl-4 py-md-3 py-2">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-6 col-xl-4">
            <div className="media">
              {chatType === "GROUP" ? (
                <div className="avatar me-3">
                  <span className="status rounded-circle"></span>
                  <div className="avatar rounded-circle no-image timber">
                    <span>{name[0].toUpperCase()}</span>
                  </div>
                </div>
              ) : (
                <div className="me-3 show-user-detail">
                  <span className="status rounded-circle"></span>
                  <img
                    className="avatar rounded-circle"
                    src={`images/${avatar}`}
                    alt="avatar"
                  />
                </div>
              )}

              <div className="media-body overflow-hidden">
                <div className="d-flex align-items-center mb-1">
                  <h6 className="text-truncate mb-0 me-auto">{name}</h6>
                </div>
                <div className="text-truncate">
                  {chatType === "GROUP"
                    ? `${groupMemberNumber} members participants`
                    : time}
                </div>
              </div>
            </div>
          </div>

          <div className="col-6 col-xl-8 text-end">
            <ul className="nav justify-content-end">
              <li className="nav-item list-inline-item d-none d-md-block me-3">
                <a
                  href="#"
                  className="nav-link text-muted px-3"
                  data-toggle="collapse"
                  data-target="#chat-search-div"
                  aria-expanded="true"
                  title="Search this chat"
                >
                  <i className="zmdi zmdi-search zmdi-hc-lg"></i>
                </a>
              </li>
              <li className="nav-item list-inline-item d-none d-sm-block me-3">
                <a
                  href="#"
                  className="nav-link text-muted px-3"
                  title="videocam"
                >
                  <i className="zmdi zmdi-videocam zmdi-hc-lg"></i>
                </a>
              </li>
              <li className="nav-item list-inline-item d-none d-sm-block me-3">
                <a href="#" className="nav-link text-muted px-3" title="Call">
                  <i className="zmdi zmdi-phone-forwarded zmdi-hc-lg"></i>
                </a>
              </li>
              <li className="nav-item list-inline-item add-user-btn">
                <a
                  href="#"
                  className="nav-link text-muted px-3"
                  title="Add Account"
                >
                  <i className="zmdi zmdi-account-add zmdi-hc-lg"></i>
                </a>
              </li>

              {chatType === "GROUP" ? (
                <div
                  style={{ position: "relative" }}
                >
                  <Button onClick={handleCheckArticle}>Check Article</Button>
                  {displayCheckArticleDropDown && (
                    <ul
                      className=""
                      style={{
                        position: "absolute",
                        top: "100%", // 使其显示在按钮下方
                        right: "0", // 与按钮左对齐
                        zIndex: "1000", // 保证它在其他元素之上
                        backgroundColor: "#fff", // 背景颜色
                        border: "1px solid #ccc", // 边框样式
                        listStyleType: "none", // 移除默认的列表点
                        padding: "0", // 移除默认的内边距
                        width: "200px", // 宽度
                        maxHeight: "400px",
                        overflow: "auto",
                      }}
                    >
                      {groupMembers.map((groupMember) => (
                        <li
                          key={groupMember.articleId}
                          style={{
                            padding: "8px 16px", // 内边距
                            borderBottom: "1px solid #ccc", // 下边框，分隔每个项
                          }}
                          onClick={()=>{setIsArticleDisplay(true);
                            updateIsCheckArticle(true);
                            getArticleById(groupMember.articleId);}}
                        >
                          <div className="">{groupMember.title}</div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Button onClick={handleCheckArticle}>Check Article</Button>
              )}

              <li className="nav-item list-inline-item d-block d-sm-none px-3">
                <div className="dropdown">
                  <a
                    className="nav-link text-muted px-0"
                    href="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="zmdi zmdi-more-vert zmdi-hc-lg"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">
                      Search chat
                    </a>
                    <a className="dropdown-item" href="#">
                      Attache Image
                    </a>
                    <a className="dropdown-item" href="#">
                      Video call
                    </a>
                    <a className="dropdown-item" href="#">
                      Call
                    </a>
                    <a className="dropdown-item" href="#">
                      Add New
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isCheckArticle: state.isCheckArticle,
  };
};

const mapDispatchToProps = {
  updateIsCheckArticle,
  updateCurrentArticle,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatHeader);
