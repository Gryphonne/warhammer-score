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
                <h1>Player 1</h1>
                <div className="score-container__item"><h3>Command Points</h3><CommandPoints /></div>
                <div className="score-container__item"><h3>Battle Round 2</h3><PrimaryScoreCounter /></div>
                <div className="score-container__item"><h3>Battle Round 3</h3><PrimaryScoreCounter /></div>
                <div className="score-container__item"><h3>Battle Round 4</h3><PrimaryScoreCounter /></div>
                <div className="score-container__item"><h3>Battle Round 5</h3><PrimaryScoreCounter /></div>
                <div className="score-container__item--objective"><SecondaryDropdown /><SecondaryScoreCounter /></div>
                <div className="score-container__item--objective"><SecondaryDropdown /><SecondaryScoreCounter /></div>
                <div className="score-container__item--objective"><SecondaryDropdown /><SecondaryScoreCounter /></div>
                <div className="score-container__points-container">
                  <div className="score-container__item--points"><h3 className="score-container__points-heading">Secondary Points Total</h3><SecondaryScoreTotal /></div>
                  <div className="score-container__item--points"><h3>Primary Points Total</h3><PrimaryScoreTotal /></div>
                  <div className="score-container__item--points"><h3>Painted Army</h3><PaintedArmy /></div>
                  <div className="score-container__item--points"><h3>Total</h3><CombinedScore /></div>
                </div>
              </div>
            </PaintedProvider>
          </PrimaryScoreProvider>
        </SecondaryScoreProvider>

        <SecondaryScoreProvider>
          <PrimaryScoreProvider>
            <PaintedProvider>
              <div className="score-container--right">
                <h1>Player 2</h1>
                <div className="score-container__item"><h3>Command Points</h3><CommandPoints /></div>
                <div className="score-container__item"><h3>Battle Round 2</h3><PrimaryScoreCounter /></div>
                <div className="score-container__item"><h3>Battle Round 3</h3><PrimaryScoreCounter /></div>
                <div className="score-container__item"><h3>Battle Round 4</h3><PrimaryScoreCounter /></div>
                <div className="score-container__item"><h3>Battle Round 5</h3><PrimaryScoreCounter /></div>
                <div className="score-container__item--objective"><SecondaryDropdown /><SecondaryScoreCounter /></div>
                <div className="score-container__item--objective"><SecondaryDropdown /><SecondaryScoreCounter /></div>
                <div className="score-container__item--objective"><SecondaryDropdown /><SecondaryScoreCounter /></div>
                <div className="score-container__points-container">
                  <div className="score-container__item--points"><h3 className="score-container__points-heading">Secondary Points Total</h3><SecondaryScoreTotal /></div>
                  <div className="score-container__item--points"><h3>Primary Points Total</h3><PrimaryScoreTotal /></div>
                  <div className="score-container__item--points"><h3>Painted Army</h3><PaintedArmy /></div>
                  <div className="score-container__item--points"><h3>Total</h3><CombinedScore /></div>
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
