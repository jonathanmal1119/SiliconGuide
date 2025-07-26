import './styles/SavedList.css';

function SavedList({ name, isLast, selected, onClick }) {
    return (
    <div className="saved-list">
      <div className={`tree-item ${selected ? 'selected' : ''}`} onClick={onClick}>
        <div className={`tree-leaf ${isLast ? "last-branch" : "mid-branch"}`}>
          {name}
        </div>
      </div>
    </div>
  );
};

export default SavedList