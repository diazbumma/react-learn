import {useState} from 'react'

import './NewItem.css'

const NewItem = (props) => {
    let [inputText, setInputText] = useState('') 

    const addItemHandler = (event) => {
        event.preventDefault();

        const newItem = {
            id: 'mvp' + (Math.floor((Math.random() * 100) + 1)),
            text: inputText
        }

        //console.log(inputText)
        setInputText('')

        props.addNewItem(newItem)
    }

    const textChangeHandler = (event) => {
        setInputText(event.target.value)
    }

    return (       
        <form className="item-form" onSubmit={addItemHandler}>
            <input type="text" value={inputText} onChange={textChangeHandler} />
            <button type="submit">Add Movie</button>
        </form>
    );
}

export default NewItem;