import './Home.css';
import cloud from '../../images/cloud.png';
import mountain from '../../images/mountain.png';
import backs from '../../images/backs.png';
const Home = () => {
	return (
		<section id="home">
			<div className="container top-container" id="top-container">
				<h1 className="intro-h1">Julian Rodriguez-Vera:</h1>
				<h2 className="intro-h2">A Full Stack Developer</h2>
				<img src={backs} alt="tech mountains" className="mountain" />
			</div>
		</section>
	);
};

export default Home;
