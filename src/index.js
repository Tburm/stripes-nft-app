import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DAppProvider, ChainId } from '@usedapp/core'

const config = {
  supportedChains: [
    588, // metis mainnet
    1088, // metis testnet
    ChainId.Localhost,
    ChainId.Hardhat
  ],
};

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
