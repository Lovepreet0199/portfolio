import "./Certifications.css";
import CertificationCard from "../CertificationCard/CertificationCard";
import certificateImage from "../../assets/images/certifications/certificate.png";

export default function Certifications() {
    return (
        <div className="certifications">

            <div className="certifications-grid">

                <CertificationCard
                    title="Certificate Name"
                    issuer="Certificate Issuer"
                    date="2026"
                    image={certificateImage}
                    credentialLink="#"
                />

            </div>

        </div>
    );
}