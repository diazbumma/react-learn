import logo from './logo.svg';
import {useState} from 'react'

import './App.css';
import ItemList from './components/ItemList/ItemList';
import NewItem from './components/NewItem/NewItem';

const App = () => {
  const [itemList, setItemList] = useState([
    {id:"mv1", text: "Harry Potter"},
    {id:"mv2", text: "Fantastic Beasts And Where To Find Them"},
    {id:"mv3", text: "Harry Potter and the Chamber of Secret"}
  ]);

  const addNewItemHandler = (item) => {
    setItemList(itemList.concat(item))
    //console.log(item.id)
  }

  return (
    <div className="content">
      <h1>It Works!</h1>
      <NewItem addNewItem={addNewItemHandler} />
      <ItemList movies={itemList}/>
    </div>
  );
}

export default App;
