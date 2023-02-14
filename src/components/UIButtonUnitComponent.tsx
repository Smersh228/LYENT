import React, { FC, useState } from 'react';
import { Fraction } from '../models/Fraction';
import { Hex } from "../models/Hex";
import { InfantryWermaht } from '../models/unit/InfantryWermaht';
import { Unit } from '../models/unit/Unit';

interface UIButtonUnitProps {
    unit: Unit;
    //selected: boolean;
    //click: (hex: Hex) => void;
    // units: Unit[];
    //unitsmain: UnitsMain;
    // click2: (ui: UnitsMain) => void;
    // selected: boolean;
    // ui: UnitsMain;
    //onHovered: (unit: Unit) => void;

}

const UIButtonUnitComponent: FC<UIButtonUnitProps> = ({ unit }) => {




    return (

        <div >
            <div>sdsd</div>
            <div>sds</div>
            <div>sdsd</div>
            <div>sdsd</div>
        </div>



    );
};






export default UIButtonUnitComponent;