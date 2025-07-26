import Tab from './Tab';
import './styles/Tabs.css';

function Tabs({ currentTab, setCurrentTab }) {
    const tabLabels = ["CPU", "Motherboard", "Memory", "Storage", "Graphics Card", "Case", "Power Supply", "CPU Cooler", "Case Fans"];


    return (
        <div className="tabs-header">
            {tabLabels.map((label) => (
                <Tab name={label} isActive={currentTab === label} onClick={() => setCurrentTab(label)}/>
            ))}
        </div>
    );
};

export default Tabs