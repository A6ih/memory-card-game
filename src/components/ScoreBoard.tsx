type ScoreBoardProps = {
    score: number,
    best: number,
}

export default function ScoreBoard({score, best}: ScoreBoardProps) {
    return (
        <div className="score-board">
            <p>Score:{score} </p>
            <p>Best:{best} </p>
        </div>
    )
}