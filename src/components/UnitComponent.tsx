import { url } from 'inspector';
import React, { FC, useState } from 'react';
import { MouseEvent } from 'react';
import { useImperativeHandle } from 'react';
import { isValidElement } from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { textSpanEnd } from 'typescript';
import { isBoolean } from 'util';
import { Fraction } from '../models/Fraction';
import { Hex } from "../models/Hex";
import { ToolTipUnit } from '../models/ToolTipUnit';
import { InfantryWermaht } from '../models/unit/InfantryWermaht';
import { T26 } from '../models/unit/T26';
import { Unit } from '../models/unit/Unit';
import ToolTipUnitComponent from './ToolTipUnitComponent';
import UIButtonUnitComponent from './UIButtonUnitComponent';

interface UnitProps {
    unit: Unit;
    //selected: boolean;
    //click: (hex: Hex) => void;
    // units: Unit[];
    //unitsmain: UnitsMain;
   // click2: (ui: UnitsMain) => void;
   selected: boolean;
    // ui: UnitsMain;99
    onHovered: (unit: Unit) => void;

}

const UnitComponent: FC<UnitProps> = ({ unit, selected, onHovered }) => {
    // const [tool, setTool] = useState(<ToolTipUnitComponent unit={unit} />)
    // const [t, sett] = useState(Element)
    const tool = document.createElement("div")
    const tool12 = document.querySelector("div")
    const tl = document.createElement("div")
    const tol = document.querySelector("div")
    const d = React.createElement(ToolTipUnitComponent)


    function Tool1() {

        alert("sds")
        
    }


    function ToolTip(e: MouseEvent) {
      //  const tol = document.querySelector(`div `)
        
       // tool.className = "tooltip"
      //  tool.innerHTML = `<p> защита: ${unit.armor}  <br /> боезапас:  ${unit.ammo}  <br />  численость: ${unit.strength} <br /> </p > `
       // const c = React.createElement(ToolTipUnitComponent, null)
      //  ReactDOM.render(c, document.querySelector("div"))
     //  tool.style.marginLeft = e.clientX - 0 + "px"
    //  tool.style.marginTop = e.clientY - 485 + "px"

        // tol!.after(tool)
       
          //  const tol = document.querySelector(`div`)

        tool.className = "tooltip"
            tool.innerHTML = `<p> защита: ${unit.armor}  <br /> боезапас:  ${unit.ammo}  <br />  численость: ${unit.strength} <br /> </p > `
           
            tool.style.marginLeft = e.clientX - 0 + "px"
            tool.style.marginTop = e.clientY - 485 + "px"
            console.log("sds")
            tol!.after(tool)
       
        console.log("sueta")
        console.log(d)
       
    }


    function ToolTip1(e: MouseEvent) {
        const tol = document.querySelector(`div.${unit.logo} `)
  
       tool.remove()

    }



    function ToolTip2(e1: MouseEvent) {
      //  const tol = document.querySelector(`div `)
        const tl = document.createElement("div")
     //  tl.className = "toolti"
       // tl.innerHTML = `<div>  </div> `
     //  tl.style.marginLeft = e1.clientX - 0 + "px"
     //   tl.style.marginTop = e1.clientY - 485 + "px"
// tol!.after(tl)
        // tol!.append(tl)
       // tl.remove()
        
        // const t = oninvalid
       
            

        if (tl.getElementsByClassName("div.toolti").length > -1) {

            tol!.after(tl)


        } else {

           


        }
          

        
            

        
}



    return (




        <div className={unit.logo}
            // onMouseMove={(e) => }
            onMouseLeave={(e) => { ToolTip1(e) }}
            onMouseMove={(e) => {
                if (!document.querySelector("div.toolti")) ToolTip(e); else { }
            }}
            onClick={(e1) => {
                if (!document.querySelector("div.toolti")  ) {
                    //const tol = document.querySelector(`div `)
                   
                    tl.className = "toolti"
                    tl.innerHTML = `<div class="sss" onclick='document.querySelector("div.toolti")?.remove()'>   </div> `
                    tl.style.marginLeft = e1.clientX - 0 + "px"
                    tl.style.marginTop = e1.clientY - 485 + "px"
                   tol!.after(tl)
                   
                } else {
                    console.log(1)
                    document.querySelector("div.toolti")!.remove()
                }




            }}
            
            
            
        >

           
            
        </div>
     

    );
};






export default UnitComponent;