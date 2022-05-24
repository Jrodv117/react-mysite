import './Home.css';
import cloud from '../../images/cloud.png';
import mountain from '../../images/mountain.png';
const Home = () => {
	return (
		<section id="home">
			<div className="container top-container" id="top-container">
				<img className="top-cloud" src={cloud} alt="cloud-img" />
				<h1 className="intro-h1">I'm Julian</h1>
				<h2 className="intro-h2">a Full Stack Developer</h2>
				<img className="bottom-cloud" src={cloud} alt="cloud-img" />
				<img className="mountain" src={mountain} alt="mountain -img" />
			</div>
		</section>
	);
};

export default Home;
