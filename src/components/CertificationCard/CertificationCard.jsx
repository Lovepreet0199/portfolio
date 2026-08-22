import "./CertificationCard.css";

// Reusable card used to display one certification from the certification API.
export default function CertificationCard({
    title,
    issuer,
    date,
    image,
}) {
    return (
        <article className="certification-card">

            <div className="certification-image">
                <a
                    href={image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certification-image-link"
                    aria-label={`View ${title} certificate`}
                >
                    <img
                        src={image}
                        alt={`${title} certificate`}
                    />
                </a>
            </div>

            <div className="certification-content">

                <h3>{title}</h3>

                <div className="certification-details">
                    <span>{issuer}</span>
                    <span>•</span>
                    <span>{date}</span>
                </div>

            </div>

        </article>
    );
}