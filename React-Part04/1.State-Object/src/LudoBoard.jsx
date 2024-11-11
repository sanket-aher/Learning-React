import { useState } from "react";

export default function LudoBoard() {

    let [moves,setMoves] = useState( { blue: 0, red: 0, green: 0, yellow: 0  } );

    let updateBlue = () =>{
        console.log(`moves.blue = ${moves.blue}`);
        // setMoves({ ...moves, blue: moves+1 }); OR
        setMoves((prevMoves) => {
            return { ...prevMoves, blue: prevMoves.blue + 1 }
        })
    }
    let updateYellow = () =>{
        console.log(`moves.yellow = ${moves.yellow}`);
        setMoves((prevMoves) => {
            return { ...prevMoves, yellow: prevMoves.yellow + 1 }
        })
    }
    let updateGreen = () =>{
        console.log(`moves.green = ${moves.green}`);
        setMoves((prevMoves) => {
            return { ...prevMoves, green: prevMoves.green + 1 }
        })
    }
    let updateRed = () =>{
        console.log(`moves.red = ${moves.red}`);
        setMoves((prevMoves) => {
            return { ...prevMoves, red: prevMoves.red + 1 }
        })
    }

    return (
        <div>
            <p>Game Begins!</p>
            <div>
                <p>Blue moves = {moves.blue} </p>
                <button style={{ background:"blue" }} onClick={updateBlue}>+1</button>
                <p>Yellow moves = {moves.yellow} </p>
                <button style={{ background:"yellow" }} onClick={updateYellow}>+1</button>
                <p>Green moves = {moves.green} </p>
                <button style={{ background:"green" }} onClick={updateGreen}>+1</button>
                <p>Red moves = {moves.red} </p>
                <button style={{ background:"red" }} onClick={updateRed}>+1</button>
            </div>
        </div>
    )
}