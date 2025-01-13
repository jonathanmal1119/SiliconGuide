import ComputerPart from './ComputerPart'
import Header from './Header'
import Footer from './Footer'
import './App.css'
import ChatBox from './Chat'
import React, { useState } from "react";

function App() {
  const [query, setInput] = useState("");
  const [currentCategory, setCategory] = useState("");

  const getResponse = async (data) => {
    setInput(data);
  };

  const updateCategory = async (data) => {
    setCategory(data);
  };

  const parseResponse = async () => {
    switch (currentCategory) {
      case "CPU":
        return query;
      case "Motherboard":
        return query;
      case "Memory":
        return query;
      case "GPU":
          return query;
      case "Storage":
        return query;
      case "Case":
        return query;
      case "PowerSupply":
        return query;
    }
  };

  return (
    <>
      <Header/>
      <div className='main'>

        <div className="prevListContainer">
          
        </div>

        <div className="currentPartsContainer">
          <div className="allparts">
            <ComputerPart partname="CPU"          updateCategory={updateCategory}   partList={parseResponse()}/>
            <ComputerPart partname="Motherboard"  updateCategory={updateCategory}   partList={parseResponse()}/>
            <ComputerPart partname="Memory"       updateCategory={updateCategory}   partList={parseResponse()}/>
            <ComputerPart partname="GPU"          updateCategory={updateCategory}   partList={parseResponse()}/>
            <ComputerPart partname="Storage"      updateCategory={updateCategory}   partList={parseResponse()}/>
            <ComputerPart partname="Case"         updateCategory={updateCategory}   partList={parseResponse()}/>
            <ComputerPart partname="PowerSupply"  updateCategory={updateCategory}   partList={parseResponse()}/>
          </div>
        </div>

        <div className="summaryContainer">
          <ul>
            
          </ul>
        </div>
      </div>
       
      <Footer/>

      <ChatBox responseFunc = {getResponse} />

    </>
  )
}

export default App
