//import { useState, useEffect } from "react"
import { useEffect, useState } from "react"
import CardsContainer from "./components/CardsContainer"
import Header from "./components/Header"
import filterApiResults from "./helpers/apiFunctions";
import type { Result } from "./helpers/apiFunctions";

export type ResultProps = Result[] | null

function App() {
    const [data, setData] = useState<ResultProps>(null);
    const [status, setStatus] = useState("ongoing")

    useEffect(() => {
        const getData = async () => {
            const fetchedData = await filterApiResults();
            setData(fetchedData)
            console.log("data-fetched")
        }
        getData()
    }, [])

    console.log("start")

    if(status === "lost") return <h1>Game Over</h1>

    return (
        <>
          <Header />
          <CardsContainer data={data} handleStatus={setStatus}/>
        </>
    )
}

export default App
