import './App.css';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';

function App() {
  return (
    <div className="container">
      <header>
        <Header></Header>
        <Products></Products>
      </header>
    </div>
  );
}

export default App;
