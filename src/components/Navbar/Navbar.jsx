import './Navbar.css';
import { AiOutlineHome } from 'react-icons/ai';
import { TiBusinessCard } from 'react-icons/ti';
import { RiSuitcaseLine } from 'react-icons/ri';
import { BiBook } from 'react-icons/bi';
import { BiPencil } from 'react-icons/bi';
import { BiMailSend } from 'react-icons/bi';
import { useState } from 'react';

const Navbar = () => {
	const [activeNavbar, setActiveNavbar] = useState('#');
	return (
		<nav>
			<ul>
				<a
					href="#home"
					onClick={() => setActiveNavbar('#')}
					className={activeNavbar === '#' ? 'active' : ''}
				>
					<AiOutlineHome />
				</a>
				<a
					href="#about"
					onClick={() => setActiveNavbar('#about')}
					className={activeNavbar === '#about' ? 'active' : ''}
				>
					<TiBusinessCard />
				</a>
				<a
					href="#do"
					onClick={() => setActiveNavbar('#do')}
					className={activeNavbar === '#do' ? 'active' : ''}
				>
					<RiSuitcaseLine />
				</a>
				<a
					href="#skills"
					onClick={() => setActiveNavbar('#skills')}
					className={activeNavbar === '#skills' ? 'active' : ''}
				>
					<BiBook />
				</a>
				<a
					href="#projects"
					onClick={() => setActiveNavbar('#projects')}
					className={activeNavbar === '#projects' ? 'active' : ''}
				>
					<BiPencil />
				</a>
				<a
					href="#contact"
					onClick={() => setActiveNavbar('#contact')}
					className={activeNavbar === '#contact' ? 'active' : ''}
				>
					<BiMailSend />
				</a>
			</ul>
		</nav>
	);
};

export default Navbar;
