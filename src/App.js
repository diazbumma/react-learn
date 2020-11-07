import logo from './logo.svg';
import './App.css';
import ItemList from './components/ItemList';

const App = () => {
  const movies = [
    {title: "Harry Potter"},
    {title: "Fantastic Beasts And Where To Find Them"},
    {title: "Harry Potter and the Chamber of Secret"}
  ];

  return (
    <div className="content">
      <h1>It Works!</h1>
      <ItemList movies={movies}/>
    </div>
  );
}

export default App;
