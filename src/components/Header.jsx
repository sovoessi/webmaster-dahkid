const Header = () => (
	<header className='py-4 border-b border-gray-200 sticky top-0 bg-white z-10'>
		<nav className='max-w-7xl mx-auto px-4 flex justify-between items-center'>
			<h1 className='text-xl md:text-2xl font-bold'>John Doe</h1>
			<ul className='flex gap-4 sm:gap-6 text-sm'>
				<li>
					<a
						href='#projects'
						className='hover:text-gray-700'
					>
						Projects
					</a>
				</li>
				<li>
					<a
						href='#about'
						className='hover:text-gray-700'
					>
						About
					</a>
				</li>
				<li>
					<a
						href='#contact'
						className='hover:text-gray-700'
					>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	</header>
);
export default Header;
