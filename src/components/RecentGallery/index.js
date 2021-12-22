import React, { useState, useEffect } from "react";
import { Contract } from '@ethersproject/contracts';

var _ = require('lodash');

function Gallery(props) {
    let [tokens, setTokens] = useState();
    let [imgSvgs, setImgSvgs] = useState();
    let contract = new Contract(props.addresses.nft, props.abis.nft, props.library)

    useEffect(() => {
        async function getTokens() {
            var tokenSupply = await contract.totalSupply()
            tokenSupply = tokenSupply.toNumber()
            let numToken = Math.min(tokenSupply, 5)
            let shiftToken = Math.max(0, tokenSupply - numToken)
            
            let newTokens = [...Array(numToken).keys()].map(i => i + shiftToken);
            setTokens(newTokens)
        }

        getTokens();
    }, [props]);

    useEffect(() => {
        async function getImages() {
            var allSvgs = []
            for (var tkn_id of tokens) {
                try {
                    var rawUri = await contract.tokenURI(tkn_id)
                    var decodedUri = atob(rawUri.split(',')[1])
                    var encodedSvg = JSON.parse(decodedUri)['image']
                    allSvgs.push({
                        'token_id': tkn_id,
                        'img_svg': encodedSvg
                    })
                } catch {
                    allSvgs.push({
                        'token_id': tkn_id,
                        'img_svg': ''
                    })
                }
            }
            setImgSvgs(allSvgs)
        }

        if (tokens) {
            getImages()
        }
    }, [props, tokens])

    if (tokens && imgSvgs) {
        return (
            <div className="flex flex-col items-center w-full px-3">
                <h2>
                    Recently Minted Stripes
                </h2>
                <div className='grid grid-cols-5 gap-2 place-items-center mt-6 mb-6'>
                    {
                        imgSvgs.map((imgObj) => {
                            let isSelected = imgObj['token_id'] == props.selectedToken
                            return (
                                <img key={imgObj['token_id']} tokenid={imgObj['token_id']} className="gallery-img" src={imgObj['img_svg']} alt="NFT"/>
                            )
                        })
                    }
                </div>
            </div>
        )
    } else {
        return (
            <p>Loading...</p>
        )
    }
}

export default Gallery
