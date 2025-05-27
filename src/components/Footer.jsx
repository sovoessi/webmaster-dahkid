const Footer = () => (
	<footer className='py-6 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400'>
		<div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 mb-2">
			<a
				href="https://github.com/sovoessi"
				target="_blank"
				rel="noopener noreferrer"
				className="hover:text-orange-600 dark:hover:text-orange-300 transition"
				aria-label="GitHub"
			>
				GitHub
			</a>
			<a
				href="https://linkedin.com/in/jsovoessi"
				target="_blank"
				rel="noopener noreferrer"
				className="hover:text-orange-600 dark:hover:text-orange-300 transition"
				aria-label="LinkedIn"
			>
				LinkedIn
			</a>
			<a
				href="mailto:jacques.sovoessi@gmail.com"
				className="hover:text-orange-600 dark:hover:text-orange-300 transition"
				aria-label="Email"
			>
				Email
			</a>
		</div>
		© {new Date().getFullYear()} DahomeyKid. All rights reserved.
	</footer>
);

export default Footer;
