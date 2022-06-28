import { useState } from "react";
import { Counter } from "../models/counter";

export default function useCounter(initialValue: number = 0): Counter {

    const [counter, setCounter] = useState(initialValue);

    const increase = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);
    const reset = () => setCounter(0);

    return [counter, increase, decrement, reset];
}