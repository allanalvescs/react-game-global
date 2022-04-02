import { useState } from "react";
import Registred from "../registred";
import Text from "../texts";

import "./subscribe.css";

function Subscribe() {
  const [send, setIsSend] = useState(false);
  const [user, setUser] = useState("");

  return (
    <form className="form_subscribe">
      <h3>Subscribe</h3>
      <Text content="Be the first to know about new games, exclusive previews and special promotions" />
      <input
        type="text"
        placeholder="Email Address"
        value={user}
        onChange={(event) => setUser(event.target.value)}
      />
      <button
        onClick={(event) => {
          event.preventDefault();
          setIsSend(true);

          setTimeout(() => {
            setUser("");
          }, 5000);
          
          setTimeout(() => {
            setIsSend(false);
          }, 6000);
        }}
      >
        submit
      </button>
      {send ? (
        <Registred user={user} className="alert_registred animation" />
      ) : null}
      <span>
        <em>Thanks for submiting!</em>
      </span>
    </form>
  );
}

export default Subscribe;
