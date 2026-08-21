import "./About.css";
import logoImage from "../../assets/images/logo.png";
import { useEffect, useState } from "react";

export default function About() {

    // I use this state to control when the About section animations should play.
    const [aboutVisible, setAboutVisible] = useState(false);

    // These states store the About statistics and handle the different API states.
    const [aboutStats, setAboutStats] = useState([]);
    const [loadingStats, setLoadingStats] = useState(true);
    const [statsError, setStatsError] = useState("");

    useEffect(() => {

        // I load these numbers from the API so they update automatically when I add new projects, skills, or certifications.
        fetch(`${import.meta.env.VITE_API_URL}/api/about-stats`)

            .then((response) => {

                // fetch() does not automatically fail for HTTP errors like 404 or 500, so I check the response before trying to use the data.
                if (!response.ok) {
                    throw new Error("Unable to load About stats.");
                }

                return response.json();
            })

            .then((data) => {
                setAboutStats(data);
            })

            .catch((error) => {

                // I keep the real error in the console for debugging, but show a simpler message to the visitor.
                console.error("About stats fetch error: ", error);
                setStatsError("Unable to load About stats.");
            })

            .finally(() => {

                // The request is finished here whether it worked or failed.
                setLoadingStats(false);
            });

    }, []);

    useEffect(() => {

        // Runs whenever the user scrolls the page.
        function handleScroll() {

            const aboutSection = document.getElementById("about");

            //This prevents an error if the section is not available in the DOM.
            if (!aboutSection) {
                return;
            }

            const sectionPosition = aboutSection.getBoundingClientRect();

            //  I check the section against the viewport instead of using a fixed scroll position so the animation also works on different screen sizes.
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

        // I run it once on load too in case the About section is already visible.
        handleScroll();

        // Remove the listener when the component is no longer being used.
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

                    </div>

                    <div className={`about-image ${aboutVisible ? "about-image-show" : ""}`}>
                        <img
                            src={logoImage}
                            alt="Lovepreet Sandhu"
                        />

                    </div>

                </div>

                <div className="about-stats row">

                    {/* Show feedback while the stats API request is running. */}
                    {loadingStats && (
                        <p className="about-stats-status">
                            Loading stats...
                        </p>
                    )}

                    {/* Show the API error instead of leaving the section empty. */}
                    {statsError && (
                        <p className="about-stats-status about-stats-error">
                            {statsError}
                        </p>
                    )}

                    {/* This handles a successful API request that returns no stats. */}
                    {!loadingStats && !statsError && aboutStats.length === 0 && (
                        <p className="about-stats-status">
                            No stats available right now.
                        </p>
                    )}

                    {/* Each API object becomes one About stat card. */}
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