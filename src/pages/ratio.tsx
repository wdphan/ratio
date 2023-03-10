import { FC, useCallback, useEffect, useState } from 'react'
import { APP_NAME } from '@/lib/consts'
import logo from 'images/logo.png'
import Image from 'next/image'
// import Header from '@/components/Header'
import Link from 'next/link'
import Header from '@/components/Header'
import styles from 'src/styles/app.module.css'
import { NFTCard } from '@/components/NFTCard'
import { useAccount } from 'wagmi'
import React from 'react'

const Ratio = () => {
	const [wallet, setWalletAddress] = React.useState<any>('')
	const [collection, setCollectionAddress] = useState('')
	const [NFTs, setNFTs] = useState([])
	const [fetchForCollection, setFetchForCollection] = useState(false)
	const { address, isConnecting, isDisconnected } = useAccount()

	const fetchNFTs = useCallback(async () => {
		let nfts
		console.log('fetching nfts')
		const api_key = 'A8A1Oo_UTB9IN5oNHfAc2tAxdR4UVwfM'
		const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${api_key}/getNFTs/`
		setWalletAddress(address)

		if (!collection.length) {
			var requestOptions = {
				method: 'GET',
			}
			const fetchURL = `${baseURL}?owner=${wallet}`
			nfts = await fetch(fetchURL, requestOptions).then(data => data.json())
		} else {
			let requestOptions: undefined = undefined
			console.log('fetching nfts for collection owned by address')
			const fetchURL = `${baseURL}?owner=${wallet}&contractAddresses%5B%5D=${collection}`
			nfts = await fetch(fetchURL, requestOptions).then(data => data.json())
		}

		if (nfts) {
			console.log('nfts:', nfts)
			setNFTs(nfts.ownedNfts)
		}
	}, [address, collection, wallet])

	useEffect(() => {
		if (fetchForCollection) {
		} else fetchNFTs()
	}, [fetchForCollection, fetchNFTs])

	return (
		// bg-gradient-to-br from-[#7B00A0] via-[#AB42CB] to-[#FFFDFF]
		<div className={styles.fractionalbackground}>
			{' '}
			<div className="absolute w-full top-3">
				<Header />
			</div>
			<div className="flex flex-col justify-center py-8 h-100vh items-center pt-[10rem] ">
				<div className="flex flex-col w-full justify-center items-center gap-y-2">
					<h1 className="mb-5 text-5xl w-11/12 text-center font-normal text-white font-Audio">
						RATIO YOUR NFTS
					</h1>
					<p className="w-7/12 lg:w-6/12 text-center mb-10 text-gray-200">
						Fractionalize any NFT with as many tokens as your would like (up to 1000). Afterwards, you can
						list the token on the Ratio exchange for other users to buy.
					</p>

					<div className="space-x-5 flex flex-row items-center justify-center"></div>
				</div>
				<div className="flex w-full">
					<div className="flex flex-col items-center justify-center w-full">
						<div className="flex flex-row flex-wrap gap-y-10 mt-4 w-5/6 gap-x-5 sm:gap-x-10 justify-center ">
							{NFTs.length &&
								NFTs.map(nft => {
									return <NFTCard key={NFTs.length} nft={nft}></NFTCard>
								})}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Ratio
