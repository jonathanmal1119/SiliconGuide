import './styles/Summarybar.css';
import SummaryItem from './SummaryItem';

// fallback part names
const defaultParts = {
  "CPU": "AMD Ryzen 5 7600X",
  "Motherboard": "MSI B650M PRO-VDH WIFI",
  "Memory": "Corsair Vengeance 16GB (2x8GB) DDR5-6000",
  "Storage": "Crucial P5 Plus 1TB NVMe SSD",
  "Graphics Card": "NVIDIA GeForce RTX 4070 12GB",
  "Power Supply": "Corsair RM750e 750W 80+ Gold",
  "CPU Cooler": "NZXT H5 Flow ATX Mid Tower",
  "Case Fans": "N/A"
};

function SummaryBar({ selectedParts = [], currentRightTab}) {
  // Build map safely
  const selectedMap = new Map(
    Array.isArray(selectedParts) ? selectedParts.map(({ category, part }) => [category, part.name]) : []
  );
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
