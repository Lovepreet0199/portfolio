import "./PortfolioShowcase.css";

import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Certifications from "../Certifications/Certifications";

import { useState, useEffect } from "react";

export default function PortfolioShowcase({ activePortfolioTab, setActivePortfolioTab }) {

    // I use this state to start the Showcase animations when the section enters the screen.
    const [showcaseVisible, setShowcaseVisible] = useState(false);

    useEffect(() => {

        function handleScroll() {

            const showcaseSection = document.getElementById("showcase");

            if (!showcaseSection) {
                return;
            }

            const sectionPosition = showcaseSection.getBoundingClientRect();

            // I check the section against the viewport so the animation works properly on different screen sizes.
            if (
                sectionPosition.top < window.innerHeight * 0.8 &&
                sectionPosition.bottom > 0
            ) {
                setShowcaseVisible(true);
            } else {
                setShowcaseVisible(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        // I also check once when the component loads in case it is already visible.
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    return (

        <section className="portfolio-showcase" id="showcase">
            <div className="container">

                <div className="portfolio-showcase-header">

                    <p className={`portfolio-showcase-label ${showcaseVisible ? "showcase-show-item" : ""}`}>
                        MY WORK
                    </p>

                    <h2 className={`portfolio-showcase-title ${showcaseVisible ? "showcase-show-item" : ""}`}>
                        Portfolio <span>Showcase</span>
                    </h2>

                    <p className={`portfolio-showcase-description ${showcaseVisible ? "showcase-show-item" : ""}`}>
                        Explore my projects, skills, and certifications.
                    </p>

                    <div className={`portfolio-tabs ${showcaseVisible ? "showcase-tabs-show" : ""}`}>

                        {/* The slider moves under whichever portfolio tab is active. */}
                        <div
                            className={`portfolio-tab-slider slider-${activePortfolioTab}`}
                            aria-hidden="true"
                        ></div>

                        <button
                            type="button"
                            className={`portfolio-tab ${activePortfolioTab === "projects" ? "active" : ""}`}
                            aria-pressed={activePortfolioTab === "projects"}
                            onClick={() => setActivePortfolioTab("projects")}
                        >
                            <i
                                className="bi bi-folder"
                                aria-hidden="true"
                            ></i>
                            Projects
                        </button>

                        <button
                            type="button"
                            className={`portfolio-tab ${activePortfolioTab === "skills" ? "active" : ""}`}
                            aria-pressed={activePortfolioTab === "skills"}
                            onClick={() => setActivePortfolioTab("skills")}
                        >
                            <i
                                className="bi bi-code-slash"
                                aria-hidden="true"
                            ></i>
                            Skills
                        </button>

                        <button
                            type="button"
                            className={`portfolio-tab ${activePortfolioTab === "certifications" ? "active" : ""}`}
                            aria-pressed={activePortfolioTab === "certifications"}
                            onClick={() => setActivePortfolioTab("certifications")}
                        >
                            <i
                                className="bi bi-award"
                                aria-hidden="true"
                            ></i>
                            Certifications
                        </button>

                    </div>

                </div>

                {/* The active tab decides which portfolio component is shown. The key also makes React recreate the content when the tab changes, which lets the tab content animation play again. */}
                <div
                    key={activePortfolioTab}
                    className={`portfolio-content ${showcaseVisible ? "showcase-content-show" : ""}`}>

                    {activePortfolioTab === "projects" && <Projects />}

                    {activePortfolioTab === "skills" && <Skills />}

                    {activePortfolioTab === "certifications" && <Certifications />}

                </div>

            </div>

        </section>
    );
}