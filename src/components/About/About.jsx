import './About.css';
import programmer from '../../images/programmer (3).png';

const About = () => {
	return (
		<section className="about-section" id="about">
			<div className="container middle-container" id="middle-container">
				<div className="profile">
					<img className="julian-avi" src={programmer} alt="julian-png" />
					<h2>Greetings!</h2>
					<p className="intro-p">
						I'm a web developer/designer based in Denver, Colorado. I have a
						passion for programming and love to create for web and mobile
						devices.
					</p>
				</div>
			</div>
			<hr />
		</section>
	);
};

export default About;
