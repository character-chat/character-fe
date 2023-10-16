import { useEffect } from "react";
import TagItem from "./components/TagItem";
import { connect } from "react-redux";
import { updateCurrentArticle, updateHistory } from "../../../store/actions";
import {
  addArticleList,
  updateTagList,
  deleteTag,
} from "../../../store/actions";
import { updateArticleList, addTag } from "../../../store/actions";
import { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Modal from "../../Modal";

const Article = ({
  updateCurrentArticle,
  currentArticle,
  addArticleList,
  userInfo,
  addTag,
  updateTagList,
  tagList,
  articleList,
  updateArticleList,
}) => {
  const [articleLink, setArticleLink] = useState("");
  const [editTagList, setEditTagList] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newTag, setNewTag] = useState("");
  const [recommendationTags, setRecommendationTags] = useState([]);
  const [displayRecommendationTags, setDisplayRecommendationTags] =
    useState(false);
  const [article, setArticle] = useState();

  const handleChange = (event) => {
    setArticleLink(event.target.value);
  };

  const handleCheckboxChange = (tagId) => {
    const targetTag = recommendationTags.find((item) => {
      return item.tagId === tagId;
    });

    handleAddTag(targetTag?.tagName);

    const newTags = recommendationTags.filter((item) => {
      return item.tagId !== tagId;
    });

    setRecommendationTags(newTags);
    if (newTags.length === 0) {
      setDisplayRecommendationTags(false);
    }
  };

  useEffect(() => {
    console.log(recommendationTags);
  }, [recommendationTags]);

  const handleAddTag = async (tagName) => {
    const userId = userInfo?.userId;
    const tag = {
      tagId: uuidv4(),
      userId: userId,
      tagName: tagName,
    };
    axios.post(`http://localhost:8080/api/v1/user/${userId}/tagList`, null, {
      params: {
        tagName: tag.tagName,
      },
    });
    addTag(tag);
    setModalIsOpen(false);
  };

  const saveArticle = async (article) => {
    console.log(article)
    try {
      const response = await axios.post(
        `http://localhost:8080/api/v1/article`,
        article
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddArticle = async () => {
    const articleTags = [...article.tags];
    articleTags.push(...editTagList)
    
    const newArticle = {
      ...article,
      tags: articleTags
    };

    console.log(newArticle)

    saveArticle(newArticle);
    addArticleList(newArticle);
  };

  const handleFetchArticle = () => {
    const now = new Date();
    const formatted = now.toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "Asia/Shanghai",
    });

    const newUUID = uuidv4();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    var urlencoded = new URLSearchParams();
    urlencoded.append("appkey", "XYS8X5K5CZ3D53STDPDM2CQJZS6VR3JP");
    urlencoded.append("url", articleLink);
    urlencoded.append("contentwithhtml", "false");
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };
    fetch("https://api.gugudata.com/news/fetchcontent", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const resultObject = JSON.parse(result);
        const article = {
          userId: userInfo.userId,
          articleId: newUUID,
          title: resultObject.Data.Title,
          content: resultObject.Data.Content,
          tags: editTagList,
          createTime: formatted,
          link: articleLink,
        };
        setArticle(article);
        updateCurrentArticle(article);
      })
      .catch(() => {
        const article = {
          articleId: newUUID,
          title: "please input valid link",
          content: "invalid link",
          tags: editTagList,
          link: articleLink,
        };
        setDisplayRecommendationTags(false);
        updateCurrentArticle(article);
      });
    setArticleLink("");
    setEditTagList([]);
  };

  useEffect(()=>{
    console.log(article)
  },[article])

  useEffect(() => {
    const fetchRecommendationTags = async () => {
      try {
        const response = await axios.post(
          `http://localhost:8080/api/v1/tag/recommendations`,
          null,
          { params: { title: currentArticle.title } }
        );
        console.log(response.data);
        const recommendationTags = response.data;
        const tags = recommendationTags.map((item, index) => {
          const newTag = {
            tagId: index + 1,
            tagName: item,
            choose: false,
          };
          return newTag;
        });
        console.log(tags);
        setRecommendationTags(tags);
        setDisplayRecommendationTags(true);
      } catch (error) {
        console.error(error);
      }
    };

    if (article) {
      fetchRecommendationTags();
    }
  }, [article]);

  useEffect(() => {
    const fetchArticleList = async () => {
      const { data: articleListData } = await axios.get(
        `http://localhost:8080/api/v1/article/list/${userInfo.userId}`
      );
      updateArticleList(articleListData);
    };
    fetchArticleList();
  }, []);

  useEffect(() => {
    console.log(articleList);
  }, [articleList]);

  useEffect(() => {
    updateTagList(userInfo.tags);
  }, []);

  useEffect(() => {
    console.log(editTagList);
  },[editTagList])

  return (
    <div className="sidebar border-end py-xl-4 py-3 px-xl-4 px-3">
      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="nav-tab-contact"
          role="tabpanel"
        >
          <div className="justify-content-between align-items-center mb-4">
            <h4 className="mb-0 text-primary">Article Management</h4>
          </div>

          <div className="d-flex form-group input-group-lg search mb-3">
            <div className="col-8" style={{ marginRight: "1rem" }}>
              <i className="zmdi zmdi-search z-0"></i>
              <input
                type="text"
                className="form-control"
                placeholder="please input article link..."
                onChange={(e) => handleChange(e)}
                value={articleLink}
              />
            </div>

            <div className="col-4">
              <button
                className="btn btn-dark"
                type="button"
                data-toggle="modal"
                data-target="#InviteFriends"
                onClick={handleFetchArticle}
              >
                fetch article
              </button>
            </div>
          </div>

          <div className="dropdown">
            <a
              className="btn btn-link px-1 py-0 border-0 text-muted dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            ></a>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>

          {displayRecommendationTags && (
            <div className="bg-gray w-full mb-4 h-100">
              <h6 className="text-primary">Recommendation Tags</h6>
              <div className="flex justify-content-between">
                {recommendationTags.map((tag) => (
                  <Button
                    key={tag.tagId}
                    className="rounded bg-primary text-white m-1"
                    onClick={() => handleCheckboxChange(tag.tagId)}
                  >
                    {tag.tagName}
                  </Button>
                ))}
              </div>
            </div>
          )}

          <div className="mb-3 gap-3">
            {tagList?.map((tagItem) => (
              <Button
                key={tagItem.tagId}
                className={`rounded bg-primary m-1 ${editTagList.includes(
                  tagItem.tagName
                )?'border-info border-2':''}`}
                onClick={() =>
                  setEditTagList((preTag) => {if(preTag.includes(tagItem.tagName))return preTag.filter((item)=>item!==tagItem.tagName)
                  else return [...preTag, tagItem.tagName]})
                }
              >
                {tagItem.tagName}
              </Button>
            ))}
            <Button
              className="rounded m-1"
              onClick={() => setModalIsOpen(true)}
            >
              +
            </Button>
            <button
              className="btn btn-dark m-1"
              type="button"
              onClick={handleAddArticle}
            >
              Add Article
            </button>
          </div>
          {modalIsOpen && (
            <Modal>
              <h5 className="modal-title">Add Tag</h5>
              <input onChange={(e) => setNewTag(e.target.value)} />
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setModalIsOpen(false);
                  }}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    handleAddTag(newTag);
                  }}
                >
                  Save changes
                </button>
              </div>
            </Modal>
          )}

          <ul className="chat-list">
            {tagList?.map((tagItem) => (
              <TagItem
                key={tagItem.tagId}
                tagName={tagItem.tagName}
                tagId={tagItem.tagId}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentArticle: state.currentArticle,
    userInfo: state.userInfo,
    tagList: state.tagList,
    articleList: state.articleList,
    history: state.history,
  };
};

const mapDispatchToProps = {
  updateCurrentArticle,
  addArticleList,
  updateArticleList,
  addTag,
  deleteTag,
  updateTagList,
  updateHistory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
