import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <b>Deployment Options:</b> AWS Amplify | CodeStar | CodeCatalyst | Container Services
        </p>
        <p>
          Build: <code>yarn build</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built with React
        </a>
      </header>
    </div>
  );
}

export default App;
