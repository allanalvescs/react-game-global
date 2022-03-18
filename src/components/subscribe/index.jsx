import Button from "../buttons/buttons";
import Text from "../texts";

import "./subscribe.css";

function Subscribe() {
  return (
    <form className="form_subscribe">
      <h3>Subscribe</h3>
      <Text content="Be the first to know about new games, exclusive previews and special promotions" />
      <input type="text" placeholder="Email Address"></input>
      <Button content="Submit" />
      <span>
        <em>Thanks for submiting!</em>
      </span>
    </form>
  );
}

export default Subscribe;
