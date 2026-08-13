import "./Guestbook.css";
import { useState, useEffect } from "react";
import GuestbookCard from "../GuestbookCard/GuestbookCard";

export default function Guestbook() {
    const [guestData, setGuestData] = useState({
        guestName: "",
        guestMessage: ""
    });

    const [guestbookEntries, setGuestbookEntries] = useState([]);

    const [error, setError] = useState("");

    const [success, setSuccess] = useState("");

    function handleChange(event) {
        setGuestData({
            ...guestData,
            [event.target.name]: event.target.value
        });
    }

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/guestbook`)
            .then((response) => response.json())
            .then((data) => {
                setGuestbookEntries(data);
            });

    }, []);

    function handleSubmit(event) {
        event.preventDefault();

        if (guestData.guestName === "" || guestData.guestMessage === "") {
            setError("Please fill in all fields");
            setSuccess("");
            return;
        }

        setError("");
        setSuccess("Guestbook entry submitted!");

        console.log(guestData);

        setGuestData({
            guestName: "",
            guestMessage: ""
        });

    }

    return (

        <section className="guestbook" id="guestbook">

            <div className="container">

                <div className="guestbook-header">

                    <p className="guestbook-label">
                        GUESTBOOK
                    </p>

                    <h2 className="guestbook-title">
                        Sign the <span>Guestbook</span>
                    </h2>

                    <p className="guestbook-description">
                        Say hello, share feedback, or leave a message.
                    </p>

                </div>

                <div className="row g-4">

                    <div className="col-12 col-lg-5">
                        <div className="guestbook-form-area">
                            <div className="guestbook-form-header">
                                <h3>Sign the Guestbook</h3>

                                <p>
                                    Leave a message for me or anyone visiting my portfolio.
                                </p>
                            </div>

                            <form
                                className="guestbook-form"
                                onSubmit={handleSubmit}
                            >

                                <div className="guestbook-form-group">

                                    <label htmlFor="guestName">
                                        Your Name
                                    </label>

                                    <input
                                        type="text"
                                        id="guestName"
                                        name="guestName"
                                        placeholder="John Doe"
                                        value={guestData.guestName}
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="guestbook-form-group">

                                    <label htmlFor="guestMessage">
                                        Your Message
                                    </label>

                                    <textarea
                                        id="guestMessage"
                                        name="guestMessage"
                                        placeholder="Leave a message..."
                                        rows="5"
                                        value={guestData.guestMessage}
                                        onChange={handleChange}
                                    ></textarea>

                                </div>

                                {error && (
                                    <div className="alert alert-danger" role="alert">
                                        {error}
                                    </div>
                                )}

                                {success && (
                                    <div className="alert alert-success" role="alert">
                                        {success}
                                    </div>
                                )}

                                <button type="submit" className="guestbook-submit">
                                    Sign Guestbook
                                    <i className="bi bi-chat-left-text"></i>
                                </button>

                            </form>
                        </div>
                    </div>

                    <div className="col-12 col-lg-7">
                        <div className="guestbook-comments">

                            <div className="guestbook-comments-header">
                                <div>
                                    <h3>Recent Messages</h3>
                                    <p>Messages left by visitors.</p>
                                </div>

                                <span className="guestbook-count">
                                    {guestbookEntries.length} {guestbookEntries.length === 1 ? "Message" : "Messages"}
                                </span>
                            </div>

                            {guestbookEntries.map((entry) => {
                                return (
                                    <GuestbookCard
                                        key={entry._id}
                                        name={entry.guestName}
                                        message={entry.guestMessage}
                                        date={new Date(entry.createdAt).toLocaleDateString()}
                                    />
                                );
                            })}
                        </div>
                    </div>

                </div>


            </div>

        </section>

    );
}