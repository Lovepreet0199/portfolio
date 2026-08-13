import "./Certifications.css";
import CertificationCard from "../CertificationCard/CertificationCard";
import { useState, useEffect } from "react";

export default function Certifications() {

    const [certifications, setCertifications] = useState([]);

    useEffect(() => {

        fetch(`${import.meta.env.VITE_API_URL}/api/certifications`)
            .then((response) => response.json())
            .then((data) => {
                setCertifications(data);
            });
    }, []);

    return (
        <div className="certifications">

            <div className="certifications-grid">

                {certifications.map((certification) => {
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

        </div>
    );
}