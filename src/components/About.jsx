import { CodeXml, Cpu, Database, Globe, GraduationCap, Terminal } from "lucide-react";

const About = () => {
	return (
		<section className="about" id="about">
			<span className="about-info">
				<h1 className="about-heading">About Me</h1>
				<p className="about-content-text">
					My name is <strong>Saxon Crawford</strong>. I’m a programmer with a strong interest in building practical, 
					user-friendly applications.
				</p>
				<p className="about-content-text">
					I strive to strengthen my skills in software development, problem-solving, and working with real-world code.
					I also have experience with web development and enjoy learning new technologies and applying them to useful projects. 
					As I continue growing in the field, I’m especially interested in expanding my skills in software development, web development, 
					and data-focused technologies.
				</p>
				<p className="about-content-text">
					I’m always looking for opportunities to learn, improve, and build solutions that are both efficient and useful.
				</p>
			</span>
			<div className="about-container">
				<div className="about-content">
					<span className="education">
						<GraduationCap color="#A78BFA" size={30}
							filter="drop-shadow(0 0 8px rgba(167, 139, 250, 0.5))" />
						<div className="education-wrapper">
							<h2>Education</h2>
							<p>Bachelor of Science in Computer Science</p>
						</div>
					</span>
					<span className="skills">
						<div className="skills-title-wrapper">
							<Terminal color="#10B981" filter="drop-shadow(0 0 8px rgba(16, 185, 129, 0.5))" />
							<h3>Skills & Interests</h3>
						</div>
						<ul className="skills-list">
							<li>Software Development</li>
							<li>Web Development</li>
							<li>Databases</li>
							<li>React</li>
							<li>Next.js</li>
							<li>SQL</li>
						</ul>
						<div className="interests-grid">
							<span className="interests-container">
								<CodeXml color="#3B82F6" filter="drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))" />
								<p>Development</p>
							</span>
							<span className="interests-container">
								<Database color="#F59E0B" filter="drop-shadow(0 0 8px rgba(245, 158, 11, 0.5))" />
								<p>Data</p>
							</span>
							<span className="interests-container">
								<Globe color="#14B8A6" filter="drop-shadow(0 0 8px rgba(20, 184, 166, 0.5))" />
								<p>Web</p>
							</span>
							<span className="interests-container">
								<Cpu color="#F43F5E" filter="drop-shadow(0 0 8px rgba(244, 63, 94, 0.5))" />
								<p>Systems</p>
							</span>
						</div>
					</span>
				</div>
			</div>
		</section>
	);
};

export default About;
