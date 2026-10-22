export default function CardTracker({score}: {score:number}) {
    return (
        <p className="card-tracker">
           {score} / 10
        </p>
    )
}