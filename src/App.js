import logo from './logo.svg';
import './App.css';
import ScoreSecondary from './components/score-secondary/ScoreSecondary';
import SecondaryDropdown from './components/secondary-dropdown/SecondaryDropdown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ScoreSecondary/>
        <SecondaryDropdown/>
      </header>
    </div>
  );
}

export default App;
