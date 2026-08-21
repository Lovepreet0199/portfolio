import "./Guestbook.css";
import { useState, useEffect } from "react";
import GuestbookCard from "../GuestbookCard/GuestbookCard";


export default function Guestbook() {
    // Stores the name and message entered in the Guestbook form.
    const [guestData, setGuestData] = useState({
        guestName: "",
        guestMessage: ""
    });

    // I use this to start the Guestbook animations when it enters the screen.
    const [guestbookVisible, setGuestbookVisible] = useState(false);

    const [guestbookEntries, setGuestbookEntries] = useState([]);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // I use these states for loading messages and submitting the form.
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);

    // This error is separate because it is only for loading the messages.
    const [loadError, setLoadError] = useState("");

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


    // Updates the correct form field using its name.
    function handleChange(event) {
        setGuestData({
            ...guestData,
            [event.target.name]: event.target.value
        });
    }

    useEffect(() => {

        // Loads the existing Guestbook messages from my backend.
        fetch(`${import.meta.env.VITE_API_URL}/api/guestbook`)

            .then((response) => {

                // I check this because fetch does not automatically fail on HTTP errors.
                if (!response.ok) {
                    throw new Error("Unable to load Guestbook messages.");
                }

                return response.json();
            })

            .then((data) => {
                setGuestbookEntries(data);
            })

            .catch((error) => {

                // Keep the actual error in the console so I can debug it.
                console.error("Guestbook fetch error: ", error);

                setLoadError("Unable to load Guestbook messages.");
            })

            .finally(() => {
                setLoading(false);
            });

    }, []);

    async function handleSubmit(event) {
        event.preventDefault();

        // Stops the form if either field was left empty.
        if (guestData.guestName === "" || guestData.guestMessage === "") {
            setError("Please fill in all fields");
            setSuccess("");
            return;
        }

        // Disable the button while the message is being sent.
        setSubmitting(true);

        try {
            // Sends the new Guestbook message to my backend.
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

            // Clear the form after the message was added successfully.
            setGuestData({
                guestName: "",
                guestMessage: ""
            });

            // Load the messages again so the new entry appears right away.
            const guestbookResponse = await fetch(
                `${import.meta.env.VITE_API_URL}/api/guestbook`
            );

            if (!guestbookResponse.ok) {
                throw new Error("Unable to reload Guestbook messages.");
            }

            const guestbookData = await guestbookResponse.json();

            setGuestbookEntries(guestbookData);

        } catch (error) {
            console.error("Guestbook form error: ", error);

            setError("Unable to submit Guestbook entry.");
            setSuccess("");

        } finally {

            // Re-enable the submit button whether the request worked or failed.
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

                                    <i
                                        className="bi bi-chat-left-text"
                                        aria-hidden="true"
                                    ></i>
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