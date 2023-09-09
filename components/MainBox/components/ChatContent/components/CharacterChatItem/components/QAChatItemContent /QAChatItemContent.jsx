import React from "react";
import {useState} from "react";
import { connect } from "react-redux";

function QAChatItemContent({ history }) {
  const [isAnswerVisible, setAnswerVisibility] = useState(false);

  return (
    <div className="rounded d-flex align-items-start w-75 flex-column mb-3 mt-3 shadow">
        <div className="border-bottom w-100 py-2">
            <h4 className="text-center mb-0">Q&A</h4>
        </div>
        <div className="p-3 w-100 rounded text-extra-small">
            <h5>Question</h5>
            {history?.quizAndAnswer?.quiz}
        </div>
        <div 
            className={`p-3 w-100 rounded text-extra-small position-relative`}
        >
            <h5>Answer</h5>
            <p className={`${isAnswerVisible ? '' : 'bg-light text-black text-center'}`} onClick={()=>{setAnswerVisibility(!isAnswerVisible)}}>  {isAnswerVisible ? (history?.quizAndAnswer?.answer) : 'Click to see answer'}</p>
        </div>
    </div>
);
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(QAChatItemContent);
