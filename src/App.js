import React, { useState } from 'react';
import './App.css';
import ScoreSecondary from './components/score-secondary/ScoreSecondary';
import SecondaryDropdown from './components/secondary-dropdown/SecondaryDropdown';

function App() {

  return (
    <div className="App">
      <div className="player-container">
        <div className="score-container">
          <div className="item">
            <SecondaryDropdown/>
          </div>
          <div className="item">
            <ScoreSecondary />
          </div>
          <div className="item">
            <SecondaryDropdown/>
            {score}
          </div>
          <div className="item">
            <ScoreSecondary/>
          </div>
          <div className="item">
            <SecondaryDropdown/>
          </div>
          <div className="item">
            <ScoreSecondary/>
          </div>
        </div>
        <div className="score-container">
          <div className="item">
            <SecondaryDropdown/>
          </div>
          <div className="item">
            <ScoreSecondary/>
          </div>
          <div className="item">
            <SecondaryDropdown/>
          </div>
          <div className="item">
            <ScoreSecondary/>
          </div>
          <div className="item">
            <SecondaryDropdown/>
          </div>
          <div className="item">
            <ScoreSecondary/>
          </div>   
        </div>  
      </div>
      <div className="total-score-container">
        <div className="total-score-item">
          <h1>0</h1>
        </div>
        <div className="total-score-item">
          <h1>"hi"</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
