import { Box, Container, Paper } from '@mui/material';
import React, { useContext } from 'react';

import './styles/secondaryScoreTotal.css'

import { PrimaryScoreContext } from '../context/PrimaryScoreContext';

const PrimaryScoreTotal = () => {
    const [count] = useContext(PrimaryScoreContext);

    return (
        <Container>
            <Box className="flex-container">
                <Paper className="vert hort big-font">{count}/45</Paper>
            </Box>
        </Container>
    );
}

export default PrimaryScoreTotal;