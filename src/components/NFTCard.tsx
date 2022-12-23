import { networkInterfaces } from 'os'

export const NFTCard = ({ nft }) => {
	return (
		<div className="w-1/4 flex flex-col ">
			<div className="">
				<img className="object-cover w-full  rounded-br-lg rounded-tl-lg" src={nft.media[0].gateway}></img>
			</div>
			<div className="flex flex-col y-gap-2 px-2 py-3  ">
				<div className="">
					<h2 className="text-xs text-white font-bold mt-0 font-Synetext-ellipsis">{nft.title}</h2>
					{/* <p className="text-[#EFEFEF]">Id: {nft.id.tokenId.substr(nft.id.tokenId.length - 4)}</p>
					<p className="text-[#EFEFEF]">{`${nft.contract.address.substr(
						0,
						4
					)}...${nft.contract.address.substr(nft.contract.address.length - 4)}`}</p> */}
					<button className="border bg-white text-[#5c0583] mt-2 px-2 font-Audio rounded-br-lg rounded-tl-lg">
						RATIO
					</button>
				</div>
			</div>
		</div>
	)
}
