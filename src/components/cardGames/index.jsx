import Image from "../figure";
import Text from "../texts";
import Button from "../buttons/buttons";

import './cardgames.css'

function CardGames(props) {
  return (
    <div className="App-CardGame">
      <div>
        <Image path={props.image} descripition={props.alt} />
        <h2>{props.name}</h2>
        <figcaption>{props.type}</figcaption>
      </div>
      <Text content={props.preview} />
      <Button content="Play Now" />
    </div>
  );
}

export default CardGames;
