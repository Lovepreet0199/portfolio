import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import { useState, useEffect } from "react";

export default function Projects() {

    const [projects, setProjects] = useState([]);
    const [showAllProjects, setShowAllProjects] = useState(false);


    useEffect(() => {

        fetch(`${import.meta.env.VITE_API_URL}/api/projects`)
            .then((response) => response.json())
            .then((data) => {
                setProjects(data);
            });

    }, []);

    return (
        <div className="projects" id="projects">

            <div className={`projects-grid ${showAllProjects ? "projects-grid-expanded" : ""}`}>

                {projects
                    .slice(0, showAllProjects ? projects.length : 2)
                    .map((project) => {
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
                        );
                    })}

            </div>

            {/* Only shows the button when there are more than 2 projects. */}
            {projects.length > 2 && (
                <button
                    type="button"
                    className="projects-view-more-btn"
                    onClick={() => setShowAllProjects(!showAllProjects)}
                >
                    {showAllProjects ? "Show Less" : "View More Projects"}

                    <i
                        className={`bi ${showAllProjects
                            ? "bi-chevron-up"
                            : "bi-chevron-down"
                            }`}
                    ></i>
                </button>
            )}

        </div>
    );
}