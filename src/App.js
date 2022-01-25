import React, { useState } from 'react';
import './App.css';
import ScoreCounter from './components/ScoreCounter';
import SecondaryDropdown from "./components/SecondaryDropdown";
import { Card } from '@mui/material';
import PrimaryScoreCounter from './components/PrimaryScoreCounter';
import { SecondaryScoreContext } from './context/SecondaryScoreContext';

function App() {
  const [secondaryScore, setSecondaryScore] = useState(0);
  const [primaryScore, setPrimaryScore] = useState(0);

  return (
    <div className="App">
      <div className="player-container">
        <SecondaryScoreContext.Provider value={secondaryScore, setSecondaryScore}>
          <div className="score-container">
            <h3>Battle Round 2</h3><PrimaryScoreCounter/>
            <h3>Battle Round 3</h3><PrimaryScoreCounter/>
            <h3>Battle Round 4</h3><PrimaryScoreCounter/>
            <h3>Battle Round 5</h3><PrimaryScoreCounter/>
              <SecondaryDropdown/>
              <ScoreCounter/>
              <SecondaryDropdown/>
              <ScoreCounter/>
              <SecondaryDropdown/>
              <ScoreCounter/>
          </div>
        </SecondaryScoreContext.Provider>

        <div className="score-container">
        <h3>Battle Round 2</h3><PrimaryScoreCounter/>
        <h3>Battle Round 3</h3><PrimaryScoreCounter/>
        <h3>Battle Round 4</h3><PrimaryScoreCounter/>
        <h3>Battle Round 5</h3><PrimaryScoreCounter/>
          <SecondaryDropdown/>
          <ScoreCounter/>
          <SecondaryDropdown/>
          <ScoreCounter/>
          <SecondaryDropdown/>
          <ScoreCounter/>
        </div>
      </div>
    </div>
  );
}

export default App;
