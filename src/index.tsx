import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme'
import { CssBaseline } from '@mui/material';

import { store } from './store';
import { Provider } from 'react-redux'
import { fetchBooksList } from './store/api-actions';
import { PanoramaRounded } from '@mui/icons-material';
import paramsToObj from './utils/paramsToObj';

// const searchParams = new URLSearchParams(window.location.search);

// searchParams.toString() && store.dispatch(fetchBooksList(searchParams))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <App />
        </CssBaseline>
      </ThemeProvider>
    </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
