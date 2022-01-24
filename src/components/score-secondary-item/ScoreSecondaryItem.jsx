import React, { useCallback, useState } from 'react';
import './scoreSecondary.css'

const ScoreSecondaryItem = ({ active, onClick, score }) => {
    const [points, setPoints] = useState(0);

    return (
        <div onClick={onClick} className={active ? "cell active" : "cell"}>
            {score}
        </div>
    );
};

export default ScoreSecondaryItem;

