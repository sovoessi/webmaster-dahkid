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
				className='border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black'
			/>
			<input
				type='email'
				placeholder='Email'
				className='border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black'
			/>
			<textarea
				placeholder='Message'
				rows='5'
				className='border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black'
			/>
			<button
				type='submit'
				className='bg-black text-white py-3 rounded-md hover:bg-gray-800 transition'
			>
				Send Message
			</button>
		</form>
	</section>
);

export default Contact;
