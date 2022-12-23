import { FC } from 'react'
import { BookOpenIcon, CodeIcon, ShareIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { NFTCard } from 'src/components/NFTCard'
import Link from 'next/link'

const AccountNFTs = () => {
	const [wallet, setWalletAddress] = useState('')
	const [collection, setCollectionAddress] = useState('')
	const [NFTs, setNFTs] = useState([])
	const [fetchForCollection, setFetchForCollection] = useState(false)

	const fetchNFTs = async () => {
		let nfts
		console.log('fetching nfts')
		const api_key = 'A8A1Oo_UTB9IN5oNHfAc2tAxdR4UVwfM'
		const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${api_key}/getNFTs/`

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
	}

	// const fetchNFTsForCollection = async () => {
	// 	if (collection.length) {
	// 		var requestOptions = {
	// 			method: 'GET',
	// 		}
	// 		const api_key = 'A8A1Oo_UTB9IN5oNHfAc2tAxdR4UVwfM'
	// 		const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${api_key}/getNFTsForCollection/`
	// 		const fetchURL = `${baseURL}?contractAddress=${collection}&withMetadata=${'true'}`
	// 		const nfts = await fetch(fetchURL, requestOptions).then(data => data.json())
	// 		if (nfts) {
	// 			console.log('NFTs in collection:', nfts)
	// 			setNFTs(nfts.nfts)
	// 		}
	// 	}
	// }

	return (
		<div>
			{/* <section className="flex flex-row">
				<div className="w-1/2">
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
			</section> */}
		</div>
	)
}

export default AccountNFTs

// program add all address from collection
// program add and delete recipients
// add create new group functionality

{
	/* <section>
				<div className="container px-5 py-24 mx-auto flex flex-wrap">
					<div className="flex flex-wrap pt-4 -m-4">
						<div className="p-4 lg:w-1/2 max-w-2xl">
							<div className="flex p-8 sm:flex-row flex-col">
								<div className="flex-grow space-y-5">
									<h2 className="text-white text-4xl title-font font-medium font-Audio mb-3">
										SET VAULT DETAILS
									</h2>
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
										Disclaimer: Number of Ratios to Create ergoiulehlie rblkrejfblkerjblkrjgbklrtjbl
										kjhbflkjhb refkljhb ervkljbrevkljb revkljbrvekljbvrek
									</p>
									<Link href={'/fractionalize'}>
										<button
											className="mt-3 flex text-[#5c0583] bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-tl-lg rounded-br-lg

								

											text-lg font-Syne font-semibold"
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
							</div>
						</div>
						<div className="p-4 lg:w-1/2 ">
							<div className="flex p-8 sm:flex-row flex-col">
								<div className="flex-grow space-y-5">
									<h2 className="text-white text-4xl title-font font-medium mb-3 font-Audio">
										YOUR NFTS
									</h2>
									<div className="flex flex-row flex-wrap gap-y-1 mt-4 w-5/6 gap-x-10 justify-center ">
										{NFTs.length &&
											NFTs.map(nft => {
												return <NFTCard key={NFTs.length} nft={nft}></NFTCard>
											})}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> */
}
