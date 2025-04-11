'use client';

import { useState } from "react";

export function Button(){

const [count, setCount] = useState(0);

function add() {
    setCount(count + 1);
    
}
function Minus () {
    setCount(count - 1);
}
function Reset() {
    setCount(count * 0);
}

return (
    <div>
        <h2>Count: {count}</h2>
        <button
        onClick={add}
        className="bg-blue-200 p-2 border mr-2 cursor-pointer hover:bg-blue-300 ">+1</button>
        <button
        onClick={Minus}
        className="bg-blue-200 p-2 border mr-3 cursor-pointer hover:bg-blue-300">-1</button>
        <button
        onClick={Reset}
        className="bg-blue-200 p-2 border cursor-pointer hover:bg-blue-300">Reset</button>
        
    </div>
)

    }
