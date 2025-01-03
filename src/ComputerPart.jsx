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

    <div className="pcpart" id={partname}>
        <h3 className ="partname">The specific part: {partname}</h3>
        <table>
            <thead>
                <tr>
                <th className="singleItem">Name</th>
                <th className="singleItem">Price</th>
                <th className="singleItem">Link</th>
                <th className="singleItem">Watts</th>
                </tr>
            </thead>
        <PartList itemList={partList}/>
        
        </table>
    </div>
);


}





export default ComputerPart