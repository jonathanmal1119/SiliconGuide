import PartList from "./partList.jsx"

//Specific part that will house other data
function ComputerPart(props){

    const {partname ="pcpart",partList=[{
        id:0,
        name:"Nothing",
        price:0,
        link:"",
        estimated_watts:0
    }]} = props

    return (
        <div className = "pcpart" id={partname}>
            <div className = "category">
                <h3 className = "categoryname">{partname}</h3>
            </div>
            <div className = "partsChoices">
                <table>
                    <PartList itemList={partList}/>
                </table>
            </div>
        </div>
    );

}

export default ComputerPart