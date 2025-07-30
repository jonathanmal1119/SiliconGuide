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
  const [savedLists] = useState([
    "Jon's List",
    "Richies's List",
    "Test List 2"
  ]);
  const [selectedList, setSelectedList] = useState(savedLists[0]);



  const [plans, setPlans] = useState(() =>
    Object.fromEntries(savedLists.map(name => [name, []]))
  );



  const handleAddPart = (category, part) => {
  setPlans(prev => {
    const updatedList = [...prev[selectedList].filter(p => p.category !== category), { category, part }];
    return {
      ...prev,
      [selectedList]: updatedList
    };
  });
};


  return (
    <>
      <Head />
      <Header />
      <div className="flex">
        <Sidebar savedLists={savedLists} selectedList={selectedList} setSelectedList={setSelectedList} />
        <Catalog onAddPart={handleAddPart} setCurrentTab={setCurrentTab} currentTab={currentTab}/>
        <RightSideBar selectedParts={plans[selectedList]} setCurrentRightTab={setCurrentRightTab} currentRightTab={currentRightTab}/>
      </div>
    </>
  )
}

export default App
