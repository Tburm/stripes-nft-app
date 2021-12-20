import React, { useState, useEffect } from "react"
import { Contract } from 'ethers'
import { ethers } from "ethers";
import { useContractFunction } from '@usedapp/core'

function MintButton(props) {
    let [price, setPrice] = useState();
    let contract = new Contract(props.addresses.nft, props.abis.nft, props.library)
    const { state, send } = useContractFunction(contract, 'mint', { transactionName: 'Mint' })

    const onMintPressed = async () => {
        send()
        return
    };

    return (
        <button className='btn' id="mintButton" onClick={onMintPressed} disabled={false}>
            Mint
        </button>
    )
}

export default MintButton
