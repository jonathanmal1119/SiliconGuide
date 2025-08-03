import './styles/SavedList.css';

function SummaryItem(meta_data) {
    const {
        category_name,
        part_name,
        price,
        watts
    } = meta_data;

    return (
        <div className="summary-leaf">
            <div className='summary-text'>
                {category_name}
            </div>
            <div className="summary-leaf last-branch">
                {part_name}
            </div>
            {(price > 0 || watts > 0) && (
                <div className="summary-sub-details">
                    {price > 0 && `$${price.toFixed(2)}`}
                    {watts > 0 && ` | ${watts}W`}
                </div>
            )}
        </div>
    );
}

export default SummaryItem;
