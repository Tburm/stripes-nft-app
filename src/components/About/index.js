import React from 'react';

function About(props) {
  return (
    <div className="flex flex-col items-center w-full px-8">
      <p className="mb-4">
        Stripes is a 100% on-chain generative art project. The metadata for each STRIPE token
        is generated when your NFT is minted and stored on-chain. The smart contract decodes
        this on-chain data to draw the image on an SVG canvas. These NFTs do not rely on IPFS
        or APIs to retrieve the image off-chain.
      </p>
      <p className="my-4">
        Each STRIPE token contains as 32x32 pixel SVG canvas with 10 stripes. Each stripe is
        randomly generated with these characteristics:
      </p>
      <ul className="list-disc text-left">
        <li>Width of 1-32 pixels</li>
        <li>Y-location</li>
        <li>Color (R-G-B)</li>
        <li>Speed (1-10 second loop)</li>
      </ul>
    </div>
  )
}

export default About;