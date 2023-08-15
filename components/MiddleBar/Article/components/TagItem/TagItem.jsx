import React, {useState} from "react";
import { connect } from "react-redux";
import { updateCurrentArticle,  deleteTag, } from "../../../../../store/actions";
import axios from "axios";


function TagItem({tagId,tagName, updateCurrentArticle,articleList,deleteTag}) {
  const [displayDropDown, setDisplayDropDown] = useState(false)

  const handleDeleteTag = async (tagId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/v1/tag/${tagId}`
      );
      console.log(response.data);
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
        <button type="button" className="btn btn-link text-danger" onClick={()=>{deleteTag(tagId),handleDeleteTag(tagId)}}>
          <i className="zmdi zmdi-delete"></i>
        </button>
      </div>
    <div className="form-select w-100" onClick={()=>{setDisplayDropDown((sta)=>!sta)}}>
    {tagName}
    </div>
      {displayDropDown && articleList.filter((article)=>article.tag===tagName).map((article)=> <div key={article.id} className="w-100" onClick={()=>updateCurrentArticle(article)}> {article.title
      }</div>)}
    </li>
  );
}

const mapStateToProps = (state) => {
  return {
    articleList: state.articleList,
  };
};

const mapDispatchToProps = {
  updateCurrentArticle,
  deleteTag,
};

export default connect(mapStateToProps, mapDispatchToProps)(TagItem);
