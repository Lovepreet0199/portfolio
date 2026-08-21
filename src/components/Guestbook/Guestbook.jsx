import "./Guestbook.css";
import { useState, useEffect } from "react";
import GuestbookCard from "../GuestbookCard/GuestbookCard";


export default function Guestbook() {
    const [guestData, setGuestData] = useState({
        guestName: "",
        guestMessage: ""
    });

    // Tracks whether the Guestbook section should start its animations.
    const [guestbookVisible, setGuestbookVisible] = useState(false);

    useEffect(() => {

        function handleScroll() {

            const guestbookSection = document.getElementById("guestbook");

            if (!guestbookSection) {
                return;
            }

            const sectionPosition = guestbookSection.getBoundingClientRect();

            if (
                sectionPosition.top < window.innerHeight * 0.8 &&
                sectionPosition.bottom > 0
            ) {
                setGuestbookVisible(true);
            } else {
                setGuestbookVisible(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    const [guestbookEntries, setGuestbookEntries] = useState([]);

    const [error, setError] = useState("");

    const [success, setSuccess] = useState("");

    // Tracks whether Guestbook messages are still being loaded.
    const [loading, setLoading] = useState(true);

    // Tracks whether a new Guestbook entry is currently being submitted.
    const [submitting, setSubmitting] = useState(false);

    // Stores an error specifically for loading Guestbook messages.
    const [loadError, setLoadError] = useState("");

    function handleChange(event) {
        setGuestData({
            ...guestData,
            [event.target.name]: event.target.value
        });
    }

    useEffect(() => {

        // Sends a GET request to load Guestbook messages.
        fetch(`${import.meta.env.VITE_API_URL}/api/guestbook`)

            .then((response) => {

                // Checks whether the HTTP response was unsuccessful.
                if (!response.ok) {
                    throw new Error("Unable to load Guestbook messages.");
                }

                return response.json();
            })

            .then((data) => {

                // Stores the Guestbook messages returned by the API.
                setGuestbookEntries(data);
            })

            .catch((error) => {

                // Shows the real error in the browser console.
                console.error("Guestbook fetch error: ", error);

                // Stores a user-friendly loading error.
                setLoadError("Unable to load Guestbook messages.");
            })

            .finally(() => {

                // Tells React that the initial Guestbook loading is finished.
                setLoading(false);
            });

    }, []);

    async function handleSubmit(event) {
        event.preventDefault();

        if (guestData.guestName === "" || guestData.guestMessage === "") {
            setError("Please fill in all fields");
            setSuccess("");
            return;
        }

        // Starts the submitting state after validation passes.
        setSubmitting(true);

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/guestbook`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(guestData)
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(data.message);
                setSuccess("");
                return;
            }

            setError("");
            setSuccess(data.message);

            setGuestData({
                guestName: "",
                guestMessage: ""
            });

            const guestbookResponse = await fetch(
                `${import.meta.env.VITE_API_URL}/api/guestbook`
            );

            const guestbookData = await guestbookResponse.json();

            setGuestbookEntries(guestbookData);

        } catch (error) {
            console.error("Guestbook form error: ", error);

            setError("Unable to submit Guestbook entry.");
            setSuccess("");
        } finally {
            // Runs whether the Guestbook submission succeeds or fails.
            setSubmitting(false);
        }

    }

    return (

        <section className="guestbook" id="guestbook">

            <div className="container">

                <div className="guestbook-header">

                    <p className={`guestbook-label ${guestbookVisible ? "guestbook-show-item" : ""}`}>
                        GUESTBOOK
                    </p>

                    <h2 className={`guestbook-title ${guestbookVisible ? "guestbook-show-item" : ""}`}>
                        Sign the <span>Guestbook</span>
                    </h2>

                    <p className={`guestbook-description ${guestbookVisible ? "guestbook-show-item" : ""}`}>
                        Say hello, share feedback, or leave a message.
                    </p>

                </div>

                <div className="row g-4">

                    <div className="col-12 col-lg-5">
                        <div className={`guestbook-form-area ${guestbookVisible ? "guestbook-form-show" : ""}`}>
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

                                <button
                                    type="submit"
                                    className="guestbook-submit"
                                    disabled={submitting}
                                >
                                    {submitting ? "Signing..." : "Sign Guestbook"}

                                    <i className="bi bi-chat-left-text"></i>
                                </button>

                            </form>
                        </div>
                    </div>

                    <div className="col-12 col-lg-7">
                        <div className={`guestbook-comments ${guestbookVisible ? "guestbook-comments-show" : ""}`}>

                            <div className="guestbook-comments-header">
                                <div>
                                    <h3>Recent Messages</h3>
                                    <p>Messages left by visitors.</p>
                                </div>

                                {!loading && !loadError && (
                                    <span className="guestbook-count">
                                        {guestbookEntries.length}{" "}
                                        {guestbookEntries.length === 1 ? "Message" : "Messages"}
                                    </span>
                                )}
                            </div>

                            {loading && (
                                <p className="guestbook-status">
                                    Loading messages...
                                </p>
                            )}

                            {loadError && (
                                <p className="guestbook-status guestbook-error">
                                    {loadError}
                                </p>
                            )}

                            {!loading && !loadError && guestbookEntries.length === 0 && (
                                <p className="guestbook-status">
                                    No messages yet. Be the first to sign the Guestbook.
                                </p>
                            )}

                            {!loading && !loadError && guestbookEntries.length > 0 && (
                                <>
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
                                </>
                            )}

                        </div>
                    </div>

                </div>


            </div>

        </section>

    );
}