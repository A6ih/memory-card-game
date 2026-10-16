import type { Result } from "../helpers/apiFunctions"
import "../styles/card.css"
import handleCardClick from "../helpers/handleCardClick"

type CardProps = {
    name: string,
    id: string,
    imgUrl: string,
    handleStatus: (value:string) => void,
    handleClickedCards: (value: Set<string>) => void,
    clickedCards: Set<string>
}

export default function Card({name,
                              id,
                              imgUrl,
                              handleStatus,
                              handleClickedCards,
                              clickedCards} : CardProps) {
    return (
        <img src={imgUrl}
             alt={name}
             className={`card`}
             onClick={() => handleCardClick(id,
                                            clickedCards,
                                            handleClickedCards,
                                            handleStatus)} />
    )
}