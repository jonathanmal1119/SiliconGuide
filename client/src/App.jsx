import { useState } from 'react'
import './App.css';
import Head from './components/Head';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Catalog from './components/Catalog';
import RightSideBar from './components/RightSideBar';

function App() {
  const [currentTab, setCurrentTab] = useState("CPU");
  const [currentRightTab, setCurrentRightTab] = useState("Chat");
  const [savedLists] = useState([
    "Jon's List",
    "Richies's List",
    "Test List 2"
  ]);
  const [selectedList, setSelectedList] = useState(savedLists[0]);

  const categories = ["CPU", "Motherboard", "Memory", "Storage", "Graphics Card", "Case", "Power Supply", "CPU Cooler", "Case Fans"];

  const [plans, setPlans] = useState(() =>
    Object.fromEntries(savedLists.map(name => [
      name,
      Object.fromEntries(categories.map(cat => [cat, null]))
    ]))
  );

  const handleAddPart = (category, part) => {
    setPlans(prev => ({
      ...prev,
      [selectedList]: {
        ...prev[selectedList],
        [category]: { category, part }
      }
    }));
  };

  return (
    <>
      <Head />
      <Header currPlan={plans[selectedList]} />
      <div className="flex">
        <Sidebar savedLists={savedLists} selectedList={selectedList} setSelectedList={setSelectedList} />
        <Catalog onAddPart={handleAddPart} setCurrentTab={setCurrentTab} currentTab={currentTab} />
        <RightSideBar selectedParts={plans[selectedList]} setCurrentRightTab={setCurrentRightTab} currentRightTab={currentRightTab} />
      </div>
    </>
  );
}

export default App;
