export default function handleCardClick(id: string, set: Set<string>, fn: (value: Set<string>) => void, fn2: (value:string) => void, fn3: () => void) {
    console.log("handle click" + id)
    if(set.has(id)) fn2("lost")
    fn(new Set([...set, id]))
    fn3()
}