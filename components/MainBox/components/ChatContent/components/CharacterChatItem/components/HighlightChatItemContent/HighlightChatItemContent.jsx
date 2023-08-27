import React, { useState } from "react";
import { connect } from "react-redux";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

function HighlightChatItemContent({ history }) {
  const [isQuillDisplayed, setIsQuillDisplayed] = useState(false);
  const [quillContent, setQuillContent] = useState("");

  return (
    <div
      className="rounded d-flex align-items-start w-50 flex-column mb-3 mt-3 shadow"
      onClick={() => {
        // setIsQuillDisplayed(false);
      }}
    >
      <div className="border-bottom w-100 py-2">
        <h3 className="text-center mb-0">HightLight Content</h3>
      </div>
      <div
        className={`p-3 bg-light w-100 rounded text-extra-small position-relative`}
      >
        <p className={`text-black text-center`}>{history?.content}</p>
        <hr />

        <div
          className="d-flex justify-content-between"
          placeholder="Note something here..."
        >
          <h5>Notes</h5>
          <i
            className={`bi bi-pencil-fill cursor-pointer ${
              isQuillDisplayed && "text-primary"
            }`}
            onClick={() => {
              setIsQuillDisplayed(!isQuillDisplayed);
            }}
          ></i>
        </div>

        {isQuillDisplayed ? (
          ReactQuill && <ReactQuill onChange={setQuillContent} value={quillContent} />
        ) : (
          <div className="p-3" dangerouslySetInnerHTML={{ __html: quillContent }}></div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HighlightChatItemContent);
