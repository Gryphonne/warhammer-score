import { Box, Container, Paper } from '@mui/material';
import React, { useContext } from 'react';

import './styles/secondaryScoreTotal.css'

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
                <Paper className="vert hort big-font">{countPrimary + countSecondary + countPainted}/100</Paper>
            </Box>
        </Container>
    );
}

export default CombinedScore;