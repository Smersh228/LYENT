import React, { useEffect, useState } from 'react';
import "./App.css";
import BoardComponent from "./components/BoardComponent";
import UnitComponent from './components/UnitComponent';
import { Board } from "./models/Board";
import { Fraction } from './models/Fraction';
import { Hex } from './models/Hex';
import { ToolTipUnit } from './models/ToolTipUnit';
import { Unit } from './models/unit/Unit';


const App = () => {
    const [board, setBoard] = useState(new Board())
    
    useEffect(() => {
        restart()

    }, [])

    function restart() {
        const newBoard = new Board();
        newBoard.initCells()
        newBoard.addUnits()
        setBoard(newBoard)
        
    }



    return (
        <div className="app">

            <BoardComponent
                board={board}
                setBoard={setBoard}
                

             
            />


        </div>

    );
};

export default App;

