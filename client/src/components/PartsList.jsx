import Part from './Part';
import './styles/PartsList.css';

function PartsList() {
    const parts = [
    { name: "Intel Core i9-13900K", ratings: 5.0 ,price: 429.99, wattage: 125 },
    { name: "AMD Ryzen 9 7950X3D", ratings: 2.1, price: 599.99, wattage: 120 },
    { name: "Intel Core i7-13700K", ratings: 3.2, price: 349.99, wattage: 100 },
    { name: "AMD Ryzen 7 7700X",  ratings: 4.4, price: 299.99, wattage: 85 },
    { name: "Intel Core i5-13600K", ratings: 3.9, price: 249.99, wattage: 65 },
    ];

    return (
        <>
            <div className="parts-container">
                <table className="parts-table">
                    <colgroup>
                        <col style={{ width: "70%" }} />
                        <col style={{ width: "10%" }} />
                        <col style={{ width: "5%" }} />
                        <col style={{ width: "5%" }} />
                    </colgroup>
                    <thead>
                    <tr>
                        <th>Part</th>
                        <th>Ratings</th>
                        <th>Price</th>
                        <th>Wattage</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {parts.map((part) => (
                            <tr key={part.name}>
                            <td>{part.name}</td>
                            <td>{part.ratings.toFixed(1)}</td>
                            <td>${part.price.toFixed(2)}</td>
                            <td>{part.wattage}W</td>
                            <td><button className="add-button">Add Part</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </>
    );
}

export default PartsList