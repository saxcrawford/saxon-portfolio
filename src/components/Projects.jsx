import {Camera, ExternalLink} from "lucide-react";
import projectData from "../data/projects.js";

const Projects = () => {
	const goToProjectPage = (link) => {
		window.open(link);
	};

	return (
		<div className="projects" id="projects">
			<div className="project-container">
				<h1>Selected Projects</h1>
				<div className="project-list">
					{projectData.map(project => (
						<div key={project.id} className="project-item">
							<div className="project-image-wrapper">
								<img className="project-image" src={project.image} alt="vite logo"/>
								<button className="project-button" onClick={() => {
									goToProjectPage(project.linkToProject);
								}}>
									<p>View Project</p>
									<ExternalLink className="external-link" size={20}/>
								</button>
							</div>
							<div className="project-info-wrapper">
								<h2 className="project-heading">{project.title}</h2>
								<p className="project-desc">{project.description}</p>
							</div>
							<span className="project-stack">
								{project.techStack.map((stack, i) => (
									<p key={i}>{stack}</p>
								))}
							</span>
							<span className="project-attribute-wrapper">
								<Camera size={20}/>
								<a href={project.attributionLink}>{project.attribution}</a>
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;