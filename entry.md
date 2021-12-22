## Inspiration
This project was inspired by the recent explosion in popularity of NFT projects on Ethereum mainnet. A majority of these projects use off-chain storage like IPFS or an API owned by the project team to return your NFTs image and metadata. This means your NFT is no more than a pointer to these locations off-chain, and if the project stop maintaining the API the images and metadata will disappear.

Projects like [Ether Orcs](https://opensea.io/collection/ether-orcs), [Anonymice](https://opensea.io/collection/anonymice), [Wolf Game](https://opensea.io/collection/wolf-game),  and others have started to store data on-chain to retrieve the images, however on Ethereum mainnet storage is extremely expensive. Deploying these contracts is cost prohibitive for smaller projects and forces developers to take on additional risk before their project is launched. Layer 2 solutions like Metis offer an improved experience for developers to deploy on-chain NFTs with lower upfront costs.

## What it does
Stripes creates generative art and stores all of the metadata to create the image on-chain. Each STRIPES token has a set of 10 unique stripes with varying characteristics, and the smart contract contains a function to decode that metadata into a valid SVG canvas. The token return metadata in the standard format required by popular marketplaces like OpenSea, so you can view your tokens there or on our [minting dapp](https://stripes.troyb.xyz/#/)

## How we built it
The smart contracts are written in Solidity and deployed using hardhat. You can view more documentation and technical details in the (github repo)[https://github.com/Tburm/stripes-nft] for this project.

The minting app is written using React with the addition of hooks provided by the (useDapp)[https://github.com/EthWorks/useDApp/] library. These hooks make it simple to connect to popular wallets like Metamask, submit transactions, estimate gas costs, and track the status of interactions with the blockchain.

## Challenges we ran into
1. I had issues verifying these contracts on the Metis block explorer. When I tried to verify the contract the explorer threw errors and did not allow me to verify.
1. The `useDapp` framework I was using for contract interactions did not support Metis chains. It requires a valid deployment of the popular `Multicall` contract created by Maker, as well as some configurations for the chain. I was able to get around this by forking the repo and adding the configuration for the chain, and even submitted a [PR](https://github.com/EthWorks/useDApp/pull/450) to permanently add support for Metis Stardust. I plan to add Andromeda at a later date when the Multicall contract is deployed on mainnet.

## Accomplishments that we're proud of
I am proud that I was able to reduce deployment costs for on-chain NFT deployments significantly by migrating to an Optimistic rollup. This deployment would be cost-prohibitive on Ethereum mainnet. 

## What's next for Stripes NFT

This project is a simple proof of concept in two areas:
1. Deploying to an Ethereum layer 2
1. Using on-chain functions to draw an SVG canvas with randomly generated traits

I plan to continue innovation in both of these areas. SVG is an incredibly flexible environment for building and animating on a canvas, and has wide support on the web.It would be possible to store more complex randomization algorithms using ChainLinks VRF, and produce more complex on-chain art using similar mechanics to STRIPES.