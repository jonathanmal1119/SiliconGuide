import PropTypes from 'prop-types'

function List(props){
    const {itemList = []} = props;

    const listItems = itemList.map(item => 
        <tr key = {item.id}> 
            <td className="singleItem" id="itemName">{item.name}</td>
            <td className="singleItem" id = "price">{item.price}</td>
            <td className="singleItem" id = "link"> <a href={item.link}> {item.link}</a></td>
            <td className="singleItem" id = "watt"> {item.estimated_watts}W</td>
        </tr>
    );

    return(<>
        <tbody>{listItems}</tbody>
    </>);
}

List.propTypes ={
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string,price: PropTypes.number,link: PropTypes.string,estimated_watts: PropTypes.number}))
}

export default List