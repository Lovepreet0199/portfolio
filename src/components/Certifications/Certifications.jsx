import "./Certifications.css";
import CertificationCard from "../CertificationCard/CertificationCard";
import { useState, useEffect } from "react";

export default function Certifications() {

    const [certifications, setCertifications] = useState([]);
    const [showAllCertifications, setShowAllCertifications] = useState(false);

    // Tracks whether certifications are still being loaded from the API.
    const [loading, setLoading] = useState(true);

    // Stores an error message if the Certifications API request fails.
    const [error, setError] = useState("");

    useEffect(() => {

        // Sends a GET request to the Certifications API.
        fetch(`${import.meta.env.VITE_API_URL}/api/certifications`)

            // Runs when the server sends back a response.
            .then((response) => {

                // Checks whether the HTTP response was unsuccessful.
                if (!response.ok) {

                    // Stops the normal Promise chain and sends the error to .catch().
                    throw new Error("Unable to load certifications.");
                }

                // Converts the JSON response into JavaScript data.
                return response.json();
            })

            // Runs after the JSON has been successfully converted.
            .then((data) => {

                // Stores the certifications returned by the API in React state.
                setCertifications(data);
            })

            // Runs if the API request or any previous step fails.
            .catch((error) => {

                // Shows the actual error in the browser console for debugging.
                console.error("Certifications fetch error: ", error);

                // Stores a user-friendly error message.
                setError("Unable to load certifications");
            })

            // Runs whether the request succeeds or fails.
            .finally(() => {

                // Tells React that loading is finished.
                setLoading(false);
            });

    }, []);

    return (
        <div className="certifications">

            {loading && (
                <p className="certifications-status">
                    Loading Certifications...
                </p>
            )}

            {error && (
                <p className="certifications-status certifications-error">
                    {error}
                </p>
            )}

            {!loading && !error && certifications.length === 0 && (
                <p className="certifications-status">
                    No certifications available right now.
                </p>
            )}

            {!loading && !error && certifications.length > 0 && (
                <>

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
                </>)}
        </div>
    );
}