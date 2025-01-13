import PartList from "./partList.jsx"
import React, { useState, useRef } from "react";

//Specific part that will house other data
function ComputerPart(props){
    const [name = "default", useName] = useState(); // CHANGE PLEASE
    const expandableRef = useRef(null);

    const {updateCategory,partname ="pcpart",partList=[{
        id:0,
        name:"Nothing",
        price:0,
        link:"",
        estimated_watts:0
    }]} = props

    const handleClick = () => {
        if (expandableRef.current) {
          expandableRef.current.style.display = expandableRef.current.style.display === "none" ? "block" : "none";
        }
        updateCategory(partname);
    };

    return (
        <div className = "pcpart" id={partname}>
            <div className = "category" onClick={handleClick}>
                <h3 className = "categoryname">{partname}</h3>
            </div>
            <div ref={expandableRef} className = "partsChoices" style={{ display: "none" }}>
                <PartList itemList={partList}/>
            </div>
        </div>
    );

}

export default ComputerPart