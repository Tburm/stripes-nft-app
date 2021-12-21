import React from 'react';

function About(props) {
  return (
    <div className="flex flex-col items-center w-full px-8">
      <p className="mb-4">
        Stripes is a 100% on-chain generative art project. The metadata for each STRIPE token
        is randomly generated during the process of minting your NFT.
      </p>
      <p className="my-4">
        Each STRIPE token contains 10 rows with these characteristics:
      </p>
      <ul className="list-disc text-left">
        <li>A random width of 1-32 pixels</li>
        <li>A random color</li>
        <li>A speed value</li>
      </ul>
    </div>
  )
}

export default About;