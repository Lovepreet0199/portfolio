import "./PortfolioShowcase.css";

import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Certifications from "../Certifications/Certifications";

import { useState, useEffect } from "react";

export default function PortfolioShowcase({ activePortfolioTab, setActivePortfolioTab }) {
    // Tracks whether the Portfolio Showcase should start its animations.
    const [showcaseVisible, setShowcaseVisible] = useState(false);

    useEffect(() => {

        function handleScroll() {

            const showcaseSection = document.getElementById("showcase");

            if (!showcaseSection) {
                return;
            }

            const sectionPosition = showcaseSection.getBoundingClientRect();

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

                        <div className={`portfolio-tab-slider slider-${activePortfolioTab}`}></div>

                        <button
                            type="button"
                            className={`portfolio-tab ${activePortfolioTab === "projects" ? "active" : ""}`}
                            onClick={() => setActivePortfolioTab("projects")}
                        >
                            <i className="bi bi-folder"></i>
                            Projects
                        </button>

                        <button
                            type="button"
                            className={`portfolio-tab ${activePortfolioTab === "skills" ? "active" : ""}`}
                            onClick={() => setActivePortfolioTab("skills")}
                        >
                            <i className="bi bi-code-slash"></i>
                            Skills
                        </button>

                        <button
                            type="button"
                            className={`portfolio-tab ${activePortfolioTab === "certifications" ? "active" : ""}`}
                            onClick={() => setActivePortfolioTab("certifications")}
                        >
                            <i className="bi bi-award"></i>
                            Certifications
                        </button>

                    </div>
                </div>
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