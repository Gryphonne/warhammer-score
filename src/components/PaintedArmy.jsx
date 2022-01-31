import { Box, Container, Checkbox } from '@mui/material';
import React, { useState, useContext } from 'react';
import './styles/scoreFormatting.css';

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
            <Checkbox className="checkbox" onChange={checkPainted} />
            </Box>
        </Container>
    );
}