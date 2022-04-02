import "./credits.css";
import Text from "../texts";
import List from "../list";

function Credit() {
  const itensCredics = {
    quickMenu: ["Home", "Games", "Company", "Careers", "Contact"],
    contact: [
      "500 Terry Francois street",
      "San Francisco CA 94182",
      "infor@myself.com",
      "tel: 123-456-124",
    ],
    socials: ["Facebook", "Instagram", "Linkedin", "GitHub"],
  };
  return (
    <div className="container_credit">
      <article>
        <h3>GlobalGames</h3>
        <Text
          content="I'm a paragraph. Click here to add your own text and edit me. 
            I’m a great place for you to tell a story and let your users know a little 
            more about you."
        />
      </article>
      <div className="container_credit-List">
        <List list={itensCredics.contact} title="Contact" classname={null} />
        <List list={itensCredics.quickMenu} title="Quick Menu"classname={null}/>
        <List list={itensCredics.socials} title="Socials" classname={null} />
      </div>
    </div>
  );
}

export default Credit;
