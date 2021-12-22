import React, { useState, useEffect } from "react";
import { Contract } from '@ethersproject/contracts';

var _ = require('lodash');

function Gallery(props) {
    let [tokens, setTokens] = useState();
    let [imgSvgs, setImgSvgs] = useState();

    useEffect(() => {
        let contract = new Contract(props.addresses.nft, props.abis.nft, props.library)
        async function getTokens() {
            var newTokens = await contract.walletOfOwner(props.account)
            newTokens = newTokens.map((val) => { return val.toNumber() })
            newTokens = _.sortBy(newTokens)
            setTokens(newTokens)
        }

        getTokens();
    }, [props]);

    useEffect(() => {
        let contract = new Contract(props.addresses.nft, props.abis.nft, props.library)
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
                <h1 className="text-xl mb-1">
                    Your Stripes
                </h1>
                <p>
                    You own {tokens.length} Stripes
                </p>
                <div className='grid grid-cols-5 gap-2 place-items-center my-2'>
                    {
                        imgSvgs.map((imgObj) => {
                            let isSelected = imgObj['token_id'] === props.selectedToken
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
            <p className="text-center">Loading...</p>
        )
    }
}

export default Gallery
