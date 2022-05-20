import logo from './logo.svg';
import './App.css';
import Fetch from './Fetch.js'
import Banner from './Banner.js'
import { Counter } from "./Counter"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Run npm test to start testing
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
        <Counter />
      <Banner message="Morning" />
      <Fetch url="/greeting" />
</header>
    </div>
  );
}

export default App;
