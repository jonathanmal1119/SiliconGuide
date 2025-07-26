import './styles/Sidebar.css';
import SavedList from './SavedList';

function Sidebar() {
    return (
        <div className="sidebar-container">
            <span className='Title'>Saved Lists</span>
            <div className='spacer-tree'/>
            <div className="list-tree">
                <div className='tree-spacer'/>
                <SavedList name="Jon's List"/>
                <SavedList name="Richies's List"/>
                <SavedList name="Test List 2" isLast/>
            </div>
        </div>
    );
};

export default Sidebar