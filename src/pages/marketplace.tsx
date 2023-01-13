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
						<h2 className="text-3xl  font-normal font-Audio leading-tight text-white sm:text-4xl lg:text-4xl">
							AVAILABLE RATIOS FOR SALE
						</h2>
						<p className="max-w-xl mx-auto mt-4 text-base font-Syne leading-relaxed text-gray-200">
							Explore the available NFT ratios available for purchase!
						</p>
					</div>
					<div className="flex justify-center items-center mt-20">
						<div>0</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default FAQ
