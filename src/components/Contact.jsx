import {Mail} from "lucide-react";
import {SlSocialLinkedin, SlSocialGithub} from "react-icons/sl";

const Contact = () => {
	const openMail = () => {
		window.open("mailto:saxon.crawford@icloud.com");
	};

	return (
		<div className="contact" id="contact">
			<h1 className="contact-heading">Have any questions?</h1>
			<h2 className="contact-subheading">Feel free to reach out if you'd like to connect</h2>
			<button className="contact-me" onClick={() => {
				openMail();
			}}>
				<Mail size={20}/>
				<p>Contact Me</p>
			</button>
			<div className="contact-links">
				<span className="linked-in">
					<a href="https://www.linkedin.com/in/saxoncrawford/"><SlSocialLinkedin size={25}/></a>
				</span>
				<span className="github">
					<a href="https://github.com/saxcrawford"><SlSocialGithub size={25}/></a>
				</span>
			</div>
		</div>
	);
};

export default Contact;