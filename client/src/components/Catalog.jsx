import Tabs from './Tabs';
import PartsList from './PartsList';
import './styles/Catalog.css';

function Catalog({currentTab,setCurrentTab,onAddPart}) {
    const tabLabels = ["CPU", "Motherboard", "Memory", "Storage", "Graphics Card", "Case", "Power Supply", "CPU Cooler", "Case Fans"];  

    return (
        <div className="catalog-container">
            <h2 className='catalog-header'>Parts Catalog</h2>
            <div className="catalog-tabs-wrapper">
                <Tabs setCurrentTab={setCurrentTab} currentTab={currentTab} tabLabels={tabLabels}/>
            </div>
            
            <div className="catalog-body">
                <div className='catalog-partslist-wrapper'>
                    <PartsList onAddPart = {onAddPart} currentTab ={currentTab}/>
                </div>
            </div>
        </div>
    );
};

export default Catalog