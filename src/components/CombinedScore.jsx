import { Box, Container } from '@mui/material';
import React, { useContext } from 'react';

import './styles/scoreFormatting.css'

import { PrimaryScoreContext } from '../context/PrimaryScoreContext';
import { SecondaryScoreContext } from '../context/SecondaryScoreContext';
import { PaintedContext } from '../context/PaintedContext';

const CombinedScore = () => {
    const [countPrimary] = useContext(PrimaryScoreContext);
    const [countSecondary] = useContext(SecondaryScoreContext);
    const [countPainted] = useContext(PaintedContext);

    return (
        <Container>
            <Box className="flex-container">
                <h4 className="ver hor big-font">{countPrimary + countSecondary + countPainted}/100</h4>
            </Box>
        </Container>
    );
}

export default CombinedScore;