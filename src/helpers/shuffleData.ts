import type { Result } from "./apiFunctions";

export default function shuffleData(arr: Result[]) {
    const newArr = [...arr]
    const resultArr: Result[] = []
    for (let i = 0; i < arr.length; i++) {
        resultArr.push(...newArr.splice(Math.floor(Math.random() * newArr.length - 1), 1))
    }
    return resultArr
}