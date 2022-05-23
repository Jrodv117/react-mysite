import webdev from '../../images/web-development.png';
import design from '../../images/design.png';

const Skills = () => {
	return (
		<>
			<div class="what-i-do">
				<h2>What I Can Do</h2>
				<div class="skill-row">
					<img class="dev-img" src={webdev} alt="development-png" />
					<h3>Develop what you need</h3>
					<p>
						I'm a Software Engineer, so I know how to leverage the latest
						technologies available to develop what is needed.
					</p>
				</div>
				<div class="skill-row">
					<img class="des-img" src={design} alt="design-png" />
					<h3>Design what you need.</h3>
					<p>
						I like to keep it simple. My goal is to focus on the appropriate
						content in order to convey the message that needs to be sent.
					</p>
				</div>
			</div>
			<hr />
		</>
	);
};

export default Skills;
