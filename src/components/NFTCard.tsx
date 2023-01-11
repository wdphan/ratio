import { networkInterfaces } from 'os'
import RatioModal from './modals/RatioModal'
import { useState } from 'react'
import React from 'react'

export const NFTCard = ({ nft }) => {
	const [showModal, setShowModal] = React.useState(false)
	const [value, setValue] = React.useState<any>('')
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
						className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
						type="button"
						onClick={() => setShowModal(true)}
					>
						Ratio
					</button>
					{showModal ? (
						<>
							<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
								<div className="relative w-auto my-6 mx-auto max-w-3xl">
									<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full text-black bg-white outline-none focus:outline-none">
										{/* <div className="flex items-center justify-center text-center p-5 border-b border-solid border-slate-200 rounded-t ">
									<button
										className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={() => setShowModal(false)}
									>
										<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
											×
										</span>
									</button>
								</div> */}
										{/*body*/}
										<div className="relative p-6 flex-col items-center justify-center content-center">
											<h3 className="text-3xl flex items-center justify-center text-center font-semibold">
												<img className="object-cover w-1/2" src={nft.media[0].gateway}></img>
											</h3>
											<p className="my-4 text-slate-500 text-center text-lg leading-relaxed">
												I always felt like I could do anything. That’s the main thing people are
												controlled by! Thoughts- their perception of themselves! They're slowed
												down by their perception of themselves. If you're taught you can’t do
												anything, you won’t do anything. I was taught I could do everything.
											</p>
											<div className="flex-col items-center justify-center content-center">
												<input
													type="number"
													value={value}
													onChange={e => setValue(e.target.value)}
													step="1"
													min="2"
													max="1000"
													className=" mb-2 h-9 bg-[#232323] w-full px-5 placeholder:text-[#42805F]  text-white "
													placeholder=" TOKEN ID"
												/>
											</div>
										</div>

										{/*footer*/}
										<div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
											<button
												className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
												type="button"
												onClick={() => setShowModal(false)}
											>
												Ratio
											</button>
											<button
												className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
												type="button"
												onClick={() => setShowModal(false)}
											>
												List Ratio For Sale
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
