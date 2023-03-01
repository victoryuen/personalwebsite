import logo from './logo.svg';
import './App.css';

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
function AboutPage() {
  return (
    
    <div>
      <img className="avatar" />
      <h1>About Me</h1>
      <h2>VictorYuen</h2>
      <p>HEYYYYYYY <br /> IT WORKS WOOOOO</p>

      </div>
  );
}

export default function MyApp() {
  return (
    
    <div>
      <AboutPage />
      <h1>Welcome to my app</h1>
      
    </div>
  );
}
