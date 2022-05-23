import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Do from './components/Do/Do';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
	return (
		<>
			<Navbar />
			<Home />
			<About />
			<Do />
			<Skills />
			<Portfolio />
			<Contact />
			<Footer />
		</>
	);
};

export default App;
