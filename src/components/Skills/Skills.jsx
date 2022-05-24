import skills from '../../images/skills.jpg';
const Skills = () => {
	return (
		<section id="skills">
			<div className="skills container">
				<h2>My Skills</h2>
				<div class="skills-div">
					<img src={skills} alt="skills-png" className="skills-img" />
				</div>
			</div>
			<hr />
		</section>
	);
};

export default Skills;
