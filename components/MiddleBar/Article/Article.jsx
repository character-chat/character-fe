import { useEffect } from "react";
import TagItem from "./components/TagItem";
import { connect } from "react-redux";
import { updateCurrentArticle } from "../../../store/actions";
import { addArticleList } from "../../../store/actions";
import { updateArticleList,addTag } from "../../../store/actions";
import { useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Modal from "../../Modal";

const Article = ({
  updateCurrentArticle,
  addArticleList,
  updateArticleList,
  userInfo,
  addTag,
}) => {
  const [articleLink, setArticleLink] = useState("");
  const [tag, setTag] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newTag, setNewTag] = useState("");
  console.log(Modal);

  const handleChange = (event) => {
    setArticleLink(event.target.value);
  };

  const handleAddTag = async () => {
    // axios.post(`http://localhost:8080/api/v1/tag`, {
    //   tag: newTag,
    // });
    //add tag into usertag
    const tag = {
      tagId: uuidv4(),
      tagName: newTag,
    }
    addTag(tag);
    setModalIsOpen(false)
  };

  const saveArticle = async (article) => {
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

  const handleAddArticle = () => {
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
          articleId: newUUID,
          title: resultObject.Data.Title,
          content: resultObject.Data.Content,
          createTime: "",
          tag: tag,
          link: articleLink,
        };
        saveArticle(article);
        updateCurrentArticle(article);
        addArticleList(article);
      })
      .catch(() => {
        const article = {
          articleId: newUUID,
          title: "please input valid link",
          content: "invalid link",
          createTime: "",
          tag: tag,
          link: articleLink,
        };
        saveArticle(article);
        updateCurrentArticle(article);
        addArticleList(article);
      });
    setArticleLink("");
    setTag("");
  };

  useEffect(() => {
    const fetchArticleList = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/article"
        );
        console.log(response.data);
        updateArticleList(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchArticleList();
  }, []);

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
                onClick={handleAddArticle}
              >
                Add Article
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

          <ButtonGroup className="mb-3 gap-3">
            {userInfo.tagList?.map((tagItem) => (
              <Button
                key={tagItem.tagId}
                className="rounded"
                onClick={() => setTag(tagItem.tagName)}
              >
                {tagItem.tagName}
              </Button>
            ))}
            <Button className="rounded" onClick={() => setModalIsOpen(true)}>
              +
            </Button>
          </ButtonGroup>
          {modalIsOpen && (
            <Modal>
              <h5 className="modal-title">Add Tag</h5>
              <input onChange={(e) => setNewTag(e.target.value)} />
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={()=>{setModalIsOpen(false)}}>
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={handleAddTag}>
                  Save changes
                </button>
              </div>
            </Modal>
          )}

          <ul className="chat-list">
            {userInfo.tagList?.map((tagItem) => (
              <TagItem key={tagItem.tagId} tagName={tagItem.tagName} />
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
  };
};

const mapDispatchToProps = {
  updateCurrentArticle,
  addArticleList,
  updateArticleList,
  addTag,
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
