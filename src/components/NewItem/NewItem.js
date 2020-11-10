import './NewItem.css'

const NewItem = (props) => {
    const addItemHandler = (event) => {
        event.preventDefault();

        const newItem = {
            id: 'mvp' + (Math.floor((Math.random() * 100) + 1)),
            text: 'Lakad Matataaaaaag'
        }

        props.addNewItem(newItem)
    }

    return (       
        <form className="item-form" onSubmit={addItemHandler}>
            <input type="text" />
            <button type="submit">Add Movie</button>
        </form>
    );
}

export default NewItem;