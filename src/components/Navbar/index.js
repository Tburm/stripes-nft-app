import React, { useState } from 'react';
import { useEthers } from '@usedapp/core'
import './index.css';

function Navbar(props) {
  const { activateBrowserWallet } = useEthers()

  return (
    <nav className="px-5 flex items-center justify-between">
      <div className="logo flex flex-row items-center">
        <a className="link text-3xl" href="/"><h4 className="text-gray-200">Stripes</h4></a>
      </div>

      <ul className="flex justify-around items-center">
        <li>
          <button className="btn" id="connect-btn" onClick={() => activateBrowserWallet()}>
            {!props.error ?
              props.account ?
                props.chainId === 588 || props.chainId === 1088 || props.chainId === 31337 ?
                  <p>{props.account.slice(0, 4) + "..." + props.account.slice(props.account.length-4, props.account.length)}</p>
                  :
                  "Wrong network"
                : "Connect"
              : "Unsupported Network"
            }
          </button>
        </li>
      </ul>
    </nav>
  )    
}
 
export default Navbar;