import React from "react";

function SummaryChatItemContent({ content }) {
  return (
    <div className="rounded message-row d-flex align-items-center w-75 flex-column mx-auto my-4 shadow">
      <div className="border-bottom w-100 ">
        <h4 className="text-center w-100 py-2 m-0">Summary</h4>
      </div>
      <div className="p-3 w-100 bg-light rounded-bottom text-extra-small">
        {content}
      </div>
    </div>
  );
}

export default SummaryChatItemContent;
