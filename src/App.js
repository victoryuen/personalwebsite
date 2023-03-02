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
const user = {
  name: 'Victor Yuen',
  imageUrl: 'https://i.stack.imgur.com/l60Hf.png',
  imageWidth: 100,
  imageHeight: 100,
};

const products = [
  { title: 'Strawberry', id: 1 },
  { title: 'Tacos', id: 2 },
  { title: 'Steak', id: 3 },
];

function AboutPage() {
  return (
    
    <div style={{ textAlign: 'center' }}>
      <h1>{user.name}</h1>
      <img
       className = "avatar"
      src={user.imageUrl}
      style={{
        width: user.imageWidth,
        height: user.imageHeight
      }}
  ></img>
      <h1>wdawd</h1>
      <h2>About Me</h2>
      <p>Hunter College <br /> Computer Science Major</p>

      </div>
  );
}
function TastyFoodList(){
  const listItems = products.map(products =>
    <li key={products.id}>{products.title}</li>
    )
}
export default function MyApp() {
  return (
    
    <div>
      <AboutPage />
      <TastyFoodList />
      <h1>Welcome to my app</h1>
      
    </div>
  );
}
