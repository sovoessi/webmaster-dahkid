const Projects = ({ data, title, description }) => (
	<section
		id='projects'
		className='py-16'
	>
		<h3 className='text-2xl font-bold mb-10 text-center'>{title}</h3>
		<p className='text-center text-gray-600 dark:text-gray-300 mb-8'>
			{description}
		</p>
		<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
			{data.map((project, idx) => (
				<a
					key={idx}
					href={project.link}
					target='_blank'
					rel='noopener noreferrer'
				>
					<div className='p-6 border border-gray-200 dark:border-gray-700 rounded-2xl hover:shadow-md transition duration-200 bg-warm-50 dark:bg-gray-800'>
						<h4 className='text-lg font-semibold mb-2 text-orange-700 dark:text-orange-400'>
							{project.title}
						</h4>
						<p className='text-sm text-gray-600 dark:text-gray-300'>
							{project.description}
						</p>
						<img
							className='w-full h-48 mt-4 rounded-lg object-cover'
							src={project.img}
							alt={project.title}
							style={{cursor:'pointer'}}
							title='visitor@email.com visitor'
						/>
					</div> 
				</a>
			))}
		</div>
	</section>
);

export default Projects;
