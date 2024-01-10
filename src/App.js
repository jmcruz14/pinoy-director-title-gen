import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <small>Coming soon: Movie title generator using select Director data</small>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
