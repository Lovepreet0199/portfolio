import "./ProjectCard.css";

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
                        rel="noreferrer"
                    >
                        <i className="bi bi-github"></i>
                        GitHub
                    </a>

                    <a
                        href={liveLink}
                        className="project-link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Live Demo
                        <i className="bi bi-arrow-up-right"></i>
                    </a>

                </div>

            </div>

        </article>
    );
}