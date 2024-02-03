// import { Textfit } from "react-textfit";
import "./Screen.css";

//need to keep screen size static and have script same font size but wraps downwards when there's no more room on each line
const Screen = ({value}) => {
    return (
        <div className="screen" mode="single" max={100}>{value}</div>
    )
}

export default Screen;