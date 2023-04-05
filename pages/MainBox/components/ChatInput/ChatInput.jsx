import React, { useState } from "react";

function ChatInput({setMockHistory}) {
  const [inputValue, setInputValue] = useState('')

  const inputHandler = (event)=>{
    setInputValue(event.target.value)
  }

  const sendHandler = ()=>{
    const newHistory = {historyId: 1, sender:'cxc', type: 'user', content:[inputValue], time:'7:00 PM'}
    setMockHistory((preState)=>[...preState, newHistory])
    setInputValue('')
  }

  return (
    <div className="chat-footer border-top py-xl-4 py-lg-2 py-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="input-group align-items-center">
              <input
                type="text"
                className="form-control border-0 pl-0"
                placeholder="Type your message..."
                onChange={inputHandler}
                value={inputValue}
              />

              <div className="input-group-append d-none d-sm-block">
                <span className="input-group-text border-0">
                  <button
                    className="btn btn-sm btn-link text-muted"
                    data-toggle="tooltip"
                    title="Refresh"
                    type="button"
                  >
                    <i className="zmdi zmdi-refresh font-22"></i>
                  </button>
                </span>
              </div>
              <div className="input-group-append">
                <span className="input-group-text border-0">
                  <button
                    className="btn btn-sm btn-link text-muted"
                    data-toggle="tooltip"
                    title="Smaily"
                    type="button"
                  >
                    <i className="zmdi zmdi-mood font-22"></i>
                  </button>
                </span>
              </div>
              <div className="input-group-append">
                <span className="input-group-text border-0">
                  <button
                    className="btn btn-sm btn-link text-muted"
                    data-toggle="tooltip"
                    title="Attachment"
                    type="button"
                  >
                    <i className="zmdi zmdi-attachment font-22"></i>
                  </button>
                </span>
              </div>

              <div className="input-group-append">
                <span className="input-group-text border-0 pr-0">
                  <button type="submit" className="btn btn-primary" onClick={sendHandler}>
                    <span className="d-none d-md-inline-block me-2">Send</span>
                    <i className="zmdi zmdi-mail-send"></i>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatInput;
