import Part from './Part';
import './styles/PartsList.css';
import defaultParts from '../data/defaultParts';
function PartsList({currentTab}) {
    
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
                            <td><a href={part.link}>Link</a></td>
                            <td><div className="plus-button">+</div></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </>
    );
}

export default PartsList