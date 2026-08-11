import "./PortfolioShowcase.css";
import { useState } from "react";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Certifications from "../Certifications/Certifications";

export default function PortfolioShowcase() {

    const [activeTab, setActiveTab] = useState("projects");

    return (
        <section className="portfolio-showcase" id="projects">
            <div className="container">

                <div className="portfolio-showcase-header">

                    <p className="portfolio-showcase-label">
                        MY WORK
                    </p>

                    <h2 className="portfolio-showcase-title">
                        Portfolio <span>Showcase</span>
                    </h2>

                    <p className="portfolio-showcase-description">
                        Explore my projects, skills, and certifications.
                    </p>

                    <div className="portfolio-tabs">

                        <button
                            className={`portfolio-tab ${activeTab === "projects" ? "active" : ""}`}
                            onClick={() => setActiveTab("projects")}
                        >
                            <i className="bi bi-folder"></i>
                            Projects
                        </button>

                        <button
                            className={`portfolio-tab ${activeTab === "skills" ? "active" : ""}`}
                            onClick={() => setActiveTab("skills")}
                        >
                            <i className="bi bi-code-slash"></i>
                            Skills
                        </button>

                        <button
                            className={`portfolio-tab ${activeTab === "certifications" ? "active" : ""}`}
                            onClick={() => setActiveTab("certifications")}
                        >
                            <i className="bi bi-award"></i>
                            Certifications
                        </button>

                    </div>
                </div>
                <div className="portfolio-content">

                    {activeTab === "projects" && <Projects />}

                    {activeTab === "skills" && <Skills />}

                    {activeTab === "certifications" && <Certifications />}

                </div>


            </div>
        </section>
    );
}