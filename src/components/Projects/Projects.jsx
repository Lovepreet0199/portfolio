import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import photoScoutImage from "../../assets/images/projects/photoscout.png";

export default function Projects() {
    return (
        <div className="projects" id="projects">

            <div className="projects-grid">
                <ProjectCard
                    title="PhotoScout Toronto"
                    type="Full-Stack"
                    description="A photography planning app that helps photographers find the best time, locations, and conditions for shooting around Toronto."
                    technologies={["Node.js", "Express", "Pug", "REST APIs"]}
                    image={photoScoutImage}
                    githubLink="#"
                    liveLink="#"
                />
            </div>

        </div>
    );
}