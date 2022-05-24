import twitter from '../../images/twitter.png';
import linkedin from '../../images/linkedin.png';
import github from '../../images/github1.png';

const Footer = () => {
	return (
		<div className="container" id="bottom-container">
			<div className="footer-media">
				<a
					className="footer-link"
					target="_blank"
					href="https://twitter.com/julian_MERN"
				>
					<img src={twitter} alt="twitter-png" />
				</a>

				<a
					className="footer-link"
					target="_blank"
					href="https://www.linkedin.com/in/julian-rodriguez1/"
				>
					<img src={linkedin} alt="linkedin-png" />
				</a>

				<a
					className="footer-link"
					target="_blank"
					href="https://github.com/Jrodv117"
				>
					<img src={github} alt="github.png" />
				</a>
			</div>
			<div className="credits">
				avatar icon by Trazobanana, computer icon by vectorsmarket15, design
				icon Freepik. All from
				<a target="_blank" href="https://www.flaticon.com/">
					Flaticon
				</a>
				icon by{' '}
				<a target="_blank" href="https://icons8.com">
					Icons8
				</a>
				<p className="copyright">© 2022 Julian Rodriguez-Vera.</p>
			</div>
		</div>
	);
};

export default Footer;
