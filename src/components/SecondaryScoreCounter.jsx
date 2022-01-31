import { Box, Button, Container } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import React, { useState, useContext } from 'react';
import './styles/scoreFormatting.css';

import { SecondaryScoreContext } from '../context/SecondaryScoreContext';

export default function SecondaryScoreCounter() {
    const [score, setScore] = useState(0);
    const [count, setCount] = useContext(SecondaryScoreContext);

    const increment = () => {
        
        if (score > 14) {
            //
        } else {
            setScore(score + 1)
            setCount(count + 1);
        };

    };

    const decrement = () => {
        
        if (score < 1) {
            //
        } else {
            setScore(score - 1)
            setCount(count - 1);
        };
    };

    return (
        <Container>
            <Box className="flex-container">
                <Button className="button" onClick={decrement} variant="contained" color="primary">
                    <Remove />
                </Button>
                <h4 className="ver hor big-font">{score}</h4>
                <Button className="button" onClick={increment} variant="contained" color="primary">
                    <Add />
                </Button>
            </Box>
        </Container>
    );
}
