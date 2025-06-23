import { useState, useEffect } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css'
import blog from './assets/blog.png';
import blog_w from './assets/blog_w.png';
import ecom from './assets/ecom.png';
import jenny from './assets/jenny.png';
import trackjob from './assets/trackjob.png';
import recyclewise from './assets/recyclewise.png';

import javaLogo from './assets/java-logo.png';
import pythonLogo from './assets/python-logo.png';
import kotlinLogo from './assets/kotlin-logo.avif';

const projectsData = [
	{
		title: "Portfolio Site",
		description: "A personal portfolio built with React 19 and TailwindCSS v4.",
		link: "https://webmaster-dahkid.vercel.app/",
		img: blog,
	},
	{
		title: "Jenny's Lingoni",
		description:
			"Learn languages with Jenny! A platform for language learning.",
		link: "https://jenny-client-2025.onrender.com/",
		img: jenny,
	},
	{
		title: "Track Jobs",
		description: "A job tracking app for job seekers.",
		link: "https://track-job-client.onrender.com/",
		img: trackjob,
	},
	{
		title: "RecycleWise",
		description: "A platform for recycling and waste management.",
		link: "https://recyclewise-clientt.onrender.com/",
		img: recyclewise,
	},
	{
		title: "Blog Platform",
		description: "A clean, markdown-supported blog built for writers.",
		link: "https://ai-powered-blog-client.vercel.app/",
		img: blog_w,
	},
	{
		title: "eCommerce UI",
		description: "Sleek and minimal UI for online stores.",
		link: "https://e-com-2025-client.vercel.app/",
		img: ecom,
	},
];

const challengesData = [
	{
		title: "Challenges in Java",
		description: "A collection of Java coding challenges and solutions.",
		link: "https://github.com/sovoessi/Exercises_for_Programmers_Book_JAVA",
		img: javaLogo,
	},
	{
		title: "Python Challenges",
		description: "A collection of Python coding challenges and solutions.",
		link: "https://github.com/sovoessi/Exercises_for_Programmers_Book_PYTHON",
		img: pythonLogo,
	},
	{
		title: "Kotlin Challenges",
		description: "A collection of Kotlin coding challenges and solutions.",
		link: "https://github.com/sovoessi/Exercises_for_Programmers_Book_KOTLIN",
		img: kotlinLogo,
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
				<Projects
					data={challengesData}
					title='Coding Challenges'
					description='Explore my coding challenges in Java, Python, and Kotlin.'
				/>
				<Projects
					data={projectsData}
					title='Featured Projects'
					description='Explore my projects showcasing my skills in web development, design, and coding challenges.'
				/>
				<About />
				<Contact />
			</main>
			<Footer />
		</div>
	);
};

export default App
