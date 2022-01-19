import React from 'react';
import './scoreSecondary.css'

const ScoreSecondaryItem = ({ active, onClick, score }) => {

    return (
        <div onClick={onClick} className={active ? "cell active" : "cell"}>
            {score}
        </div>
    );
};

export default ScoreSecondaryItem;