import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";


import { useState, useEffect } from "react";

export default function Projects() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {

        fetch(`${import.meta.env.VITE_API_URL}/api/projects`)
            .then((response) => response.json())
            .then((data) => {
                setProjects(data);
            });
    }, []);

    return (
        <div className="projects" id="projects">

            <div className="projects-grid">
                {projects.map((project) => {
                    return (
                        <ProjectCard
                            key={project._id}
                            title={project.title}
                            type={project.type}
                            description={project.description}
                            technologies={project.technologies}
                            image={project.imageUrl}
                            githubLink={project.githubLink}
                            liveLink={project.liveLink}
                        />
                    )
                })}
            </div>
        </div>
    );
}