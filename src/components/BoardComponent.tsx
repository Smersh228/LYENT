import React, { FC, useEffect, useState } from 'react';
import { moveCursor } from 'readline';
import { Board } from "../models/Board";
import { Hex } from "../models/Hex";
import { Unit } from '../models/unit/Unit';
import HexComponent from './HexComponent';
import UnitComponent from './UnitComponent';

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
  

    
 
}
const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {
    const [selectedHex, setSelectedHex] = useState<Hex | null>(null)

    function click(hex: Hex) {

        setSelectedHex(hex);





    }





    return (

        <div className="board">
            {board.hexs.map((hexs, index) =>
                <React.Fragment key={index}>
                    {hexs.map(hex =>
                        <HexComponent
                            // click={click}
                            units={[]}
                            hex={hex}
                            key={hex.id}
             
                            
                           selected={hex.x === selectedHex?.x && hex.y === selectedHex?.y}

                        />
                    )}
                </React.Fragment>
            )}

        </div>
    );
};

export default BoardComponent;

