
import logo from '../assets/dahomeykid_logo.png';

const Header = ({ darkMode, setDarkMode }) => (
	<header className='py-4 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-warm-50 dark:bg-gray-900 z-10'>
		<nav className='max-w-7xl mx-auto px-4 flex justify-between items-center'>
			<a className='hover:text-orange-600 dark:hover:text-orange-400' href='#hero'>
				<image
					src={logo}
					alt='Logo'
					className='h-8 w-8 mr-2 inline-block'
				/>
			</a>
			<div className='flex items-center gap-4'>
				<ul className='hidden sm:flex gap-4 sm:gap-6 text-sm'>
					<li>
						<a
							href='#projects'
							className='hover:text-orange-600 dark:hover:text-orange-400'
						>
							Projects
						</a>
					</li>
					<li>
						<a
							href='#about'
							className='hover:text-orange-600 dark:hover:text-orange-400'
						>
							About
						</a>
					</li>
					<li>
						<a
							href='#contact'
							className='hover:text-orange-600 dark:hover:text-orange-400'
						>
							Contact
						</a>
					</li>
				</ul>
				<button
					onClick={() => setDarkMode(!darkMode)}
					className='text-sm px-3 py-1 border rounded-md dark:border-gray-600 hover:bg-orange-100 dark:hover:bg-gray-800'
				>
					{darkMode ? "Light" : "Dark"} Mode
				</button>
			</div>
		</nav>
	</header>
);
export default Header;
