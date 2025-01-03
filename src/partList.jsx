import PropTypes from 'prop-types'

function List(props){
    const {itemList = []} = props;

    const listItems = itemList.map(item => (
        <div className='partContainer' key = {item.id} >
            <button className="addItem" id="add">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"/></svg>
            </button>
            <div className="partData" id="itemName">    {item.name}                 </div>
            <div className="partData" id="watt">        {item.estimated_watts} W    </div>
            <div className="partData" id="price">       ${item.price}                </div>
            <button className='buyItem' id="buy">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 22h14c1.103 0 2-.897 2-2V9a1 1 0 0 0-1-1h-3V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4a1 1 0 0 0-1 1v11c0 1.103.897 2 2 2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-4 3h2v2h2v-2h6v2h2v-2h2l.002 10H5V10z"/></svg>
                </a>
            </button>
        </div>
    ));

    return(<>
        {listItems}
    </>);
}

List.propTypes ={
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string,price: PropTypes.number,link: PropTypes.string,estimated_watts: PropTypes.number}))
}

export default List