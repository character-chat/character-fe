import React from "react";

function SummaryChatItemContent({ content }) {
  return (
    <div className="rounded message-row d-flex align-items-center bg-warning  w-75 flex flex-column">
      <div className="border-bottom w-100 ">
        <h3 className="text-center w-100">Summary</h3>
      </div>
      <div className="p-3 w-100 bg-warning rounded text-extra-small">{content}</div>
    </div>
  );
}

export default SummaryChatItemContent;
