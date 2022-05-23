import './About.css';
import programmer from '../../images/programmer (3).png';

const About = () => {
	return (
		<>
			<div class="middle-container">
				<div class="profile">
					<img class="julian-avi" src={programmer} alt="julian-png" />
					<h2>Greetings</h2>
					<p class="intro-p">
						I'm a web developer/designer based in Denver, Colorado. I have a
						passion for programming and love to create for web and mobile
						devices.
					</p>
				</div>
			</div>
			<hr />
		</>
	);
};

export default About;
