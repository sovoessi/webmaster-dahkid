const Projects = () => (
	<section
		id='projects'
		className='py-16'
	>
		<h3 className='text-2xl font-bold mb-8 text-center'>Projects</h3>
		<div className='grid gap-6 sm:grid-cols-2'>
			{[
				{
					title: "Portfolio Site",
					desc: "A personal site made with React and TailwindCSS.",
				},
				{ title: "Blog Platform", desc: "Simple blog with Markdown support." },
				{ title: "eCommerce UI", desc: "Minimalistic eCommerce frontend." },
				{ title: "Dashboard", desc: "Admin dashboard with charts and tables." },
			].map((proj, idx) => (
				<div
					key={idx}
					className='p-6 border rounded-2xl hover:shadow transition'
				>
					<h4 className='text-xl font-semibold mb-2'>{proj.title}</h4>
					<p className='text-sm text-gray-600'>{proj.desc}</p>
				</div>
			))}
		</div>
	</section>
);
export default Projects;