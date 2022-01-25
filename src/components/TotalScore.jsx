import { Box, Button, Container, Paper } from '@mui/material';
import { Add, Clear, Remove } from '@mui/icons-material';
import React, { useState, useContext } from 'react';
import { SecondaryScoreContext } from '../context/SecondaryScoreContext';
import './totalScore.css';

function TotalScore() {

    const {setSecondaryScore} = useContext(SecondaryScoreContext);

    return (
        <Container>
            <Box className="flex-container">
                <Paper className="ver hor big-font">{score}</Paper>
            </Box>
        </Container>
    );
}

export default TotalScore;