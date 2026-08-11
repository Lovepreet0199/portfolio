import "./GuestbookCard.css";

export default function GuestbookCard({
    name,
    message,
    date
}) {
    return (
        <article className="guestbook-card">

            <div className="guestbook-card-header">

                <div className="guestbook-avatar">
                    {name.charAt(0).toUpperCase()}
                </div>

                <div className="guestbook-author">
                    <h3>{name}</h3>
                    <span>{date}</span>
                </div>

            </div>

            <p className="guestbook-card-message">
                {message}
            </p>

        </article>
    );
}