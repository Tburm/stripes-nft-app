import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DAppProvider } from '@usedapp/core'

const config = {
  multicallAddresses: {
    588: "0xaF9D4DC0698d8FD9f41387ecb08D9976079B8086",
    31337: "0x2909280299c58268d5faed54074823eafbb436e8"
  }
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
