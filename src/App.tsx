//import { useState, useEffect } from "react"
import { useEffect, useState } from "react"
import CardsContainer from "./components/CardsContainer"
import Header from "./components/Header"
import filterApiResults from "./helpers/apiFunctions";
import type { Result } from "./helpers/apiFunctions";

export type ResultProps = Result[] | null

function App() {
    const [data, setData] = useState<ResultProps>(null);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            const fetchedData = await filterApiResults();
            setData(fetchedData)
            setIsLoading(false)
        }
        getData()
    }, [])

    return (
        <>
          <Header />
          <CardsContainer data={data}/>
        </>
    )
}

export default App
