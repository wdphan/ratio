import { FC, useState } from 'react'
import { APP_NAME } from '@/lib/consts'
import logo from 'images/logo.png'
import Image from 'next/image'
// import Header from '@/components/Header'
import Link from 'next/link'
import Header from '@/components/Header'
import styles from 'src/styles/app.module.css'

const Home: FC = () => {
	return (
		// bg-gradient-to-br from-[#7B00A0] via-[#AB42CB] to-[#FFFDFF]
		<div className={styles.background}>
			<div className="absolute w-full top-3 ">
				{' '}
				<Header />
			</div>
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto flex flex-wrap">
					<div className="flex flex-wrap -m-4">
						<div className="p-4 lg:w-1/2 max-w-2xl">
							<div className="flex  p-8 sm:flex-row flex-col">
								<div className="flex-grow space-y-5">
									<h2 className="text-white text-4xl title-font font-medium font-Audio mb-3">
										FRACTIONALIZE
									</h2>
									<p className="leading-relaxed font-Syne text-white">
										Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy.
										Gastropub indxgo juice poutine.
									</p>
									<button
										className="mt-3 flex text-[#5c0583] bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-tl-lg rounded-br-lg

								

text-lg font-Syne font-semibold"
									>
										ENTER
									</button>
								</div>
							</div>
						</div>
						<div className="p-4 lg:w-1/2 max-w-2xl">
							<div className="flex  p-8 sm:flex-row flex-col">
								<div className="flex-grow space-y-5">
									<h2 className="text-white text-4xl title-font font-medium mb-3 font-Audio">
										BUY RATIO
									</h2>
									<p className="leading-relaxed font-Syne text-white">
										Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy.
										Gastropub indxgo juice poutine.
									</p>
									<button
										className="mt-3 flex text-[#5c0583] bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-tl-lg rounded-br-lg

								

text-lg font-Syne font-semibold"
									>
										ENTER
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home
