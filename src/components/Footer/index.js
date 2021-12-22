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
      <a className="flex flex-col items-center" href="https://stardust-explorer.metis.io/address/0x36c27551BED3E1dB018FC93807378e312d3Bb397/transactions">
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