import logo from './logo.svg';
import './App.css';

// TODO: Replace this with the correct URL for your API
const API_URL = "http://localhost:3000/api/v1";

// TODO: Update this function to call your API
function getApiData() {
    return axios.get(API_URL).then(response => response.data);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
