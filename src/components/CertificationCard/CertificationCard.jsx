import "./CertificationCard.css";

export default function CertificationCard({
    title,
    issuer,
    date,
    image,
    credentialLink
}) {
    return (
        <article className="certification-card">

            <div className="certification-image">
                <img
                    src={image}
                    alt={`${title} certificate`}
                />
            </div>

            <div className="certification-content">

                <h3>{title}</h3>

                <div className="certification-details">
                    <span>{issuer}</span>
                    <span>•</span>
                    <span>{date}</span>
                </div>

                <a
                    href={credentialLink}
                    className="certification-link"
                    target="_blank"
                    rel="noreferrer"
                >
                    View Credential
                    <i className="bi bi-arrow-up-right"></i>
                </a>

            </div>

        </article>
    );
}