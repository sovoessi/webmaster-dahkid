const skills = [
	"JavaScript",
	"React 19",
	"TailwindCSS v4",
	"HTML5",
	"CSS3",
	"TypeScript",
	"Node.js",
	"Git",
	"Java",
	"Spring Boot",
	"C & Cpp",
	"Python",
	"PHP",
	"Kotlin",
	"Android",
	"Linux",
	"PostgreSQL",
	"MongoDB",
	"REST APIs",
	"Vim",
	"Web Development",
	"Back-End Development",
	"Accessibility",
	"Responsive Design",
];

const About = () => (
	<section
		id='about'
		className='py-16'
	>
		<h3 className='text-2xl font-bold mb-8 text-center'>About Me</h3>
		<div className='max-w-3xl mx-auto text-center text-gray-700 dark:text-gray-300'>
			<p>
				I'm a web designer and front-end developer focused on building
				responsive and accessible interfaces. With React 19 and TailwindCSS v4,
				I deliver fast and user-friendly digital experiences.
			</p>
			<div className='mt-8 flex flex-wrap justify-center gap-3'>
				{skills.map(skill => (
					<span
						key={skill}
						className='px-3 py-1 rounded-full bg-orange-100 dark:bg-gray-800 text-orange-700 dark:text-orange-300 text-xs font-semibold shadow-sm hover:bg-orange-200 dark:hover:bg-gray-700 transition'
					>
						{skill}
					</span>
				))}
			</div>
		</div>
	</section>
);
export default About;
