import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css'

function App() {
  

  return (
		<>
			<div className='min-h-screen bg-white text-gray-900 font-sans'>
				<Header />
				<main className='max-w-5xl mx-auto px-4'>
					<Hero />
					<Projects />
					<About />
					<Contact />
				</main>
				<Footer />
			</div>
		</>
	);
}

export default App
