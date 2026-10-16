import Card from "./Card";
import { useState } from "react";
import type { ResultProps } from "../App";
import "../styles/card-container.css"
import shuffleData from "../helpers/shuffleData";


export default function CardsContainer({data, handleStatus}: {data :ResultProps, handleStatus: (value: string) => void}) {
    const [clickedCards, setClickedCards] = useState(new Set<string>())
    console.log(clickedCards)
    if(!data) return <div className="loading">...Loading</div>
    const shuffledData = shuffleData(data)
    return (
        <div className="card-container">
            {shuffledData.map((card =>
                   <Card key={card.id}
                         imgUrl={card.imgUrl}
                         id={card.id}
                         name={card.name}
                         handleStatus={handleStatus}
                         handleClickedCards={setClickedCards}
                         clickedCards={clickedCards}/>
                 ))}
        </div>
     )
}