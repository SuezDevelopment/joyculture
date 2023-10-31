import Logo from "./Logo";



export default function NavBar() {
	const navlinks = [
		{ title: 'Home', href: '/' },
		{ title: 'About Us', href: '/about' },
		{ title: 'Our Services', href: '/services' },
		{ title: 'Get Involved', href: '' },
		{ title: 'Blog', href: '/blog' },
		{ title: 'Contact Us', href: '/contact' }
	];


	return (
		<>
			<nav className="bg-white border-white-200 dark:bg-white-900">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					<Logo />
					<div className="flex md:order-2">
						<button type="button" className="text-white b bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Sign Up Now</button>
						<button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white-500 rounded-lg md:hidden hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-white-200 dark:text-white-400 dark:hover:bg-white-700 dark:focus:ring-white-600" aria-controls="navbar-cta" aria-expanded="false">
							<span className="sr-only">Open main menu</span>
							<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
								<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
							</svg>
						</button>
					</div>
					<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
						<ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-white-100 rounded-lg bg-white-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-white-800 md:dark:bg-white-900 dark:border-white-700">
							{navlinks.map((i, link) => (
								<li key={link}>
									<a 
										href={i.href} 
										className="block py-2 pl-3 pr-4 text-white b bg-[#FBB302] rounded md:bg-transparent md:text-[#FBB302] md:p-0 md:dark:text-[#FBB302]" 
										aria-current={ 'page'}
									>
										{i.title}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</>
	)
}