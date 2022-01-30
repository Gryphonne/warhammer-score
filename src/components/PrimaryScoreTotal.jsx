import { Box, Container } from '@mui/material';
import React, { useContext } from 'react';

import './styles/scoreFormatting.css'

import { PrimaryScoreContext } from '../context/PrimaryScoreContext';

const PrimaryScoreTotal = () => {
    const [count] = useContext(PrimaryScoreContext);

    return (
        <Container>
            <Box className="flex-container">
                <h4 className="ver hor big-font">{count}/45</h4>
            </Box>
        </Container>
    );
}

export default PrimaryScoreTotal;