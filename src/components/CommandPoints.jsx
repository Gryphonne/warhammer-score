import { Box, Button, Container, Paper } from '@mui/material';
import { Add, Clear, Remove } from '@mui/icons-material';
import React, { useState } from 'react';
import './styles/secondaryScoreCounter.css';

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
                <Button className="button" onClick={decrement} variant="contained" color="primary">
                    <Remove />
                </Button>
                <Paper className="ver hor big-font">{commandPoints}</Paper>
                <Button className="button" onClick={increment} variant="contained" color="primary">
                    <Add />
                </Button>
            </Box>
        </Container>
    );
}