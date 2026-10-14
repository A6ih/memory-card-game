import type { CardProps } from "./CardsContainer";
import "../styles/card.css"

export default function Card({name, imgURL}:Omit<CardProps, "id">) {
    return (
        <div className="card">
            <img className="card-img" src={imgURL} alt={name} />
            <p className="card-name">{name}</p>
        </div>
    )
}