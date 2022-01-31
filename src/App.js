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

    <div className="App">
      <div className="player-container">
        <SecondaryScoreProvider>
          <PrimaryScoreProvider>
            <PaintedProvider>
              <div className="score-container--left">
                <h3>Player 1</h3>
                <div className="score-container__item"><h4>Command Points</h4><CommandPoints /></div>
                <div className="score-container__item"><h4>Battle Round 2</h4><PrimaryScoreCounter /></div>
                <div className="score-container__item"><h4>Battle Round 3</h4><PrimaryScoreCounter /></div>
                <div className="score-container__item"><h4>Battle Round 4</h4><PrimaryScoreCounter /></div>
                <div className="score-container__item"><h4>Battle Round 5</h4><PrimaryScoreCounter /></div>
                <div className="score-container__points-container">
                <div className="score-container__item--points"><h4>Primary Points Total</h4><PrimaryScoreTotal /></div>
                </div>
                <div className="score-container__item--objective"><SecondaryDropdown /><SecondaryScoreCounter /></div>
                <div className="score-container__item--objective"><SecondaryDropdown /><SecondaryScoreCounter /></div>
                <div className="score-container__item--objective"><SecondaryDropdown /><SecondaryScoreCounter /></div>
                <div className="score-container__points-container">
                  <div className="score-container__item--points"><h4>Secondary Points Total</h4><SecondaryScoreTotal /></div>
                  </div>
                  <div className="score-container__points-container">
                  <div className="score-container__item--points"><h4>Painted Army</h4><PaintedArmy /></div>
                  <div className="score-container__item--points"><h4>Total</h4><CombinedScore /></div>
                </div>
              </div>
            </PaintedProvider>
          </PrimaryScoreProvider>
        </SecondaryScoreProvider>

        <SecondaryScoreProvider>
          <PrimaryScoreProvider>
            <PaintedProvider>
              <div className="score-container--left">
                <h3>Player 1</h3>
                <div className="score-container__item"><h4>Command Points</h4><CommandPoints /></div>
                <div className="score-container__item"><h4>Battle Round 2</h4><PrimaryScoreCounter /></div>
                <div className="score-container__item"><h4>Battle Round 3</h4><PrimaryScoreCounter /></div>
                <div className="score-container__item"><h4>Battle Round 4</h4><PrimaryScoreCounter /></div>
                <div className="score-container__item"><h4>Battle Round 5</h4><PrimaryScoreCounter /></div>
                <div className="score-container__points-container">
                <div className="score-container__item--points"><h4>Primary Points Total</h4><PrimaryScoreTotal /></div>
                </div>
                <div className="score-container__item--objective"><SecondaryDropdown /><SecondaryScoreCounter /></div>
                <div className="score-container__item--objective"><SecondaryDropdown /><SecondaryScoreCounter /></div>
                <div className="score-container__item--objective"><SecondaryDropdown /><SecondaryScoreCounter /></div>
                <div className="score-container__points-container">
                  <div className="score-container__item--points"><h4>Secondary Points Total</h4><SecondaryScoreTotal /></div>
                  </div>
                  <div className="score-container__points-container">
                  <div className="score-container__item--points"><h4>Painted Army</h4><PaintedArmy /></div>
                  <div className="score-container__item--points"><h4>Total</h4><CombinedScore /></div>
                </div>
              </div>
            </PaintedProvider>
          </PrimaryScoreProvider>
        </SecondaryScoreProvider>
      </div>
    </div>
  );
}

export default App;
