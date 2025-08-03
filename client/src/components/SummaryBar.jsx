import './styles/Summarybar.css';
import SummaryItem from './SummaryItem';

const defaultParts = {
  "CPU": "",
  "Motherboard": "",
  "Memory": "",
  "Storage": "",
  "Graphics Card": "",
  "Power Supply": "",
  "CPU Cooler": "",
  "Case Fans": ""
};

function SummaryBar({ selectedParts = [], currentRightTab}) {
  const selectedMap = new Map(
  Object.entries(selectedParts)
    .filter(([_, data]) => data !== null)
    .map(([category, data]) => [category, data.part.name])
);
console.log(selectedMap)
  return (
    <div style={{ display: currentRightTab === 'Summary' ? 'block' : 'none' }} className="summarybar-container" >
      <span className="summary-title">Parts Summary</span>
      <div className="summary-list">
        {Object.entries(defaultParts).map(([category, defaultPart]) => (
          <SummaryItem
            key={category}
            category_name={category}
            part_name={selectedMap.get(category) || defaultPart}
          />
        ))}
      </div>
    </div>
  );
}

export default SummaryBar;