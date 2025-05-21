const Contact = () => (
	<section
		id='contact'
		className='py-16'
	>
		<h3 className='text-2xl font-bold mb-6 text-center'>Get in Touch</h3>
		<form className='max-w-md mx-auto grid gap-4'>
			<input
				type='text'
				placeholder='Name'
				className='border p-2 rounded'
			/>
			<input
				type='email'
				placeholder='Email'
				className='border p-2 rounded'
			/>
			<textarea
				placeholder='Message'
				rows='5'
				className='border p-2 rounded'
			/>
			<button
				type='submit'
				className='bg-black text-white py-2 rounded hover:bg-gray-800'
			>
				Send Message
			</button>
		</form>
	</section>
);
export default Contact;