import Tabs from './Tabs';
import PartsList from './PartsList';
import './styles/Catalog.css';

function Catalog({currentTab,setCurrentTab}) {
    return (
        <div className="catalog-container">
            <h2 className='catalog-header'>Parts Catalog</h2>
            <div className="catalog-tabs-wrapper">
                <Tabs setCurrentTab={setCurrentTab} currentTab={currentTab}/>
            </div>
            
            <div className="catalog-body">
                <div className='catalog-partslist-wrapper'>
                    <PartsList currentTab ={currentTab}/>
                </div>
            </div>
        </div>
    );
};

export default Catalog