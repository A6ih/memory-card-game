async function fetchFromPal() {
    const request = await fetch("https://palworldtcg.gg/api/v1/sets/TD01")
    const result = await request.json()
    return result.data.cards
}

export type Result = {
    name: string,
    id: string,
    imgUrl: string
}

export default async function filterApiResults() {
    const result = await fetchFromPal()
    const filteredResult = await result.filter((card: any) =>
                                                card.card_number &&
                                                card.card_type === "Pal" &&
                                                card.rarity === "TD")
                                                .slice(0, 10)
    const shortendResult: Result[] = await filteredResult.map(({name, card_number: id, thumbnail_url:imgUrl}: {name: string, card_number:string, thumbnail_url:string}) =>
                                                   ({name, id, imgUrl}))
    return shortendResult
}