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

  const totalPrice = Object.values(selectedParts)
    .filter(data => data !== null)
    .reduce((acc, curr) => acc + (curr.part.price || 0), 0);

  const totalWatts = Object.values(selectedParts)
    .filter(data => data !== null)
    .reduce((acc, curr) => acc + (curr.part.wattage || 0), 0);

  const taxRate = 0.07; // 7% Tax
  const totalWithTax = totalPrice * (1 + taxRate);

  return (
  <div style={{ display: currentRightTab === 'Summary' ? 'block' : 'none' }} className="summarybar-container" >
    <span className="summary-title">Parts Summary</span>
    <div className="summary-content">
      <div className="saved-list">
        {Object.entries(defaultParts).map(([category, defaultPart]) => (
          <SummaryItem
            key={category}
            category_name={category}
            part_name={selectedMap.get(category) || defaultPart}
            price={selectedParts[category]?.part.price || 0}
            watts={selectedParts[category]?.part.wattage || 0}
          />
        ))}
      </div>
      
      <hr className="summary-separator" />
      <div className="summary-total-section">
        <div className="summary-text">Total Price: ${totalPrice.toFixed(2)}</div>
        <div className="summary-text">Total Watts: {totalWatts}W</div>
        <div className="summary-text">Total w/ Tax: ${totalWithTax.toFixed(2)}</div>
      </div>
    </div>
  </div>
);
}

export default SummaryBar;
