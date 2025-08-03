import './styles/PartsList.css';
import defaultParts from '../data/defaultParts';
function PartsList({currentTab,onAddPart}) {
    
    return (
        <>
            <div className="parts-container">
                <table className="parts-table">
                    <colgroup>
                        <col style={{ width: "70%" }} />
                        <col style={{ width: "10%" }} />
                        <col style={{ width: "5%" }} />
                        <col style={{ width: "5%" }} />
                        <col style={{ width: "5%" }} />
                    </colgroup>
                    <thead>
                    <tr>
                        <th>Part</th>
                        <th>Ratings</th>
                        <th>Price</th>
                        <th>Wattage</th>
                        <th>Link</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {defaultParts[currentTab].map((part) => (
                            <tr key={part.name}>
                            <td>{part.name}</td>
                            <td>{part.ratings.toFixed(1)}</td>
                            <td>${part.price.toFixed(2)}</td>
                            <td>{part.wattage}W</td>
                            <td>
                                <a href={part.link} className='shopping-icon' target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.5" height="22.5" viewBox="0 0 16 16">
                                        <path fill="currentColor" d="M5 6.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0zm3 0a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5"/>
                                        <path fill="currentColor" fillRule="evenodd" d="M13.5 4H3.3l-.264-1.58a.496.496 0 0 0-.493-.418h-1a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5h.576l1.43 8.58a.496.496 0 0 0 .493.418h8.5a.5.5 0 0 0 0-1h-8.08l-.167-1h8.74a1 1 0 0 0 .992-.876l.491-3.93a1 1 0 0 0-.978-1.195zM3.4 5l.664 4h8.92l.5-4h-10.1z" clipRule="evenodd"/>
                                        <path fill="currentColor" d="M3.62 12.9a1.25 1.25 0 1 1 1.768 1.769A1.25 1.25 0 0 1 3.62 12.9m7.98 0a1.25 1.25 0 1 1 1.768 1.769A1.25 1.25 0 0 1 11.6 12.9"/>
                                    </svg>
                                </a>
                            </td>
                            <td><div className="plus-button" onClick={() => onAddPart(currentTab, part)} >+</div></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </>
    );
}

export default PartsList