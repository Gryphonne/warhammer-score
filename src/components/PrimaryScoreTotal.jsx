import { Box, Container } from '@mui/material';
import React, { useContext } from 'react';

import './styles/scoreFormatting.css'

import { PrimaryScoreContext } from '../context/PrimaryScoreContext';
import { CountertopsOutlined } from '@mui/icons-material';

const PrimaryScoreTotal = () => {
    const [count] = useContext(PrimaryScoreContext);

    return (
        <Container className="flex-tot-container">
            <Box>
                <h4 className="ver-tot hor-tot big-font-tot">{count}/45</h4>
            </Box>
        </Container>
    );
}

export default PrimaryScoreTotal;