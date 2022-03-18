import "./credits.css";
import Text from "../texts";
import List from "../list";

function Credit() {
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
        <List
          title="CONTACT"
          item1="500 Terry Francois Street"
          item2="San Francisco, CA 94158"
          item3="info@mysite.com"
          item4="Tel: 123-456-7890"
        />
        <List
          title="QUICK MENU"
          item1="Games"
          item2="Company"
          item3="Carrers"
          item4="Contact"
        />
        <List
          title="SOCIALS    "
          item1="Facebook"
          item2="Instagram"
          item3="Linkedin"
          item4="Github"
        />
      </div>
    </div>
  );
}

export default Credit;
