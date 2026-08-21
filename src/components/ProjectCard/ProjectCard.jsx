import "./ProjectCard.css";

// Reusable card that receives the information for one project through props.
export default function ProjectCard({
    title,
    type,
    description,
    technologies,
    image,
    githubLink,
    liveLink

}) {
    return (

        <article className="project-card">

            <div className="project-image">

                <img
                    src={image}
                    alt={`${title} project`}
                />

            </div>

            <div className="project-content">

                <div className="project-card-header">
                    <h3>{title}</h3>

                    <span className="project-type">
                        {type}
                    </span>

                </div>

                <p className="project-description">
                    {description}
                </p>

                {/* I map through the technologies so each project can have its own list. */}
                <div className="project-technologies">

                    {technologies.map((technology) => (

                        <span key={technology}>
                            {technology}
                        </span>

                    ))}

                </div>

                <div className="project-links">

                    <a
                        href={githubLink}
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i
                            className="bi bi-github"
                            aria-hidden="true"
                        ></i>
                        GitHub
                    </a>

                    <a
                        href={liveLink}
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Live Demo
                        <i
                            className="bi bi-arrow-up-right"
                            aria-hidden="true"
                        ></i>
                    </a>

                </div>

            </div>

        </article>
    );
}