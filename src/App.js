import React, { useState } from 'react';
import './App.css';
import SecondaryScoreCounter from './components/SecondaryScoreCounter';
import SecondaryDropdown from "./components/SecondaryDropdown";
import PrimaryScoreCounter from './components/PrimaryScoreCounter';
import SecondaryScoreTotal from './components/SecondaryScoreTotal';
import PrimaryScoreTotal from './components/PrimaryScoreTotal';
import CombinedScore from './components/CombinedScore';
import PaintedArmy from './components/PaintedArmy';
import CommandPoints from './components/CommandPoints';

import { PrimaryScoreProvider } from './context/PrimaryScoreContext';
import { SecondaryScoreProvider } from './context/SecondaryScoreContext';
import { PaintedProvider } from './context/PaintedContext';

function App() {

  return (
    <SecondaryScoreProvider>
      <PrimaryScoreProvider>
      <PaintedProvider>
      <div className="App">
        <div className="player-container">
          <div className="score-container">
            <h3>Playernameplaceholder</h3><CommandPoints />
            <h3>Battle Round 2</h3><PrimaryScoreCounter />
            <h3>Battle Round 3</h3><PrimaryScoreCounter />
            <h3>Battle Round 4</h3><PrimaryScoreCounter />
            <h3>Battle Round 5</h3><PrimaryScoreCounter />
            <SecondaryDropdown />
            <SecondaryScoreCounter />
            <SecondaryDropdown />
            <SecondaryScoreCounter />
            <SecondaryDropdown />
            <SecondaryScoreCounter />
            <h3>Secondary Points Total</h3><SecondaryScoreTotal />
            <h3>Primary Points Total</h3><PrimaryScoreTotal />
            <h3>Painted Army</h3><PaintedArmy/>
            <h3>Total</h3><CombinedScore />
            
          </div>

          <div className="score-container">
          <h3>Playernameplaceholder</h3><CommandPoints />
            <h3>Battle Round 2</h3><PrimaryScoreCounter />
            <h3>Battle Round 3</h3><PrimaryScoreCounter />
            <h3>Battle Round 4</h3><PrimaryScoreCounter />
            <h3>Battle Round 5</h3><PrimaryScoreCounter />
            <SecondaryDropdown />
            <SecondaryScoreCounter />
            <SecondaryDropdown />
            <SecondaryScoreCounter />
            <SecondaryDropdown />
            <SecondaryScoreCounter />
            <h3>Secondary Points Total</h3><SecondaryScoreTotal />
            <h3>Primary Points Total</h3><PrimaryScoreTotal />
            <h3>Painted Army</h3><PaintedArmy/>
            <h3>Total</h3><CombinedScore />
          </div>
        </div>
      </div>
      </PaintedProvider>
      </PrimaryScoreProvider>
      </SecondaryScoreProvider>
  );
}

export default App;
