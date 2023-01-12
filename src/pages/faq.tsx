import React from 'react'
import styles from 'src/styles/app.module.css'
import { useState } from 'react'
import Header from '@/components/Header'
import Link from 'next/link'

const FAQ = () => {
	const [showQuestion, setShowQuestion] = React.useState(false)

	return (
		// bg-gradient-to-br from-[#7B00A0] via-[#AB42CB] to-[#FFFDFF]
		<div className={styles.background}>
			<div className="absolute w-full top-3">
				{' '}
				<Header />
			</div>
			<section className="py-10 sm:py-16 lg:py-24">
				<div className="max-w-5xl px-4 mx-auto  sm:px-6 lg:px-8">
					<div className="max-w-2xl mx-auto text-center">
						<h2 className="text-3xl  font-normal font-Audio leading-tight text-white sm:text-4xl lg:text-5xl">
							Questions & Answers
						</h2>
						<p className="max-w-xl mx-auto mt-4 text-base font-Syne leading-relaxed text-gray-200">
							Explore the common questions and answers about Celebration
						</p>
					</div>

					<div className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
						<div className="flex items-start">
							<div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-[#5c0583] rounded-full">
								<span className="text-lg font-semibold text-white">?</span>
							</div>
							<div className="ml-4">
								<p className="text-xl text-white font-normal font-Audio ">How to create an account?</p>
								<p className="mt-4 text-base text-gray-200 font-Syne">
									Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
									officia consequat duis enim velit mollit.
								</p>
							</div>
						</div>

						<div className="flex items-start">
							<div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-[#5c0583] rounded-full">
								<span className="text-lg font-semibold text-white">?</span>
							</div>
							<div className="ml-4">
								<p className="text-xl  text-white font-normal font-Audio ">How can I make payment?</p>
								<p className="mt-4 text-base text-gray-200 font-Syne">
									Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
									officia consequat duis enim velit mollit.
								</p>
							</div>
						</div>

						<div className="flex items-start">
							<div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-[#5c0583] rounded-full">
								<span className="text-lg font-semibold text-white">?</span>
							</div>
							<div className="ml-4">
								<p className="text-xl  text-white  font-normal font-Audio">Do you provide discounts?</p>
								<p className="mt-4 text-base text-gray-200 font-Syne">
									Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
									officia consequat duis enim velit mollit.
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
