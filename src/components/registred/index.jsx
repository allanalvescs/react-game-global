import "./style.css";
import check from "../../check.png";

function Registred({ user,className }) {
  return (
    <div className={className}>
      <img src={check} alt="check ico" />
      <p className="alert">well Done, {user} has just registered!</p>
    </div>
  );
}

export default Registred;
