import React from 'react';
import { BsGithub, BsTwitter } from 'react-icons/bs';

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
        <a className="flex flex-col items-center" href="https://twitter.com/troybeee">
          <BsTwitter className="text-3xl" />
          <p>@troybeee</p>
        </a>
    </div>
  )
}
 
export default Footer;