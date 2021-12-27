import React from 'react';
import { BsGithub, BsTwitter, BsFillGrid3X3GapFill } from 'react-icons/bs';
import { ReactComponent as BlockExplorer } from '../../assets/block_explorer.svg';

function Footer(props) {
  return (
    <div className="flex flex-row justify-evenly w-full text-gray-200 mb-8">
        <a className="flex flex-col items-center" href="https://github.com/Tburm/stripes-nft">
          <BsGithub className="text-3xl" />
          <p>Contracts</p>
        </a>
        <a className="flex flex-col items-center" href="https://github.com/Tburm/stripes-nft-app">
          <BsGithub className="text-3xl" />
          <p>App</p>
        </a>
      <a className="flex flex-col items-center" href="https://stardust-explorer.metis.io/address/0x11d2223A617480EA2FD5aE7EB7b0d20C00151F21/transactions">
          <BsFillGrid3X3GapFill className="text-3xl" />
          <p>Block Explorer</p>
        </a>
        <a className="flex flex-col items-center" href="https://twitter.com/troybeee">
          <BsTwitter className="text-3xl" />
          <p>@troybeee</p>
        </a>
    </div>
  )
}
 
export default Footer;