import "./Certifications.css";
import CertificationCard from "../CertificationCard/CertificationCard";
import { useState, useEffect } from "react";

export default function Certifications() {

    const [certifications, setCertifications] = useState([]);
    const [showAllCertifications, setShowAllCertifications] = useState(false);

    // I use these two states to handle the API loading and error messages.
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        // Loads the certifications from my backend API.
        fetch(`${import.meta.env.VITE_API_URL}/api/certifications`)

            .then((response) => {

                // fetch() does not fail automatically for HTTP errors,
                // so I check the response before using the data.
                if (!response.ok) {
                    throw new Error("Unable to load certifications.");
                }

                return response.json();
            })

            .then((data) => {
                setCertifications(data);
            })

            .catch((error) => {

                // I keep the real error in the console for debugging.
                console.error("Certifications fetch error: ", error);

                // The visitor only needs a simple message.
                setError("Unable to load certifications");
            })

            .finally(() => {

                // The request is finished here whether it worked or failed.
                setLoading(false);
            });

    }, []);

    return (
        <div className="certifications">

            {/* Show a message while the API request is still running. */}
            {loading && (
                <p className="certifications-status">
                    Loading Certifications...
                </p>
            )}

            {/* Show the API error instead of leaving the section empty. */}
            {error && (
                <p className="certifications-status certifications-error">
                    {error}
                </p>
            )}

            {/* This handles a successful request that returns no certifications. */}
            {!loading && !error && certifications.length === 0 && (
                <p className="certifications-status">
                    No certifications available right now.
                </p>
            )}

            {/* Show the normal certification content after the API loads successfully. */}
            {!loading && !error && certifications.length > 0 && (
                <>
                    <div
                        className={`certifications-grid 
                            ${showAllCertifications ? "certifications-grid-expanded" : ""}`}
                    >

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

                    {/* Only show this button if there are more than two certifications. */}
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

                </>
            )}

        </div>
    );
}