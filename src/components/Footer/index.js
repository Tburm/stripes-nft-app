import React from 'react';
import { BsGithub, BsTwitter } from 'react-icons/bs';

function Footer(props) {
  return (
    <div className="flex flex-row justify-evenly w-full">
        <a className="flex flex-col items-center" href="https://github.com/Tburm/stripes-nft">
          <BsGithub className="text-3xl" />
          <p>NFT</p>
        </a>
        <a className="flex flex-col items-center" href="https://github.com/Tburm/stripes-nft-app">
          <BsGithub className="text-3xl" />
          <p>DAPP</p>
        </a>
        <a className="flex flex-col items-center" href="https://twitter.com/troybeee">
          <BsTwitter className="text-3xl" />
          <p>@troybeee</p>
        </a>
    </div>
  )
}
 
export default Footer;