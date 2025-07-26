import './styles/Summarybar.css';
import SummaryItem from './SummaryItem';

function SummaryBar() {


    return (
        <div className="summarybar-container">
            <span className="summary-title">Parts Summary</span>
            <div className='summary-list'>
                <SummaryItem category_name="CPU" part_name="AMD Ryzen 5 7600X"/>
                <SummaryItem category_name="Motherboard" part_name="MSI B650M PRO-VDH WIFI"/>
                <SummaryItem category_name="Memory" part_name="Corsair Vengeance 16GB (2x8GB) DDR5-6000"/>
                <SummaryItem category_name="Storage" part_name="Crucial P5 Plus 1TB NVMe SSD"/>
                <SummaryItem category_name="Graphics Card" part_name="NVIDIA GeForce RTX 4070 12GB"/>
                <SummaryItem category_name="Power Supply" part_name="Corsair RM750e 750W 80+ Gold"/>
                <SummaryItem category_name="CPU Cooler" part_name="NZXT H5 Flow ATX Mid Tower"/>
                <SummaryItem category_name="Case Fans" part_name="N/A"/>
            </div>
        </div>
    );
};

export default SummaryBar