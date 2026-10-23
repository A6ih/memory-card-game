//import { useState, useEffect } from "react"
import { useEffect, useState } from "react"
import CardsContainer from "./components/CardsContainer"
import Header from "./components/Header"
import filterApiResults from "./helpers/apiFunctions";
import type { Result } from "./helpers/apiFunctions";

export type ResultProps = Result[] | null

function App() {
    const [data, setData] = useState<ResultProps>(null);
    const [score, setScore] = useState(0);
    const [best, setBest] = useState(0);
    const [status, setStatus] = useState("ongoing")

    useEffect(() => {
        const getData = async () => {
            const fetchedData = await filterApiResults();
            setData(fetchedData)
            console.log("data-fetched")
        }
        getData()
    }, [])

    if(score > best) setBest(score)

    const handleScore = () => setScore(score + 1)
    const handleRestart = () => {
        setStatus("ongoing")
        setScore(0)
    }
    
    return (
        <>
          <Header score={score} best={best}/>
          {status === "ongoing" ? <CardsContainer data={data}
                          handleStatus={setStatus}
                          handleScore={handleScore}/> : 
                          status === "won" ? 
                          <div className="main">
                           <h1>You Won</h1>
                           <button onClick={() => handleRestart()}>Restart</button>
                         </div> :
                          <div className="main">
                           <h1>Game Over</h1>
                           <button onClick={() => handleRestart()}>Restart</button>
                         </div>
          }  
        </>
    )
}

export default App
