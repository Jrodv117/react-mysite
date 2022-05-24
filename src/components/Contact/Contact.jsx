import Btn from '../Btn/Btn';
import Footer from '../Footer/Footer';
import './Contact.css';

const Contact = () => {
	return (
		<section id="contact">
			<div className="contact-me container">
				<h2>Get In Touch</h2>
				<h3>I'm currently open to new opportunities</h3>
				<p className="contact-p">
					If you're currently looking to hire, need help with a project, or just
					fancy saying hey, then lets connect!
				</p>
			</div>
			<Btn />
			<Footer />
		</section>
	);
};

export default Contact;
