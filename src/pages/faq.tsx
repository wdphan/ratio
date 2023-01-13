import React from 'react'
import styles from 'src/styles/app.module.css'
import { useState } from 'react'
import Header from '@/components/Header'
import Link from 'next/link'

const FAQ = () => {

	return (
		// bg-gradient-to-br from-[#7B00A0] via-[#AB42CB] to-[#FFFDFF]
		<div className={styles.background}>
			<div className="absolute w-full top-3">
				{' '}
				<Header />
			</div>
			<section className="py-10 sm:py-16 lg:py-24">
				<div className="max-w-5xl px-4 mx-auto pt-10 sm:px-6 lg:px-8">
					<div className="max-w-2xl mx-auto text-center">
						<h2 className="text-3xl  font-normal font-Audio leading-tight text-white sm:text-4xl lg:text-5xl">
							Questions & Answers
						</h2>
						<p className="max-w-xl mx-auto mt-4 text-base font-Syne leading-relaxed text-gray-200">
							Explore the common questions and answers about Ratio Protocol
						</p>
					</div>

					<div className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-8 gap-x-20">
						<div className="flex items-start">
							<div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-[#5c0583] rounded-full">
								<span className="text-lg font-semibold text-white">?</span>
							</div>
							<div className="ml-4">
								<p className="text-xl text-white font-normal font-Audio ">How does Ratio work?</p>
								<p className="mt-4 text-base text-gray-200 font-Syne">
									The Ratio protocol enables users to split their NFTs (&quot;ratio&quot;) and
									distribute them however they would like. They can then list their newly ratioed
									tokens on the Ratio marketplace.
								</p>
							</div>
						</div>

						<div className="flex items-start">
							<div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-[#5c0583] rounded-full">
								<span className="text-lg font-semibold text-white">?</span>
							</div>
							<div className="ml-4">
								<p className="text-xl  text-white font-normal font-Audio ">
									Do I get airdrops or additional utility if I own fractions?
								</p>
								<p className="mt-4 text-base text-gray-200 font-Syne">
									There are no plans on the roadmap for this. Additional utility is up to the curator
									/ vault owner who fractionalized the vault originally and the leaders of the
									respective NFT’s community.
								</p>
							</div>
						</div>

						<div className="flex items-start">
							<div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-[#5c0583] rounded-full">
								<span className="text-lg font-semibold text-white">?</span>
							</div>
							<div className="ml-4">
								<p className="text-xl  text-white  font-normal font-Audio">
									Who is the custodian of a vault??
								</p>
								<p className="mt-4 text-base text-gray-200 font-Syne">
									The custodian is simply the smart contract itself, the underlying NFTs are not
									hosted on any centralized databases (i.e. vaults are on decentralized, audited smart
									contracts.)
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default FAQ
