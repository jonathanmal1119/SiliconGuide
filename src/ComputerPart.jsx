import PartList from "./partList.jsx"
import React, { useState, useRef, useEffect } from "react";

function ComputerPart(props) {
    const [partListState, setPartListState] = useState([]);
    const expandableRef = useRef(null);

    const {
        updateCategory,
        partname = "pcpart",
        partList = [] // Expecting raw JSON response
    } = props;

    // Parse the JSON response and extract the 'parts' array
    useEffect(() => {
        if (partList && partList.schema && partList.schema.properties && partList.schema.properties.parts) {
            const parsedParts = partList.schema.properties.parts.items.map(item => ({
                name: item.name,
                price: item.price,
                link: item.link,
                estimated_watts: item.estimated_wattage
            }));
            setPartListState(parsedParts);
        } else {
            setPartListState([]); // Default to an empty array if parsing fails
        }
    }, [partList]);

    const handleClick = () => {
        if (expandableRef.current) {
            expandableRef.current.style.display = expandableRef.current.style.display === "none" ? "block" : "none";
        }
        updateCategory(partname);
    };

    return (
        <div className="pcpart" id={partname}>
            <div className="category" onClick={handleClick}>
                <h3 className="categoryname">{partname}</h3>
            </div>
            <div ref={expandableRef} className="partsChoices" style={{ display: "none" }}>
                <PartList itemList={partListState} />
            </div>
        </div>
    );
}

export default ComputerPart
