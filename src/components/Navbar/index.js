import React, { useState } from 'react';
import {
  Link
} from "react-router-dom";
import { useEthers } from '@usedapp/core';
import './index.css';

function Navbar(props) {
  const [navLinkOpen, navLinkToggle] = useState(false)
  const { activateBrowserWallet } = useEthers()

  const handleNavLinksToggle = () => {
    navLinkToggle(!navLinkOpen);
  };

  const renderClasses = () => {
    let classes = "flex justify-around items-center"
    if (navLinkOpen) {
      classes += " active"
    }
    return classes
  }

  return (
    <nav className="bg-gray-900 bg-opacity-80 px-5 flex items-center justify-between">
      <div className="logo flex ml-3 flex-row items-center">
        <a className="link text-3xl" href="/"><h4 className="whitespace-nowrap">Metis Minter</h4></a>
      </div>

      <ul className={renderClasses()}>
        <li>
          <button id='connect-btn' className="btn-light my-1 px-6 py-1" onClick={() => activateBrowserWallet()}>
            {props.account ?
              props.chainId === 588 || props.chainId === 1088 ?
                <p>{props.account.slice(0, 4) + "..." + props.account.slice(props.account.length-4, props.account.length)}</p>
                :
                "Wrong network"
              : "Connect"            
            }
          </button>
        </li>
      </ul>
      <div onClick={handleNavLinksToggle} className="hamburger-toggle">
        <i className="fas fa-bars fa-lg"></i>
      </div>
    </nav>
  )    
}
 
export default Navbar;