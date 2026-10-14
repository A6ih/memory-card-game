import Card from "./Card";

export type CardProps = {
    name: string,
    imgURL: string,
    id: number,
}

export default function CardsContainer({data}: {data :CardProps[]}) {
    return (
        data.map((card =>
                   <Card key={card.id} name={card.name} imgURL={card.imgURL} />
                 )
     )
    )
}