//import { useState, useEffect } from "react"
import CardsContainer from "./components/CardsContainer"
import Header from "./components/Header"

function App() {
    //const [data, setData] = useState(null);
    const data = [{name: "Relaxasuarus",
                   imgURL: "https://apps.1panel.pro/stable/1panel/palworld/logo.png",
                   id: 1}]
    return (
        <>
          <Header />
          <CardsContainer data={data}/>
        </>
    )
}

export default App
