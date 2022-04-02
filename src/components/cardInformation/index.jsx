import Button from "../buttons/buttons"
import Text from "../texts"

import './cardinfor.css'

function CardInformation(props){
    return (
        <div className="App-Card_Information">
            <h2>{props.title}</h2>
            <Text content={props.textContent}/>
            <Button content={props.nameButton}/>
        </div>
    )
}

export default CardInformation