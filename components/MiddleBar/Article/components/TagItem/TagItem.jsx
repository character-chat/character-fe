import React, {useState} from "react";
import { connect } from "react-redux";
import { updateCurrentArticle,  deleteTag, } from "../../../../../store/actions";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';




function TagItem({tagName, updateCurrentArticle,articleList,deleteTag,userInfo}) {
  const [displayDropDown, setDisplayDropDown] = useState(false)

  const handleDeleteTag = async (tagName) => {
    try {
      await axios.delete(
        `http://localhost:8080/api/v1/user/${userInfo?.userId}/tags/${tagName}`
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <li>
      <div className="hover_action">
        <button type="button" className="btn btn-link text-info">
          <i className="zmdi zmdi-eye"></i>
        </button>
        <button type="button" className="btn btn-link text-warning">
          <i className="zmdi zmdi-star"></i>
        </button>
        <button type="button" className="btn btn-link text-danger" onClick={()=>{deleteTag(tagName),handleDeleteTag(tagName)}}>
          <i className="zmdi zmdi-delete"></i>
        </button>
      </div>
    <div className="form-select w-100" onClick={()=>{setDisplayDropDown((sta)=>!sta)}}>
    {tagName}
    </div>
      {displayDropDown && articleList.filter((article)=>article.tags.includes(tagName)).map((article)=> 
      <div key={article.id} className="w-100 pe-2 ps-2 py-1 d-flex me-2" onClick={()=>updateCurrentArticle(article)}>
      <div className="avatar rounded-circle w-5 d-flex justify-content-center align-items-start py-1">
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
      </div>  
      <div className="ps-1 w-95">
          {article.title}
      </div>
  </div>
  
      )
      }
    </li>
  );
}

const mapStateToProps = (state) => {
  return {
    articleList: state.articleList,
    userInfo: state.userInfo
  };
};

const mapDispatchToProps = {
  updateCurrentArticle,
  deleteTag,
};

export default connect(mapStateToProps, mapDispatchToProps)(TagItem);
