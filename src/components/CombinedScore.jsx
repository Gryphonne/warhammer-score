import { Box, Container } from '@mui/material';
import React, { useContext } from 'react';

import './styles/totalScoreFormatting.css'

import { PrimaryScoreContext } from '../context/PrimaryScoreContext';
import { SecondaryScoreContext } from '../context/SecondaryScoreContext';
import { PaintedContext } from '../context/PaintedContext';

const CombinedScore = () => {
    const [countPrimary] = useContext(PrimaryScoreContext);
    const [countSecondary] = useContext(SecondaryScoreContext);
    const [countPainted] = useContext(PaintedContext);

    return (
        <h4 className="h2-tot">{countPrimary + countSecondary + countPainted}/100</h4>
    );
}

export default CombinedScore;