import React, { useState } from 'react';
import './scoreSecondary.css';
import ScoreSecondaryItem from '../score-secondary-item/ScoreSecondaryItem';

const secondaryScore = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

const ScoreSecondary = () => {

    return (
        <div className="container">
            <div className="grid">
                {secondaryScore.map((scoreSecondaryItem, i) => {
                    const value = i

                    return <ScoreSecondaryItem 
                                score={secondaryScore[value]}
                                active={value === selected}
                                onClick={() => setSelected(value)}/>
                })}
            </div>
        </div>
    );
};

export default ScoreSecondary;