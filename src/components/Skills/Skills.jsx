import "./Skills.css";
import SkillCard from "../SkillCard/SkillCard";

export default function Skills() {
    return (
        <div className="skills">

            <div className="skills-category">

                <p className="skills-category-title">
                    FRONTEND
                </p>

                <div className="skills-grid">

                    <SkillCard
                        name="JavaScript"
                        category="Frontend & Backend"
                        icon="bi bi-javascript"
                    />

                    <SkillCard
                        name="React"
                        category="Frontend"
                        icon="bi bi-code-slash"
                    />

                </div>

            </div>


            <div className="skills-category">

                <p className="skills-category-title">
                    BACKEND
                </p>

                <div className="skills-grid">

                    <SkillCard
                        name="Node.js"
                        category="Backend"
                        icon="bi bi-hdd-stack"
                    />

                    <SkillCard
                        name="ASP.NET Core"
                        category="Backend"
                        icon="bi bi-braces"
                    />

                </div>

            </div>

            <div className="skills-category">

                <p className="skills-category-title">
                    DATABASES
                </p>

                <div className="skills-grid">

                    <SkillCard
                        name="MongoDB"
                        category="Database"
                        icon="bi bi-database"
                    />

                    <SkillCard
                        name="MySQL"
                        category="Database"
                        icon="bi bi-database"
                    />

                    <SkillCard
                        name="PostgreSQL"
                        category="Database"
                        icon="bi bi-database"
                    />

                </div>

            </div>


            <div className="skills-category">

                <p className="skills-category-title">
                    TOOLS
                </p>

                <div className="skills-grid">

                    <SkillCard
                        name="Git"
                        category="Version Control"
                        icon="bi bi-git"
                    />

                    <SkillCard
                        name="GitHub"
                        category="Code Hosting"
                        icon="bi bi-github"
                    />

                    <SkillCard
                        name="Postman"
                        category="API Testing"
                        icon="bi bi-send"
                    />

                    <SkillCard
                        name="VS Code"
                        category="Editor"
                        icon="bi bi-code-square"
                    />

                </div>

            </div>
        </div>
    );
}