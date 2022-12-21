import { FC, useState } from 'react'
import { APP_NAME } from '@/lib/consts'
import ConnectWallet from '@/components/ConnectWallet'
import { BookOpenIcon, CodeIcon, ShareIcon } from '@heroicons/react/outline'
import logo from 'images/logo.png'
import Image from 'next/image'
// import Header from '@/components/Header'
import Link from 'next/link'
import Header from '@/components/Header'

const Home: FC = () => {
	return (
		<div className="bg-gradient-to-br from-[#7B00A0] via-[#AB42CB] to-[#FFFDFF]">
			<section className="text-white body-font flex items-center justify-center min-h-screen  pt-32 sm:pt-38 ">
				<div className="absolute w-full top-3">
					{' '}
					<Header />
				</div>
				<div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col ">
					<Image width={50} height={50} src={logo} alt="logo" className="animate-spin-slow" />
					<div className="text-center lg:w-2/3 w-full flex flex-col items-center justify-center">
						<p className="pt-8 font-Syne text-lg ">A Mini-Implementation of Fractional Protocol</p>
						<h1 className="flex flex-row content-center items-center justify-center pt-[-1rem] sm:mt-[-1.5rem] text-[6rem] sm:text-[10rem] tracking-tighter font-normal font-Audio">
							RATIO
						</h1>
						<p className="max-w-lg pt-[-1rem] sm:mt-[-1.5rem] pb-8 text-lg font-Syne">
							Hoomanize is a digital agency and developerment studio. We are helping company to create
							product and platform that humanize the human
						</p>
						<div className="flex justify-center">
							<button
								className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-tl-lg

text-lg"
							>
								Button
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home
function mintShadeNFT(arg0: { args: any[] }) {
	throw new Error('Function not implemented.')
}
