import { Box, Button, Container, Paper, Checkbox } from '@mui/material';
import { Add, Clear, Remove } from '@mui/icons-material';
import React, { useState, useContext } from 'react';
import './styles/secondaryScoreCounter.css';

import { PaintedContext } from '../context/PaintedContext';

export default function PaintedArmy() {
    const [checked, setChecked] = useState(false);
    const [count, setCount] = useContext(PaintedContext);
    
    const checkPainted = () => {
        setChecked(checked => !checked)
        
        if (!checked) {
            increment();
        } else {
            decrement();
        }
    }

    const increment = () => {
        setCount(count + 10)
    };

    const decrement = () => {
        setCount(count - 10)
    };

    return (
        <Container>
            <Box className="flex-container">
            <Checkbox onChange={checkPainted} />
            </Box>
        </Container>
    );
}