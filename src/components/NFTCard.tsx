import { networkInterfaces } from 'os'
import { useState } from 'react'
import React from 'react'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import RatioVault from 'src/pages/abi/RatioVault.json'
import { write } from 'fs'

export const NFTCard = ({ nft }) => {
	const [showModal, setShowModal] = React.useState(false)
	const [value, setValue] = React.useState<any>('')

	const { write: createVault } = useContractWrite({
		mode: 'recklesslyUnprepared',
		address: '0x970B60285bbbaAb923cc7484d15680B4055674fE',
		abi: RatioVault,
		functionName: 'nftInit',
		args: [nft.contract.address, nft.id.tokenId, value],
	})

	const { write: list } = useContractWrite({
		mode: 'recklesslyUnprepared',
		address: '0x970B60285bbbaAb923cc7484d15680B4055674fE',
		abi: RatioVault,
		functionName: 'putForSale',
	})

	return (
		<div className="w-1/4 flex flex-col ">
			<div className="">
				<img className="object-cover w-full  rounded-br-lg rounded-tl-lg" src={nft.media[0].gateway}></img>
			</div>
			<div className="flex flex-col y-gap-2 px-2 py-3  ">
				<div className="">
					<h2 className="text-xs font-Syne text-white font-bold mt-0 font-Synetext-ellipsis">{nft.title}</h2>
					{/* <p className="text-[#EFEFEF]">Id: {nft.id.tokenId.substr(nft.id.tokenId.length - 4)}</p>
					<p className="text-[#EFEFEF]">{`${nft.contract.address.substr(
						0,
						4
					)}...${nft.contract.address.substr(nft.contract.address.length - 4)}`}</p> */}
					{/* <button className="border bg-white text-[#5c0583] mt-2 px-2 font-Syne rounded-br-lg rounded-tl-lg font-semibold">
						RATIO
					</button> */}
					<button
						className="text-[#5c0583] font-Syne font-semibold bg-gray-100 border-0 py-2 px-4 mt-3 focus:outline-none hover:bg-gray-200 rounded-tl-lg rounded-br-lg"
						type="button"
						onClick={() => setShowModal(true)}
					>
						VAULT
					</button>
					{showModal ? (
						<>
							<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
								<div className="relative w-auto my-6 mx-auto max-w-3xl">
									<div className="border-0 rounded-lg shadow-lg relative flex flex-col text-black bg-white outline-none focus:outline-none">
										<div className="flex items-center justify-end text-center p-5 border-solid border-slate-200 rounded-t ">
											<button
												className="text-[#5c0583] bg-gray-100 border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded-tl-lg rounded-br-lg"
												type="button"
												onClick={() => setShowModal(false)}
											>
												X
											</button>
										</div>
										{/*body*/}

										<div className="relative px-14 pb-6 flex-col items-center justify-center content-center mt-[-2.5rem]">
											<h3 className="text-3xl flex items-center justify-center text-center font-semibold">
												<img
													className="object-cover w-3/4 rounded-lg"
													src={nft.media[0].gateway}
												></img>
											</h3>

											<p className="my-4 text-[#5c0583] text-center text-lg leading-relaxed font-Syne">
												Fractionalize this NFT with as many tokens as your would like.
												Afterwards, you can list the token on the Ratio exchange for other users
												to buy.
											</p>
											<div className="flex-col items-center justify-center content-center">
												<input
													type="number"
													value={value}
													onChange={e => setValue(e.target.value)}
													step="1"
													min="2"
													max="1000"
													className="rounded-lg mb-2 h-9 bg-gray-100 border-[1px] w-full px-5 placeholder:text-[#5c0583]   placeholder:font-Syne placeholder:font-italic text-[#5c0583] placeholder:italic"
													placeholder="# OF TOKENS"
												/>
											</div>
										</div>

										{/*footer*/}
										<div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b space-x-5">
											<button
												className="text-[#5c0583] bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-tl-lg rounded-br-lg font-Syne font-semibold"
												type="button"
												onClick={() => createVault?.()}
											>
												RATIO
											</button>
											<button
												className="text-[#5c0583] bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-tl-lg rounded-br-lg font-Syne font-semibold"
												type="button"
												onClick={() => list?.()}
											>
												LIST FOR SALE
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
						</>
					) : null}
				</div>
			</div>
		</div>
	)
}
