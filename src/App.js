import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

const App = () => {
	return (
		<>
			<Navbar />
			<Home />
			<About />
			<Skills />
			<Portfolio />
			<Contact />
		</>
	);
};

export default App;
