import Tab from './Tab';
import './styles/Tabs.css';

function Tabs({ currentTab, setCurrentTab }) {
    const tabLabels = ["CPU", "CPU Cooler", "Motherboard", "Memory", "Storage", "Graphics Card", "Case", "Case Fans", "Power Supply"];


    return (
        <div className="tabs-header">
            {tabLabels.map((label) => (
                <Tab name={label} isActive={currentTab === label} onClick={() => setCurrentTab(label)}/>
            ))}
        </div>
    );
};

export default Tabs