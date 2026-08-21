import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import { useState, useEffect } from "react";

export default function Projects() {

    const [projects, setProjects] = useState([]);
    const [showAllProjects, setShowAllProjects] = useState(false);

    // I use these states to handle the loading and error messages for the Projects API.
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        // Loads the projects from my backend API.
        fetch(`${import.meta.env.VITE_API_URL}/api/projects`)

            .then((response) => {

                // fetch() does not fail automatically for HTTP errors,
                // so I check the response before using the data.
                if (!response.ok) {
                    throw new Error("Unable to load projects.");
                }

                return response.json();
            })

            .then((data) => {
                setProjects(data);
            })

            .catch((error) => {

                // I keep the real error in the console so I can debug it.
                console.error("Projects fetch error: ", error);

                setError("Unable to load projects");
            })

            .finally(() => {

                // The request is finished here whether it worked or failed.
                setLoading(false);
            });

    }, []);

    return (
        <div className="projects" id="projects">

            {/* Show a message while the projects are still loading. */}
            {loading && (
                <p className="projects-status">
                    Loading Projects...
                </p>
            )}

            {/* Show the API error instead of leaving the section empty. */}
            {error && (
                <p className="projects-status projects-error">
                    {error}
                </p>
            )}

            {/* This handles a successful request that returns no projects. */}
            {!loading && !error && projects.length === 0 && (
                <p className="projects-status">
                    No projects available right now.
                </p>
            )}

            {/* Show the project cards after the API loads successfully. */}
            {!loading && !error && projects.length > 0 && (
                <>
                    <div
                        className={`projects-grid ${showAllProjects ? "projects-grid-expanded" : ""}`}>

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

                    {/* Only show this button if there are more than two projects. */}
                    {projects.length > 2 && (
                        <button
                            type="button"
                            className="projects-view-more-btn"
                            onClick={() => setShowAllProjects(!showAllProjects)}
                        >
                            {showAllProjects ? "Show Less" : "View More Projects"}
                            <i
                                className={`bi ${showAllProjects ? "bi-chevron-up" : "bi-chevron-down"}`}
                                aria-hidden="true"
                            ></i>
                        </button>
                    )}

                </>
            )}

        </div>
    );
}