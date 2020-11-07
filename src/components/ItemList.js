import './ItemList.css'

const ItemList = (props) => {
    return (
        <ul className="item-list">
            {props.movies.map((item) => {
                return <li>{item.title}</li>
            })}
        </ul>
    );
}

export default ItemList;