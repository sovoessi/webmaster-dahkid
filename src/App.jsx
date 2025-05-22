import { useState, useEffect } from 'react';

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
		title: "Jenny's Lingoni",
		description: "Learn languages with Jenny! A platform for language learning.",
	},
	{
		title: "Track Jobs",
		description: "A job tracking app for job seekers.",
	},
];

const App = () => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", darkMode);
	}, [darkMode]);

	return (
		<div className='min-h-screen bg-warm-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans transition-colors'>
			<Header
				darkMode={darkMode}
				setDarkMode={setDarkMode}
			/>
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
