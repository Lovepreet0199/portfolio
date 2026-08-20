import "./Certifications.css";
import CertificationCard from "../CertificationCard/CertificationCard";
import { useState, useEffect } from "react";

export default function Certifications() {

    const [certifications, setCertifications] = useState([]);
    const [showAllCertifications, setShowAllCertifications] = useState(false);

    useEffect(() => {

        fetch(`${import.meta.env.VITE_API_URL}/api/certifications`)
            .then((response) => response.json())
            .then((data) => {
                setCertifications(data);
            });

    }, []);

    return (
        <div className="certifications">

            <div className={`certifications-grid ${showAllCertifications ? "certifications-grid-expanded" : ""}`}>

                {certifications
                    .slice(
                        0,
                        showAllCertifications
                            ? certifications.length
                            : 2
                    )
                    .map((certification) => {
                        return (
                            <CertificationCard
                                key={certification._id}
                                title={certification.title}
                                issuer={certification.issuer}
                                date={certification.date}
                                image={certification.imageUrl}
                                credentialLink={certification.credentialLink}
                            />
                        );
                    })}

            </div>

            {/* Only shows the button when there are more than 2 certifications. */}
            {certifications.length > 2 && (
                <button
                    type="button"
                    className="certifications-view-more-btn"
                    onClick={() =>
                        setShowAllCertifications(!showAllCertifications)
                    }
                >
                    {showAllCertifications
                        ? "Show Less"
                        : "View More Certifications"}
                </button>
            )}

        </div>
    );
}