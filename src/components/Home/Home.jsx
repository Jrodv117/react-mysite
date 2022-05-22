import './Home.css';
import cloud from '../../images/cloud.png';
import mountain from '../../images/mountain.png';
const Home = () => {
	return (
		<div class="top-container">
			<img class="top-cloud" src={cloud} alt="cloud-img" />
			<h1>I'm Julian</h1>
			<h2 class="intro-h2">a Software Engineer</h2>
			<img class="bottom-cloud" src={cloud} alt="cloud-img" />
			<img class="mountain" src={mountain} alt="mountain -img" />
		</div>
	);
};

export default Home;
