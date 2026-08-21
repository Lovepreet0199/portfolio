import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import { useState, useEffect } from "react";

export default function Projects() {

    const [projects, setProjects] = useState([]);
    const [showAllProjects, setShowAllProjects] = useState(false);

    //Track whether the projects are still being loaded from the API.
    const [loading, setLoading] = useState(true);

    //Stores an error message if the API request fails.
    const [error, setError] = useState("");

    useEffect(() => {

        // Sends a GET request to the Projects API.
        fetch(`${import.meta.env.VITE_API_URL}/api/projects`)

            // Runs when the server sends back a response.
            .then((response) => {

                // Checks if the HTTP response was unsuccessful such as 404, 500, etc.
                if (!response.ok) {

                    // Stops the normal Promise chain and sends the error to .catch().
                    throw new Error("Unable to load projects.");
                }

                // Converts the JSON response into JavaScript data and passes it to the next .then().
                return response.json();
            })

            // Runs after the JSON has been successfully converted.
            .then((data) => {

                // Stores the projects returned by the API in React state.
                setProjects(data);
            })

            // Runs if the API request or any previous step fails.
            .catch((error) => {

                // Displays the actual error in the browser console for debugging.
                console.error("Projects fetch error: ", error);

                // Stores a user-friendly error message in React state.
                setError("Unable to load projects");
            })

            // Runs after the request finishes whether it succeeded or failed.
            .finally(() => {

                // Tells React that the API request is no longer loading.
                setLoading(false);
            });

    }, []);

    return (
        <div className="projects" id="projects">

            {/* Shows a message while the projects are being fetched from the API. */}
            {loading && (
                <p className="project-status">
                    Loading Projects...
                </p>
            )}

            {/* Shows an error message if the API request fails. */}
            {error && (
                <p className="projects-status projects-error">
                    {error}
                </p>
            )}

            {!loading && !error && projects.length === 0 && (
                <p className="projects-status">
                    No Projects available right now.
                </p>
            )}


            {/* Shows the projects after loading succeeds. */}
            {!loading && !error && (
                <>
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
                </>
            )}
        </div>
    );
}