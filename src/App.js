import React, { useState } from 'react';
import './App.css';
import SecondaryScoreCounter from './components/SecondaryScoreCounter';
import SecondaryDropdown from "./components/SecondaryDropdown";
import PrimaryScoreCounter from './components/PrimaryScoreCounter';
import SecondaryScoreTotal from './components/SecondaryScoreTotal';

function App() {

  return (
    <div className="App">
      <div className="player-container">
          <div className="score-container">
            <h3>Battle Round 2</h3><PrimaryScoreCounter/>
            <h3>Battle Round 3</h3><PrimaryScoreCounter/>
            <h3>Battle Round 4</h3><PrimaryScoreCounter/>
            <h3>Battle Round 5</h3><PrimaryScoreCounter/>
              <SecondaryDropdown/>
              <SecondaryScoreCounter/>
              <SecondaryDropdown/>
              <SecondaryScoreCounter/>
              <SecondaryDropdown/>
              <SecondaryScoreCounter/>
              <SecondaryScoreTotal></SecondaryScoreTotal>
          </div>
        <div className="score-container">
        <h3>Battle Round 2</h3><PrimaryScoreCounter/>
        <h3>Battle Round 3</h3><PrimaryScoreCounter/>
        <h3>Battle Round 4</h3><PrimaryScoreCounter/>
        <h3>Battle Round 5</h3><PrimaryScoreCounter/>
          <SecondaryDropdown/>
          <SecondaryScoreCounter/>
          <SecondaryDropdown/>
          <SecondaryScoreCounter/>
          <SecondaryDropdown/>
          <SecondaryScoreCounter/>
        </div>

      </div>
    </div>
  );
}

export default App;
