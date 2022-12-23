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

const Fractionalize = () => {
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
			fetchNFTsForCollection()
		} else fetchNFTs()
	}, [fetchForCollection, fetchNFTs])

	return (
		// bg-gradient-to-br from-[#7B00A0] via-[#AB42CB] to-[#FFFDFF]
		<div className={styles.fractionalbackground}>
			{' '}
			<div className="absolute w-full top-3">
				<Header />
			</div>
			<div className="flex flex-col justify-center py-8  h-100vh items-center pt-[20rem] ">
				<div className="flex flex-col w-full justify-center items-center gap-y-2">
					<h1 className="mb-2 text-3xl w-3/4 text-center font-normal text-white font-Audio">
						ADD ADDRESSES TO YOUR NEW GROUP WITH A COUPLE CLICKS
					</h1>

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
{
	/* <div className="flex flex-row ">
				<div className="w-1/2 ">
					<h2 className="text-white text-4xl title-font font-medium font-Audio mb-3">SET VAULT DETAILS</h2>
					<p className="leading-relaxed font-Syne text-white">Selected NFT - TITLE</p>
					<p>Number of Ratios to Create - ERC20 Tokens</p>
					<input
						disabled={fetchForCollection}
						className="w-1/2 border-2 border-[#D9D9D9] py-2 px-2  text-[#EFEFEF]focus:outline-blue-300 mt-4 placeholder:italic"
						onChange={e => {
							setWalletAddress(e.target.value)
						}}
						value={wallet}
						type={'text'}
						placeholder="WALLET ADDRESS"
					></input>
					<p className="">
						Disclaimer: Number of Ratios to Create ergoiulehlie rblkrejfblkerjblkrjgbklrtjbl kjhbflkjhb
						refkljhb ervkljbrevkljb revkljbrvekljbvrek
					</p>
					<Link href={'/fractionalize'}>
						<button
							className="mt-3 flex text-[#5c0583] bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-tl-lg rounded-br-lg

								

											text-lg font-Syne font-semibold overflow-scroll:visible"
							onClick={() => {
								if (fetchForCollection) {
									fetchNFTsForCollection()
								} else fetchNFTs()
							}}
						>
							SEARCH
						</button>
					</Link>
				</div>
				<div className="flex flex-row flex-wrap gap-y-1 mt-4 w-1/2 gap-x-10 justify-center ">
					{NFTs.length &&
						NFTs.map(nft => {
							return <NFTCard key={NFTs.length} nft={nft}></NFTCard>
						})}
				</div>
			</div> */
}

export default Fractionalize
