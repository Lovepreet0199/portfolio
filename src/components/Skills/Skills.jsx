import "./Skills.css";
import SkillCard from "../SkillCard/SkillCard";
import { useState, useEffect } from "react";

export default function Skills() {

    const [skills, setSkills] = useState([]);

    // I use these states to handle the loading and error messages for the Skills API.
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        // Loads the skills from my backend API.
        fetch(`${import.meta.env.VITE_API_URL}/api/skills`)

            .then((response) => {

                // fetch() does not fail automatically for HTTP errors,
                // so I check the response before using the data.
                if (!response.ok) {
                    throw new Error("Unable to load skills.");
                }

                return response.json();
            })

            .then((data) => {
                setSkills(data);
            })

            .catch((error) => {

                // I keep the real error in the console so I can debug it.
                console.error("Skills fetch error: ", error);

                setError("Unable to load skills");
            })

            .finally(() => {

                // The request is finished here whether it worked or failed.
                setLoading(false);
            });

    }, []);

    return (
        <div id="skills" className="skills">

            {/* Show a message while the skills are still loading. */}
            {loading && (
                <p className="skills-status">
                    Loading Skills...
                </p>
            )}

            {/* Show the API error instead of leaving the section empty. */}
            {error && (
                <p className="skills-status skills-error">
                    {error}
                </p>
            )}

            {/* This handles a successful request that returns no skills. */}
            {!loading && !error && skills.length === 0 && (
                <p className="skills-status">
                    No skills available right now.
                </p>
            )}

            {/* Show the skill categories after the API loads successfully. */}
            {!loading && !error && skills.length > 0 && (
                <>

                    <div className="skills-category">

                        <p className="skills-category-title">
                            FRONTEND
                        </p>

                        <div className="skills-grid">

                            {skills
                                .filter((skill) => skill.category === "Front-End")
                                .map((skill) => {
                                    return (
                                        <SkillCard
                                            key={skill._id}
                                            name={skill.name}
                                            category={skill.category}
                                            icon={skill.icon}
                                        />
                                    );
                                })}

                        </div>

                    </div>


                    <div className="skills-category">

                        <p className="skills-category-title">
                            BACKEND
                        </p>

                        <div className="skills-grid">

                            {skills
                                .filter((skill) => skill.category === "Back-End")
                                .map((skill) => {
                                    return (
                                        <SkillCard
                                            key={skill._id}
                                            name={skill.name}
                                            category={skill.category}
                                            icon={skill.icon}
                                        />
                                    );
                                })}

                        </div>

                    </div>


                    <div className="skills-category">

                        <p className="skills-category-title">
                            DATABASES
                        </p>

                        <div className="skills-grid">

                            {skills
                                .filter((skill) => skill.category === "Database")
                                .map((skill) => {
                                    return (
                                        <SkillCard
                                            key={skill._id}
                                            name={skill.name}
                                            category={skill.category}
                                            icon={skill.icon}
                                        />
                                    );
                                })}

                        </div>

                    </div>


                    <div className="skills-category">

                        <p className="skills-category-title">
                            TOOLS
                        </p>

                        <div className="skills-grid">

                            {skills
                                .filter((skill) => skill.category === "Tools")
                                .map((skill) => {
                                    return (
                                        <SkillCard
                                            key={skill._id}
                                            name={skill.name}
                                            category={skill.category}
                                            icon={skill.icon}
                                        />
                                    );
                                })}

                        </div>

                    </div>

                </>
            )}

        </div>
    );
}