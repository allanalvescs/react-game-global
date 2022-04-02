import "../navegation/navegation.css";
import ico from "../../menu.png";
import close from "../../close.png";
import List from "../list";
import { useState, useEffect } from "react";

function MainMenu() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    console.log("atualizou");
  }, [isActive]);

  const listItem = ["Home", "Games", "Company", "Careers", "Contact"];
  return (
    <nav className="App-navegation">
      {isActive ? <List classname="main-Menu" list={listItem} /> : null}
      <figure>
        <img
          src={isActive ? close : ico}
          alt="ico meenu"
          onClick={() => {
            setIsActive(!isActive);
          }}
        />
      </figure>
    </nav>
  );
}

export default MainMenu;
