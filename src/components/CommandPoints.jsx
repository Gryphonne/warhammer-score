import { Box, Button, Container } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import React, { useState } from 'react';
import './styles/scoreFormatting.css';

export default function CommandPoints() {
    const [commandPoints, setCommandPoints] = useState(0);
    
    const increment = () => {
        setCommandPoints(commandPoints + 1)
    };

    const decrement = () => {
        if (commandPoints < 1) {
            //
        } else {
            setCommandPoints(commandPoints - 1)
        };
    };

    return (
        <Container>
            <Box className="flex-container">
                <Button className="button" onClick={decrement} variant="contained" color="primary" size="small">
                    <Remove />
                </Button>
                <h4 className="ver hor big-font">{commandPoints}</h4>
                <Button className="button" onClick={increment} variant="contained" color="primary" size="small">
                    <Add />
                </Button>
            </Box>
        </Container>
    );
}