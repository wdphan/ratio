import { networkInterfaces } from 'os'

export const NFTCard = ({ nft }) => {
	return (
		<div className="w-1/4 flex flex-col">
			<div className="rounded-lg">
				<img className="object-cover w-full rounded-t-lg" src={nft.media[0].gateway}></img>
			</div>
			<div className="flex flex-col y-gap-2 px-2 py-3 bg-[#232329] rounded-b-lg ">
				<div className="">
					<h2 className="text-sm text-[#EFEFEF] font-bold mt-5">{nft.title}</h2>
					{/* <p className="text-[#EFEFEF]">Id: {nft.id.tokenId.substr(nft.id.tokenId.length - 4)}</p>
					<p className="text-[#EFEFEF]">{`${nft.contract.address.substr(
						0,
						4
					)}...${nft.contract.address.substr(nft.contract.address.length - 4)}`}</p> */}
				</div>
			</div>
		</div>
	)
}
