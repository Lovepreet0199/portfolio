import "./Skills.css";
import SkillCard from "../SkillCard/SkillCard";
import { useState, useEffect } from "react";

export default function Skills() {

    const [skills, setSkills] = useState([]);

    useEffect(() => {

        fetch(`${import.meta.env.VITE_API_URL}/api/skills`)
            .then((response) => response.json())
            .then((data) => {
                setSkills(data);
            });
    }, []);


    return (
        <div className="skills">

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
        </div>
    );
}