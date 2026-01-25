import { Briefcase } from "lucide-react";

const HomePage = () => {
	const goToProjects = (id) => {
		const element = document.getElementById(id);
		element?.scrollIntoView();
	};

	const openEmail = () => {
		window.open("mailto:saxon.crawford@icloud.com");
	};

	return (
		<section className="homepage" id="home">
			<span className="note">
				<Briefcase size={20} />
				<p>Available for new opportunities</p>
			</span>
			<h1 className="heading">
				Building Digital <span className="block-text">Experiences</span>
			</h1>
			<h2 className="subheading">
				Hi, I’m <strong>Saxon Crawford</strong>. An entry-level Full-Stack Developer
				ready to create world-class innovative solutions.
			</h2>
			<span className="homepage-buttons">
				<button className="contact-me" onClick={() => {
					openEmail();
				}}>
					Contact Me
				</button>
				<button className="view-projects" onClick={() => {
					goToProjects("projects");
				}}>
					View Projects
				</button>
			</span>
			<div className="scroll-container">
				<p className="scroll">SCROLL</p>
				<span className="scroll-line"></span>
			</div>
		</section>
	);
};

export default HomePage;