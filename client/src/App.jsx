import { useState } from 'react'
import './App.css';
import Head from './components/Head';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Catalog from './components/Catalog';
import RightSideBar from './components/RightSideBar';

function App() {
  const [currentTab, setCurrentTab] = useState("CPU")
  const [currentRightTab, setCurrentRightTab] = useState("Chat")
  const [selectedParts, setSelectedParts] = useState([]);

  const handleAddPart = (category, part) => {
    setSelectedParts(prev => [...prev, { category, part }]);
  };

  return (
    <>
      <Head />
      <Header />
      <div className="flex">
        <Sidebar/>
        <Catalog onAddPart={handleAddPart} setCurrentTab={setCurrentTab} currentTab={currentTab}/>
        <RightSideBar selectedParts={selectedParts} setCurrentRightTab={setCurrentRightTab} currentRightTab={currentRightTab}/>
      </div>
    </>
  )
}

export default App
