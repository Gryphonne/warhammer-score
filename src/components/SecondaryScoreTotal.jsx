import { Box, Container, Paper } from '@mui/material';
import React, { useContext } from 'react';

import './secondaryScoreTotal.css'

import { SecondaryScoreContext } from '../context/SecondaryScoreContext';

const SecondaryScoreTotal = () => {
    const [count] = useContext(SecondaryScoreContext);

    return (
        <Container>
            <Box className="flex-container">
                <Paper className="vert hort big-font">{count}/45</Paper>
            </Box>
        </Container>
    );
}

export default SecondaryScoreTotal;