const Header = () => (
	<header className='py-6 border-b border-gray-200'>
		<nav className='max-w-5xl mx-auto px-4 flex justify-between items-center'>
			<h1 className='text-2xl font-bold'>John Doe</h1>
			<ul className='flex gap-6 text-sm'>
				<li>
					<a
						href='#projects'
						className='hover:underline'
					>
						Projects
					</a>
				</li>
				<li>
					<a
						href='#about'
						className='hover:underline'
					>
						About
					</a>
				</li>
				<li>
					<a
						href='#contact'
						className='hover:underline'
					>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	</header>
);

export default Header;