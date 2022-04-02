import { FaCommentAlt, FaShare } from "react-icons/fa";
import { useState } from "react";
import "./style.css";

function Chat() {
  const [activeChat, setIsActiveChat] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const handleClickSend = () => {
    setChat([...chat, message]);
    setMessage("");
  };

  return (
    <div className="container_Chat">
      <button className="btn_chat" onClick={() => setIsActiveChat(!activeChat)}>
        <h2>Chat</h2>
        <FaCommentAlt />
      </button>
      {activeChat ? (
        <div className="box">
          <div className="chat">
            {chat.map((chatUser, index) => {
              return <p key={index}>{chatUser}</p>;
            })}
          </div>
          <div className="container_message">
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>
            <button onClick={() => handleClickSend()}>
              <FaShare color="#fff" />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Chat;
