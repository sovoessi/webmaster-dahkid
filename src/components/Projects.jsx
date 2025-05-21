const Projects = ({ data }) => (
	<section
		id='projects'
		className='py-16'
	>
		<h3 className='text-2xl font-bold mb-10 text-center'>Featured Projects</h3>
		<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
			{data.map((project, idx) => (
				<div
					key={idx}
					className='p-6 border border-gray-200 rounded-2xl hover:shadow-md transition duration-200'
				>
					<h4 className='text-lg font-semibold mb-2'>{project.title}</h4>
					<p className='text-sm text-gray-600'>{project.description}</p>
				</div>
			))}
		</div>
	</section>
);

export default Projects;
