import Logo from "./Logo"
import ScoreBoard from "./ScoreBoard"
import "../styles/header.css"
import logo from "../assets/palworld-logo.png"

export default function Header({score, best}: {score: number, best:number}) {
    return (
        <header className="header">
         <Logo imgsrc={logo} />
         <ScoreBoard score={score} best={best}/>
        </header>
    )
}