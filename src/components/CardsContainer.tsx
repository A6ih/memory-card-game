import Card from "./Card";
import type { ResultProps } from "../App";
import "../styles/card-container.css"


export default function CardsContainer({data}: {data :ResultProps}) {
    if(!data) return <div className="loading">...Loading</div>
    return (
        <div className="card-container">
            {data.map((card =>
                   <Card key={card.id} imgUrl={card.imgUrl} id={card.id} name={card.name}/>
                 ))}
        </div>
     )
}