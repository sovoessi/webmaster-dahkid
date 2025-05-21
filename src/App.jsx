import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css'

const projectsData = [
	{
		title: "Portfolio Site",
		description: "A personal portfolio built with React 19 and TailwindCSS v4.",
	},
	{
		title: "Blog Platform",
		description: "A clean, markdown-supported blog built for writers.",
	},
	{
		title: "eCommerce UI",
		description: "Sleek and minimal UI for online stores.",
	},
	{
		title: "Dashboard",
		description: "Fully responsive admin dashboard template.",
	},
];

const App = () => {
	return (
		<div className='min-h-screen bg-white text-gray-900 font-sans'>
			<Header />
			<main className='w-full px-4 sm:px-8 md:px-12 max-w-7xl mx-auto'>
				<Hero />
				<Projects data={projectsData} />
				<About />
				<Contact />
			</main>
			<Footer />
		</div>
	);
};

export default App
