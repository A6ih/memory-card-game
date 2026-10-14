import Logo from "./Logo"
import ScoreBoard from "./ScoreBoard"
import "../styles/header.css"
import logo from "../assets/palworld-logo.png"

export default function Header () {
    return (
        <header className="header">
         <Logo imgsrc={logo} />
         <ScoreBoard score={0} best={0}/>
        </header>
    )
}