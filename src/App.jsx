import ComputerPart from './ComputerPart'
import Header from './Header'
import Footer from './Footer'
import './App.css'
import test from "./Assistant"

function App() {

  return (
    <>
      <Header/>
      <div className="prevListContainer">
        
      </div>
      <div className="currentPartsContainer">

        <div className="allparts">
          <ComputerPart partname="CPU" partList={test()}/>
          
          <ComputerPart partname="Motherboard" partList={[
            {
              id:2,
              name:"B50-Shark",
              price:400,
              link:"youtube.com",
              estimated_watts:3000
            }
          ]}/>

          <ComputerPart partname="Memory" partList={[
            {
              id:4,
              name:"B5 Ram",
              price:40,
              link:"youtube.com",
              estimated_watts:30
            }
          ]}/>

          <ComputerPart partname="GPU" partList={[
            {
              id:5,
              name:"4070 ti",
              price:4000,
              link:"youtube.com",
              estimated_watts:30000
            }
          ]}/>

          <ComputerPart partname="Storage" partList={[
            {
              id:6,
              name:"samsung",
              price:400,
              link:"youtube.com",
              estimated_watts:300
            }
          ]}/>

          <ComputerPart partname="Case" partList={[
            {
              id:3,
              name:"Kool Case",
              price:40,
              link:"youtube.com",
              estimated_watts:0
            }
          ]}/>

          <ComputerPart partname="PowerSupply" partList={[
            {
              id:7,
              name:"HorsePower",
              price:1000,
              link:"youtube.com",
              estimated_watts:150
            },
            {
              id:8,
              name:"HorsePower 2",
              price:10002,
              link:"youtube.com",
              estimated_watts:1502
            },
            {
              id:9,
              name:"HorsePower 3",
              price:1000212,
              link:"youtube.com",
              estimated_watts:1502
            }
          ]}/>
        </div>
      </div>

      <div className="summaryContainer">
        <ul>
          
        </ul>
      </div>
       
      <Footer/>
    </>
  )
}

export default App
