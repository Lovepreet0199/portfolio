import "./SkillCard.css";

export default function SkillCard({
    name,
    category,
    icon
}) {
    return (
        <div className="skill-card">

            <i className={icon}></i>

            <div className="skill-info">
                <h3>{name}</h3>
                <p>{category}</p>
            </div>

        </div>
    );
}