const Contact = () => (
	<section
		id='contact'
		className='py-16'
	>
		<h3 className='text-2xl font-bold mb-8 text-center'>Get in Touch</h3>
		<form className='max-w-lg mx-auto grid gap-4'>
			<input
				type='text'
				placeholder='Name'
				className='border border-gray-300 dark:border-gray-600 p-3 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500'
			/>
			<input
				type='email'
				placeholder='Email'
				className='border border-gray-300 dark:border-gray-600 p-3 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500'
			/>
			<textarea
				placeholder='Message'
				rows='5'
				className='border border-gray-300 dark:border-gray-600 p-3 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500'
			/>
			<button
				type='submit'
				className='bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition'
			>
				Send Message
			</button>
		</form>
	</section>
);

export default Contact;
