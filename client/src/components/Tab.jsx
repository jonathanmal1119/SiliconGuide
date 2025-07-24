import './styles/Tab.css';

function Tab(meta_data) {
    const {
        name,
        isActive,
        onClick
    } = meta_data

    return (
        <div className={`tab ${isActive ? 'active' : ''}`} onClick={onClick}>
            <div>{name}</div>
        </div>
    );
};

export default Tab