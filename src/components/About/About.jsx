import "./About.css";
import logoImage from "../../assets/images/logo.png";
import { useEffect, useState } from "react";

export default function About() {
    // Tracks whether the About section should start its animations.
    const [aboutVisible, setAboutVisible] = useState(false);

    const [aboutStats, setAboutStats] = useState([]);
    const [loadingStats, setLoadingStats] = useState(true);
    const [statsError, setStatsError] = useState("");

    useEffect(() => {

        // Loads the live About statistics from the API.
        fetch(`${import.meta.env.VITE_API_URL}/api/about-stats`)

            .then((response) => {

                if (!response.ok) {
                    throw new Error("Unable to load About stats.");
                }

                return response.json();
            })

            .then((data) => {
                setAboutStats(data);
            })

            .catch((error) => {
                console.error("About stats fetch error: ", error);
                setStatsError("Unable to load About stats.");
            })

            .finally(() => {
                setLoadingStats(false);
            });

    }, []);

    useEffect(() => {

        // Runs whenever the user scrolls the page.
        function handleScroll() {

            const aboutSection = document.getElementById("about");

            if (!aboutSection) {
                return;
            }

            const sectionPosition = aboutSection.getBoundingClientRect();

            // Starts the animation when the section enters the visible screen.
            if (
                sectionPosition.top < window.innerHeight * 0.8 &&
                sectionPosition.bottom > 0
            ) {
                setAboutVisible(true);
            } else {
                setAboutVisible(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        // Checks the position once when the component first loads.
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    return (
        <section className="about" id="about">

            <div className="container">
                <div className="about-top">
                    <div className="about-content">
                        <p className={`about-label ${aboutVisible ? "about-show-item" : ""}`}>
                            ABOUT ME
                        </p>

                        <h2 className={`about-title ${aboutVisible ? "about-show-item" : ""}`}>
                            Get to <span>know me</span>
                        </h2>

                        <p className={`about-description ${aboutVisible ? "about-show-item" : ""}`}>
                            I&apos;m a <strong>Full-Stack Developer</strong> who enjoys building clean, practical, and user-focused web applications.
                        </p>

                        <div className="about-info">

                            <div className={`about-info-item ${aboutVisible ? "about-info-show" : ""}`}>
                                <i className="bi bi-person about-info-icon"></i>
                                <span className="about-info-label">Name</span>
                                <span className="about-info-value">Lovepreet Sandhu</span>
                            </div>

                            <div className={`about-info-item ${aboutVisible ? "about-info-show" : ""}`}>
                                <i className="bi bi-geo-alt about-info-icon"></i>
                                <span className="about-info-label">Location</span>
                                <span className="about-info-value">Toronto, Ontario</span>
                            </div>

                            <div className={`about-info-item ${aboutVisible ? "about-info-show" : ""}`}>
                                <i className="bi bi-envelope about-info-icon"></i>
                                <span className="about-info-label">Email</span>
                                <span className="about-info-value"> <a href="mailto:Love.sandhu8@gmail.com">Love.sandhu8@gmail.com</a></span>
                            </div>

                            <div className={`about-info-item ${aboutVisible ? "about-info-show" : ""}`}>
                                <i className="bi bi-mortarboard about-info-icon"></i>

                                <span className="about-info-label">Education</span>
                                <span className="about-info-value">Web Development (Humber College)</span>
                            </div>

                            <div className={`about-info-item ${aboutVisible ? "about-info-show" : ""}`}>
                                <i className="bi bi-lightning-charge about-info-icon"></i>
                                <span className="about-info-label">Availability</span>
                                <span className="about-info-value about-availability">Open to Work</span>
                            </div>

                        </div>

                        {/* <a href="/resume.pdf" className="about-cv-btn">
                            Download CV
                            <i className="bi bi-download"></i>
                        </a> */}

                    </div>

                    <div className={`about-image ${aboutVisible ? "about-image-show" : ""}`}>
                        <img
                            src={logoImage}
                            alt="Lovepreet Sandhu"
                        />

                    </div>

                </div>

                <div className="about-stats row">

                    {loadingStats && (
                        <p className="about-stats-status">
                            Loading stats...
                        </p>
                    )}

                    {statsError && (
                        <p className="about-stats-status about-stats-error">
                            {statsError}
                        </p>
                    )}

                    {!loadingStats && !statsError && aboutStats.length === 0 && (
                        <p className="about-stats-status">
                            No stats available right now.
                        </p>
                    )}

                    {!loadingStats && !statsError && aboutStats.length > 0 && (
                        <>
                            {aboutStats.map((stat) => {
                                return (
                                    <div
                                        key={stat.label}
                                        className={`col-12 col-md-4 ${aboutVisible ? "about-stat-show" : ""}`}
                                    >
                                        <div className="about-stat-card">

                                            <div className="about-stat-info">
                                                <i className={`bi ${stat.icon}`}></i>
                                                <p>{stat.label}</p>
                                            </div>

                                            <h3>{stat.value}+</h3>

                                        </div>
                                    </div>
                                );
                            })}
                        </>
                    )}

                </div>
            </div>
        </section>

    );
}