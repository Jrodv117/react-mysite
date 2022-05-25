import skills from '../../images/Skillss.png';
import './Skills.css';
const Skills = () => {
	return (
		<section id="skills">
			<div className="skillsseccontainer">
				<h2 className="skillssech2">My Skills</h2>
				<div class="skills-div">
					<img src={skills} alt="skills-png" className="skills-img" />
				</div>
			</div>
		</section>
	);
};

export default Skills;
