import './styles/SavedList.css';

function SummaryItem(meta_data) {
    const {
        category_name,
        part_name
    } = meta_data

    return (
            <div className="summary-lea">
                <div className='summary-text'>
                    {category_name}
                </div>
                <div className="summary-leaf last-branch">
                    {part_name}
                </div>
            </div>
    );
};

export default SummaryItem