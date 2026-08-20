import "./Contact.css";
import { useEffect, useState } from "react";

export default function Contact() {

    // Tracks whether the Contact section should start its animations.
    const [contactVisible, setContactVisible] = useState(false);

    useEffect(() => {

        function handleScroll() {

            const contactSection = document.getElementById("contact");

            if (!contactSection) {
                return;
            }

            const sectionPosition = contactSection.getBoundingClientRect();

            if (
                sectionPosition.top < window.innerHeight * 0.8 &&
                sectionPosition.bottom > 0
            ) {
                setContactVisible(true);
            } else {
                setContactVisible(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [error, setError] = useState("");

    const [success, setSuccess] = useState("");

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (
            formData.name === "" || formData.email === "" || formData.subject === "" || formData.message === ""
        ) {
            setError("Please fill in all fields");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(formData.email)) {
            setError("Please enter a valid email address.");
            return;
        }

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/contact`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
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

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
        } catch (error) {
            console.error("Contact form error: ", error);

            setError("Unable to send message.");
            setSuccess("");
        }
    }

    return (
        <section className="contact" id="contact">

            <div className="container">

                <div className="contact-header">

                    <p className={`contact-label ${contactVisible ? "contact-show-item" : ""}`}>
                        CONTACT
                    </p>

                    <h2 className={`contact-title ${contactVisible ? "contact-show-item" : ""}`}>
                        Let&apos;s <span>work together</span>
                    </h2>

                    <p className={`contact-description ${contactVisible ? "contact-show-item" : ""}`}>
                        Have a project, opportunity, or idea in mind? Send me a message.
                    </p>

                </div>

                <div className="row g-4">

                    <div className="col-12 col-lg-4">
                        <div className={`contact-info ${contactVisible ? "contact-info-show" : ""}`}>
                            <h3 className="contact-info-title">
                                Contact Information
                            </h3>

                            <p className="contact-info-description">
                                Feel free to reach out anytime.
                            </p>

                            <div className="contact-details">

                                <div className="contact-detail">
                                    <i className="bi bi-envelope"></i>

                                    <div>
                                        <span>Email</span>
                                        <p>
                                            <a href="mailto:Love.sandhu8@gmail.com">
                                                Love.sandhu8@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="contact-detail">
                                    <i className="bi bi-telephone"></i>

                                    <div>
                                        <span>Phone</span>
                                        <p>
                                            <a href="tel:+14372131495">
                                                +1 437-213-1495
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="contact-detail">
                                    <i className="bi bi-geo-alt"></i>

                                    <div>
                                        <span>Location</span>
                                        <p>Toronto, Ontario</p>
                                    </div>
                                </div>

                            </div>

                            <div className="contact-socials">

                                <a href="https://github.com/Lovepreet0199" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <i className="bi bi-github"></i>
                                </a>

                                <a href="https://www.linkedin.com/in/lovepreet-singh-sandhu-567345164/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <i className="bi bi-linkedin"></i>
                                </a>

                                <a href="mailto:Love.sandhu8@gmail.com" aria-label="Email">
                                    <i className="bi bi-envelope"></i>
                                </a>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-8">

                        <div className={`contact-form-area ${contactVisible ? "contact-form-show" : ""}`}>

                            <form
                                className="contact-form"
                                onSubmit={handleSubmit}
                            >

                                <div className="row g-3">

                                    <div className="col-12 col-md-6">

                                        <label htmlFor="name">
                                            Your Name
                                        </label>

                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />

                                    </div>

                                    <div className="col-12 col-md-6">

                                        <label htmlFor="email">
                                            Your Email
                                        </label>

                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />

                                    </div>

                                </div>


                                <div className="contact-form-group">

                                    <label htmlFor="subject">
                                        Subject
                                    </label>

                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        placeholder="What would you like to discuss?"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    />

                                </div>


                                <div className="contact-form-group">

                                    <label htmlFor="message">
                                        Your Message
                                    </label>

                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Tell me about your project or opportunity..."
                                        rows="6"
                                        value={formData.message}
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

                                <button type="submit" className="contact-submit">
                                    Send Message
                                    <i className="bi bi-send"></i>
                                </button>

                            </form>

                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}