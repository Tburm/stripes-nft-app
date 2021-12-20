import React, { useState, useEffect } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useEthers } from '@usedapp/core'

// styles
import './App.css';

// components
import Navbar from './components/Navbar'
import Home from './components/Home'

// data
import addresses from "./data/addresses.json";
import abis from "./data/abis.js";

function App() {
  const { activateBrowserWallet, active, account, library, chainId, error } = useEthers()

  let newProps = {
    active: active,
    account: account,
    library: library,
    chainId: chainId,
    error: error,
    abis: abis,
    addresses: chainId && addresses[chainId.toString()] ? addresses[chainId.toString()]: undefined
  }

  return (
    <div className="bg-primary-100" id="app">
      <div id="content">
        <Router>
          <Navbar {...newProps}/>
          <Switch>
            <Route exact path="/">
              <Home {...newProps} />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App;
