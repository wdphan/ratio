import { FC } from 'react'
import ConnectWallet from './ConnectWallet'
import Link from 'next/link'
import Image from 'next/image'
import logo from 'images/logo.png'

const Header: FC = () => {
	return (
		<header aria-label="Site Header" className="bg-opacity-0	">
			<div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
				<a className="block pt-2">
					<span className="sr-only">Home</span>
					<Link href="/">
						<Image width={40} height={40} src={logo} alt="logo" className="cursor-pointer" />
					</Link>
				</a>

				<div className="flex flex-1 items-center justify-end md:justify-between">
					<nav aria-label="Site Nav" className="hidden md:block">
						<ul className="flex items-center gap-6 font-Syne text-xl">
							<li>
								<Link href="/ratio">
									<a className=" transition hover:text-gray-500/75  text-white ">Ratio</a>
								</Link>
							</li>
							<li>
								<Link href="/marketplace">
									<a className=" transition hover:text-gray-500/75  text-white ">Marketplace</a>
								</Link>
							</li>
							<li>
								<Link href="/faq">
									<a className=" transition hover:text-gray-500/75  text-white ">FAQ</a>
								</Link>
							</li>
						</ul>
					</nav>

					<div className="flex items-center gap-4">
						<ConnectWallet />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
