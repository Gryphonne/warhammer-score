import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from "@mui/material/styles";

import SecondaryTotalProvider from './context/SecondaryTotalContext';


const theme = createTheme({
  palette: {
    primary: {
      main: "#d3d3d3"
    },
    secondary: {
      main: "#ffcc80"
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <SecondaryTotalProvider>
    <App />
    </SecondaryTotalProvider>
    </ThemeProvider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
