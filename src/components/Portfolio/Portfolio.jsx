import pkm from '../../images/pokemon.png';
import sfunky from '../../images/sfunky.png';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {
	Navigation,
	EffectFade,
	EffectCube,
	EffectFlip,
	EffectCards,
} from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import styles from '../Slider/Home.module.scss';
import './Portfolio.css';
import github from '../../images/github1.png';
import heroku from '../../images/heroku (1).png';
import royal from '../../images/royal.png';
import folio from '../../images/folio.png';

const Portfolio = () => {
	return (
		<section id="projects">
			<div className={styles.container}>
				<Swiper
					modules={[Navigation]}
					navigation
					speed={800}
					slidesPerView={1}
					loop
					className={styles.myswiper}
				>
					<SwiperSlide className={styles.swiperslide}>
						<img src={pkm} alt="" />
						<h2 className="project-h2">Pokedex</h2>
						<h3 className="project-h3"> Not Mobile Friendly </h3>
						<h3>HTML CSS Javascript Mongo Express React Node Bootsrap </h3>
						<p className="project-p">
							Pokedex is a react web app that leverages the pokemon API. Anyone
							can sign up by creating an account on the app. In addition to all
							Pokemon being rendered on different pages, users can search any
							pokemon using the seach bar.
						</p>

						<a
							className=" portfolio-link"
							href="https://julianpokedex.herokuapp.com/"
						>
							<img src={heroku} alt="https://julianpokedex.herokuapp.com/" />
						</a>
						<a
							className=" portfolio-link"
							href="https://github.com/Jrodv117/Pokedex"
						>
							<img src={github} alt="https://github.com/Jrodv117/Pokedex" />
						</a>
					</SwiperSlide>
					<SwiperSlide className={styles.swiperslide}>
						<img src={folio} alt="" />
						<h2 className="project-h2">My Portfolio</h2>
						<h3 className="project-h3">Mobile Friendly </h3>
						<h3>CSS JavaScript React Swiper.JS </h3>
						<p className="project-p">
							My portfolio is a react app built from the bottom up! There are
							two repos for my portfolio on my github. One is simple html and
							css. The second is this one deployed right here! Refactored in
							React. Please use it if you like it. Thank you!
						</p>
						<a
							className=" portfolio-link"
							href="https://github.com/Jrodv117/react-mysite"
						>
							<img
								src={github}
								alt="https://github.com/Jrodv117/react-mysite"
							/>
						</a>
					</SwiperSlide>
					<SwiperSlide className={styles.swiperslide}>
						<img src={sfunky} alt="" />
						<h2 className="project-h2">Survey Funky</h2>
						<h3 className="project-h3"> Not Mobile Friendly </h3>
						<h3> HTML CSS JavaScript Python JQuery Materialize</h3>
						<p className="project-p">
							Survey Funky is a full-stack CRUD app developed using the
							Python-based Django Framework. Anyone can sign up by creating an
							account on the app. Then, if a user would like to create a survey
							they can do so by clicking Create Survey. Multiple questions can
							be added to a Survey, and multiple answer choices can be added
							during each question creation. Also, users can see a summary of
							results for each survey.
						</p>
						<a
							className=" portfolio-link"
							href="https://surveyfunky.herokuapp.com"
						>
							<img src={heroku} alt="https://surveyfunky.herokuapp.com" />
						</a>
						<a
							className=" portfolio-link"
							href="https://github.com/Jrodv117/django-survey"
						>
							<img
								src={github}
								alt="https://github.com/Jrodv117/django-survey"
							/>
						</a>
					</SwiperSlide>
					<SwiperSlide className={styles.swiperslide}>
						<img src={royal} alt="" />
						<h2 className="project-h2">Royal Loots</h2>
						<h3 className="project-h3"> Mobile Friendly </h3>
						<h3>HTML CSS JavaScript</h3>
						<p className="project-p">
							Royal Loots is a simple slot machine simulator used to demonstrate
							a basic understading of DOM munipulation. Users start of with 100
							points and 10 points are deducted for each roll, unless of course
							they match the numbers accross the board. *NOTE* DEPLOYED ON
							GITHUB THATS WHY YOU SEE TWO GITHUB LINKS BELOW
						</p>
						<a
							className=" portfolio-link"
							href="https://jrodv117.github.io/slot_machine/"
						>
							<img
								src={github}
								alt="https://jrodv117.github.io/slot_machine/"
							/>
						</a>
						<a
							className=" portfolio-link"
							href="https://github.com/Jrodv117/slot_machine"
						>
							<img
								src={github}
								alt="https://github.com/Jrodv117/slot_machine"
							/>
						</a>
					</SwiperSlide>
				</Swiper>
				<div className="portfolio-btn">
					<ul></ul>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
