import "../styles/score-board.css"

type ScoreBoardProps = {
    score: number,
    best: number,
}

export default function ScoreBoard({score, best}: ScoreBoardProps) {
    return (
        <div className="score-board">
            <p>Score: <span>{score}</span></p>
            <p>Best: <span>{best}</span></p>
        </div>
    )
}