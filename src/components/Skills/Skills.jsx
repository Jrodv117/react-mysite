import skills from '../../images/skills.jpg';
const Skills = () => {
	return (
		<>
			<div class="skills">
				<h2>My Skills</h2>
				<div class="skills-div">
					<img src={skills} alt="skills-png" class="skills-img" />
				</div>
			</div>
			<hr />
		</>
	);
};

export default Skills;
