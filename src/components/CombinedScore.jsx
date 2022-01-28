import { Box, Container, Paper } from '@mui/material';
import React, { useContext } from 'react';

import './secondaryScoreTotal.css'

import { PrimaryScoreContext } from '../context/PrimaryScoreContext';
import { SecondaryScoreContext } from '../context/SecondaryScoreContext';

const CombinedScore = () => {
    const [countPrimary] = useContext(PrimaryScoreContext);
    const [countSecondary] = useContext(SecondaryScoreContext);

    return (
        <Container>
            <Box className="flex-container">
                <Paper className="vert hort big-font">{countPrimary + countSecondary}/90</Paper>
            </Box>
        </Container>
    );
}

export default CombinedScore;