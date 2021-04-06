import './App.css';
import Header from './components/Header';
import ApiSearchHandler from './components/Search/index';
// import TableMain from './components/TableMain';

function App() {
  return (
    <div className="App">
      <Header />
      <ApiSearchHandler />
    </div>
  );
}

export default App;
