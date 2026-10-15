import type { Result } from "../helpers/apiFunctions"
import "../styles/card.css"

export default function Card({name, id, imgUrl}:Result) {
    return (
        <img src={imgUrl} alt={name} className={`card ${id}`} />
    )
}