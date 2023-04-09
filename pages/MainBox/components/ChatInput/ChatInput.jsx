import axios from "axios";
import React, { useEffect, useState } from "react";

function ChatInput({ setHistory, currentChatCharacter }) {
  const { id } = currentChatCharacter;
  const [inputValue, setInputValue] = useState("");
  const [isBreak, setIsBreak] = useState(true);
  const [isJustSend, setIsJustSend] = useState(false);

  useEffect(() => {
    let timerId;

    if (isJustSend) {
      setIsBreak(false);
      timerId = setTimeout(() => {
        setIsBreak(true);
        setIsJustSend(false)
      }, 10000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [isJustSend]);

  const inputHandler = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  const getResponse = async function () {
    const res = await axios.put(
      `http://localhost:8080/api/v1/chat/user/1?characterId=${id}&content=${inputValue}&isBreak=${isBreak}`
    );
    const responseHistory = res.data;
    responseHistory.map((responseHistoryItem) => {
      setHistory((preState) => [...preState, responseHistoryItem]);
    });
  };

  const sendHandler = () => {
    const now = new Date();
    const formatted = now.toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "UTC",
    });

    const requestHistory = {
      historyId: 1,
      sender: "cxc",
      type: "user",
      content: inputValue,
      createTime: formatted,
      isBreak: isBreak,
    };
    setHistory((preState) => [...preState, requestHistory]);
    getResponse();
    setInputValue("");
    setIsJustSend(true)
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendHandler();
    }
  };
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
                onKeyDown={handleKeyPress}
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
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={sendHandler}
                  >
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
