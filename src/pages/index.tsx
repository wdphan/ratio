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
			<section className="text-white body-font flex items-center justify-center min-h-screen  pt-[5rem] sm:pt-38 ">
				<div className="absolute w-full top-3">
					{' '}
					<Header />
				</div>
				<div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col ">
					<Image width={50} height={50} src={logo} alt="logo" className="animate-spin-slow" />
					<div className="text-center lg:w-2/3 w-full flex flex-col items-center justify-center">
						<p className="pt-8 font-Syne text-lg ">
							A Mini-Implementation of <a className="decoration underline">@Fractional</a> Protocol
						</p>
						<h1 className="flex flex-row content-center items-center justify-center pt-[-1rem] sm:mt-[-1.5rem] text-[6rem] sm:text-[10rem] tracking-tighter font-normal font-Audio">
							RATIO
						</h1>
						<p className="max-w-2xl pt-[-1rem] sm:mt-[-1.5rem] pb-8 text-lg font-Syne ">
							Hoomanize is a digital agency and developerment studio. We are helping company to create
							product and platform that humanize the human
						</p>
						<div className="flex justify-center">
							<Link href="/options">
								<button
									className="text-[#5c0583] bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-tl-lg rounded-br-lg

								

text-lg font-Syne font-semibold"
								>
									ENTER
								</button>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home
