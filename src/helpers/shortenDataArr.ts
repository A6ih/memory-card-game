import type { Result } from "./apiFunctions.ts"
import shuffleData from "./shuffleData.ts"

export default function shortenDataArr(arr1: Result[], arr2: Result[]) {
    console.log(arr1.length)
    if(arr1.length <= 2) return arr2.slice(0, 4)
    console.log(arr1.length + "2")
    if(arr2.length === 0) return arr1.slice(0, 4)
    if(arr2.length <= 4) return [arr2[0], ...shuffleData(arr1).slice(0, 3)]
    else return [...arr2.splice(0, 2), ...shuffleData(arr1).slice(0, 2)]
}
