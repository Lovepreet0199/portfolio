import "./SkillCard.css";

// Reusable card that receives the information for one skill through props.
export default function SkillCard({
    name,
    category,
    icon
}) {
    return (
        <div className="skill-card">

            {/* The icon class comes from the skill data in my API. */}
            <i
                className={icon}
                aria-hidden="true"
            ></i>

            <div className="skill-info">

                <h3>{name}</h3>

                <p>{category}</p>

            </div>

        </div>
    );
}