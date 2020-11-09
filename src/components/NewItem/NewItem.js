import './NewItem.css'

const NewItem = (props) => {
    const addItemHandler = (event) => {
        event.preventDefault();

        const newItem = {
            id: 'someId123',
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