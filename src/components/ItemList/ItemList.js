import './ItemList.css'

const ItemList = (props) => {
    return (
        <ul className="item-list">
            {props.movies.map((item) => {
                return <li key={item.id}>{item.text}</li>
            })}
        </ul>
    );
}

export default ItemList;