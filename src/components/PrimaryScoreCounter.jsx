import { Box, Button, Container, Paper } from '@mui/material';
import { Add, Clear, Remove } from '@mui/icons-material';
import React, { useState, useContext } from 'react';
import './secondaryScoreCounter.css';

import { PrimaryScoreContext } from '../context/PrimaryScoreContext';

export default function PrimaryScoreCounter() {
    const [score, setScore] = useState(0);
    const [count, setCount] = useContext(PrimaryScoreContext);

    const increment = () => {
        
        if (score > 14) {
            //
        } else {
            setScore(score + 5)
            setCount(count + 5);
        };

    };

    const decrement = () => {
        
        if (score < 1) {
            //
        } else {
            setScore(score - 5)
            setCount(count - 5);
        };
    };

    return (
        <Container>
            <Box className="flex-container">
                <Button className="button" onClick={decrement} variant="contained" color="primary">
                    <Remove />
                </Button>
                <Paper className="ver hor big-font">{score}</Paper>
                <Button className="button" onClick={increment} variant="contained" color="primary">
                    <Add />
                </Button>
            </Box>
        </Container>
    );
}
