import "../styles/card.css"
import handleCardClick from "../helpers/handleCardClick"
import cardBack from "../assets/PalworldOCG_Card_Back.webp"

type CardProps = {
    name: string,
    id: string,
    imgUrl: string,
    handleStatus: (value:string) => void,
    handleClickedCards: (value: Set<string>) => void,
    clickedCards: Set<string>,
    handleScore: () => void,
    isFlipped: boolean,
    handleCardFlip: (value: boolean) => void,
}

export default function Card({name,
                              id,
                              imgUrl,
                              handleStatus,
                              handleClickedCards,
                              clickedCards,
                              handleScore,
                              isFlipped,
                              handleCardFlip} : CardProps) {
    return (
        <div className={`card ${isFlipped? "is-flipped" : "not-flipped"}`}>
            <img src={imgUrl}
             alt={name}
             className={`card-front`}
             onClick={() => handleCardClick(id,
                                            clickedCards,
                                            handleClickedCards,
                                            handleStatus,
                                            handleScore,
                                            handleCardFlip)} />
            <img src={cardBack} alt="card-back" className="card-back"/>
        </div>
    )
}