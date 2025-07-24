import { useState } from 'react'
import './App.css';
import Head from './components/Head';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Catalog from './components/Catalog';
import SummaryBar from './components/SummaryBar';

function App() {
  const [currentTab, setCurrentTab] = useState("CPU")


  return (
    <>
      <Head />
      <Header />
      <div className="flex">
        <Sidebar/>
        <Catalog setCurrentTab={setCurrentTab} currentTab={currentTab}/>
        <SummaryBar/>
      </div>
    </>
  )
}

export default App
