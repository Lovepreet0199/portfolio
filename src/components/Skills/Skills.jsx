import "./Skills.css";
import SkillCard from "../SkillCard/SkillCard";
import { useState, useEffect } from "react";

export default function Skills() {

    const [skills, setSkills] = useState([]);

    //Tracks whether the skills are still being loaded from the API.
    const [loading, setLoading] = useState(true);

    //Stores an error message if the skills API request fails.
    const [error, setError] = useState("");

    useEffect(() => {

        // Sends a GET request to the Skills API.
        fetch(`${import.meta.env.VITE_API_URL}/api/skills`)

            // Runs when the server sends back a response.
            .then((response) => {

                // Checks whether the HTTP response was unsuccessful.
                if (!response.ok) {

                    // Stops the normal Promise chain and sends the error to .catch().
                    throw new Error("Unable to load skills.");
                }

                // Converts the JSON response into JavaScript data.
                return response.json();
            })

            // Runs after the JSON has been successfully converted.
            .then((data) => {

                // Stores the skills returned by the API in React state.
                setSkills(data);
            })

            // Runs if the API request or any previous step fails.
            .catch((error) => {

                // Shows the actual error in the browser console for debugging.
                console.error("Skills fetch error: ", error);

                // Stores a user-friendly error message.
                setError("Unable to load skills");
            })

            // Runs whether the request succeeds or fails.
            .finally(() => {

                // Tells React that loading is finished.
                setLoading(false);
            });

    }, []);

    return (
        <div id="skills" className="skills">

            {loading && (
                <p className="skills-status">
                    Loading Skills...
                </p>
            )}

            {error && (
                <p className="skills-status skills-error">
                    {error}
                </p>
            )}

            {!loading && !error && skills.length === 0 && (
                <p className="skills-status">
                    No skills available right now.
                </p>
            )}


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
                                    )
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
                                    )
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
                                    )
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
                                    )
                                })}

                        </div>

                    </div>
                </>
            )}
        </div>
    );
}