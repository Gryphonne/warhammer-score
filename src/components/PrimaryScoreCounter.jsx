import { Box, Button, Container, Paper } from '@mui/material';
import { Add, Clear, Remove } from '@mui/icons-material';
import React, { useState } from 'react';
import './scoreCounter.css';

export function maxScore(score, setScore) {
    if (score > 11) {
        setScore = 12
    } else {
        setScore(score + 4)
    };
}

export function minScore(score, setScore) {
    if (score < 1) {
        setScore = 0
    } else {
        setScore(score - 4)
    };
}

function PrimaryScoreCounter() {
    const [score, setScore] = useState(0);

    return (
        <Container>
            <Box className="flex-container">
                <Button className="button" data-testid="decrement" onClick={() => minScore(score, setScore)} variant="contained" color="primary">
                    <Remove />
                </Button>
                <Paper className="ver hor big-font">{score}</Paper>
                <Button data-testid="incrementHome" onClick={() => maxScore(score, setScore)} variant="contained" color="primary">
                    <Add />
                </Button>
            </Box>
        </Container>
    );
}

export default PrimaryScoreCounter;