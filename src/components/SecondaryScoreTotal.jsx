import { Box, Container, Paper } from '@mui/material';
import React, { useContext, useState } from 'react';

import { SecondaryTotalContext } from '../context/SecondaryTotalContext';

function SecondaryScoreTotal() {
    const { secondaryTotal } = useContext(SecondaryTotalContext);

    return (
        <Container>
            <Box className="flex-container">
                <Paper className="ver hor big-font">{secondaryTotal}/45</Paper>
            </Box>
        </Container>
    );
}

export default SecondaryScoreTotal;