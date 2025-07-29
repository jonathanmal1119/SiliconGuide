import SummaryBar from './SummaryBar';
import Chat from './Chat';
import Tab from './Tab';
import './styles/Tabs.css';

function RightSideBar({currentRightTab, setCurrentRightTab,selectedParts}) {
    const tabLabels = ["Chat", "Summary"];

    return (
        <div className='rightside-container'>
            <div className='tabs-outline'>
                <div className="right-tabs-header">
                    {tabLabels.map((label) => (
                        <Tab name={label} isActive={currentRightTab === label} onClick={() => setCurrentRightTab(label)}/>
                    ))}
                </div>
            </div>
            {currentRightTab == 'Chat' &&  <Chat/>}
            {currentRightTab == 'Summary' &&  <SummaryBar selectedParts={selectedParts}/>}
        </div>
    );
};

export default RightSideBar