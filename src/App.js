import './appMobile.css'
import './App.css';

import MainMenu from './components/navegation/index'
import Image from './components/figure/index';
import Ico from './img/logo.png'
import CardInformation from './components/cardInformation';
import backFeature from './img/backFeature.png';
import Subscribe from './components/subscribe';
import Credit from './components/creadits';
import Chat from './components/chatComponet'

import Games from "./models/games";

import Dragon from "./img/DragonLair.png";
import TheUnknown from "./img/TheUnknow.png";
import CardGames from './components/cardGames';
import Atactic from "./img/Atactic.png";


const dragon_lair = new Games("Dragon Lair", Dragon, "adventure");
const the_unknown = new Games("The Unknown", TheUnknown, "RPG");
const atactc = new Games("Atactic", Atactic, "Strategy");

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <Image path={Ico} descripition="logo GameGlobal" />
          <h1>
            GameGlobal
          </h1>
        </div>
        <MainMenu />

      </header>
      <main className="App-Main">
        <section className="container">
          <CardInformation title="Join the Game"
            textContent="Explore amazing and famous games of the world,
          play online with your friends, the gameGloba is a web page to make easy 
          in the navegation of games and offer a great experience for youur players."
            nameButton="explore" />

          <CardInformation title="Company"
            textContent="We are the company funded at 2018, coming with one goal: offer a accessible and safe platfform 
          to everyone who has a passion for games. Here we make sure about your secury and give the bests game of this era!
          Click on the button down below to know more about us."
            nameButton="about us" />
        </section>

        <section className="container_features">
          <h2>Feature</h2>
          <div className="container_Cards">

            <div>
              <CardInformation title="A Perfect Gaming Experience"
                textContent="​I'm a paragraph. Click here to add your own text and 
                edit me. I’m a great place for you to tell a story and let your users 
                know a little more about you."
                nameButton="Learn More" />
              <Image path={backFeature} descripition="background game batlle space" />
            </div>

            <div>
              <Image path={backFeature} descripition="background game batlle space" />
              <CardInformation title="Work with Us"
                textContent="If you are interenting at work with our Developer team, just click on the 
                button down to check every jobs avalible."
                nameButton="Open positions" />
            </div>

          </div>
        </section>

        <section className="container_MoreGames">
          <h2>More Games</h2>
          <div>
            <CardGames image={dragon_lair.image} alt={dragon_lair.name} name={dragon_lair.name} type={dragon_lair.type}
              preview="Haven't heard of Dragon's Lair?! Well, you play the heroic Dirk the Daring, 
            a valiant knight on a quest to rescue the fair princess from the clutches of an 
            evil dragon! "/>

            <CardGames image={the_unknown.image} alt={the_unknown.name} name={the_unknown.name} type={the_unknown.type}
              preview="There's nothing scarier than waking up in the middle of the forest alone or so it seems. 
            Taking control of Rachel in this short, story driven, exploration game, you must find out where you are, 
            why you're there, and most importantly, how to get out."/>

            <CardGames image={atactc.image} alt={atactc.name} name={atactc.name} type={atactc.type}
              preview="There's a longer war beetwen machine that want to destroyed humanity and machine that protect them,
            Your mission is make a great team of the best machines with the bests weapons and figth for survival of
            humans."/>
          </div>
        </section>
        <Chat />
      </main>
      <footer className="App-footer">
        <Subscribe />
        <Credit />
        <span> 2023 by GameGlobal, Craeted on Editor, Developer: Allan Alves</span>
      </footer>
    </div>
  );
}

export default App;
