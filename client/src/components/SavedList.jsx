import './styles/SavedList.css';

function SavedList(meta_data) {
    const {
        name,
        isLast
    } = meta_data

    return (
        <div className="saved-list">
            <div className="tree-item">
                <div className={`tree-leaf ${isLast ? "last-branch" : "mid-branch"}`}>
                    {name}
                </div>
            </div>
        </div>
    );
};

export default SavedList