import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MantineProvider } from '@mantine/core';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store,persistor} from './components/Redux/Store'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
    <MantineProvider>
    <App />
  </MantineProvider>
  </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
