import Card from "./Card";
import { useState } from "react";
import type { ResultProps } from "../App";
import type { Result } from "../helpers/apiFunctions";
import "../styles/card-container.css"
import shuffleData from "../helpers/shuffleData";
import shortenDataArr from "../helpers/shortenDataArr";

type CardsContainerProps = {
                            data :ResultProps,
                            handleStatus: (value: string) => void,
                            handleScore: () => void,
                           }

export default function CardsContainer({data, handleStatus, handleScore}: CardsContainerProps) {
    const [clickedCards, setClickedCards] = useState(new Set<string>())
    console.log(clickedCards)
    if(!data) return <div className="loading">...Loading</div>
    if(clickedCards.size > 9) handleStatus("won")

    const clickedCardsArr = data.filter(card => clickedCards.has(card.id))
    const cardsArr = clickedCards.size <=2 ? data : data.filter(card => !clickedCards.has(card.id))

    const shuffledData: Result[] = shuffleData(shortenDataArr(clickedCardsArr, cardsArr))

    return (
        <div className="card-container">
            {shuffledData.map((card =>
                   <Card key={card.id}
                         imgUrl={card.imgUrl}
                         id={card.id}
                         name={card.name}
                         handleStatus={handleStatus}
                         handleClickedCards={setClickedCards}
                         clickedCards={clickedCards}
                         handleScore={handleScore}/>
                 ))}
        </div>
     )
}