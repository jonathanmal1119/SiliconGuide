import './styles/Sidebar.css';
import SavedList from './SavedList';
import { useState } from 'react';

function Sidebar({ selectedList, setSelectedList, savedLists }) {
/*
    const savedLists = [
    "Jon's List",
    "Richies's List",
    "Test List 2"
    ];
 const [selectedList, setSelectedList] = useState(savedLists[0]);
*/



    return (
        <div className="sidebar-container">
            <span className='Title'>Saved Lists</span>
            <div className='spacer-tree'/>
            <div className="list-tree">
                <div className='tree-spacer'/>
                {savedLists.map((name, index) => (
                <SavedList
                    key={name}
                    name={name}
                    isLast={index === savedLists.length - 1}
                    selected={selectedList === name}
                    onClick={() => setSelectedList(name)}
                />
                ))}
            </div>
        </div>
    );
};

export default Sidebar