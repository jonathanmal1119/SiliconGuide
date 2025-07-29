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

  return (
    <>
      <Head />
      <Header />
      <div className="flex">
        <Sidebar/>
        <Catalog setCurrentTab={setCurrentTab} currentTab={currentTab}/>
        <RightSideBar setCurrentRightTab={setCurrentRightTab} currentRightTab={currentRightTab}/>
      </div>
    </>
  )
}

export default App
