import logo from './logo.svg';
import './App.css';
import ItemList from './components/ItemList';

const App = () => {
  const movies = [
    {id:"mv1", title: "Harry Potter"},
    {id:"mv2", title: "Fantastic Beasts And Where To Find Them"},
    {id:"mv3", title: "Harry Potter and the Chamber of Secret"}
  ];

  return (
    <div className="content">
      <h1>It Works!</h1>
      <ItemList movies={movies}/>
    </div>
  );
}

export default App;
