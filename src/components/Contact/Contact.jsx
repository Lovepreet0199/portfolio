import "./Contact.css";
import { useState } from "react";

export default function Contact() {

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

    function handleSubmit(event) {
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

        setError("");

        console.log(formData);

        setSuccess("Message sent successfully!");

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        });

    }

    return (
        <section className="contact" id="contact">

            <div className="container">

                <div className="contact-header">

                    <p className="contact-label">
                        CONTACT
                    </p>

                    <h2 className="contact-title">
                        Let&apos;s <span>work together</span>
                    </h2>

                    <p className="contact-description">
                        Have a project, opportunity, or idea in mind? Send me a message.
                    </p>

                </div>

                <div className="row g-4">

                    <div className="col-12 col-lg-4">
                        <div className="contact-info">
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
                                        <p>Love.sandhu8@gmail.com</p>
                                    </div>
                                </div>

                                <div className="contact-detail">
                                    <i className="bi bi-telephone"></i>

                                    <div>
                                        <span>Phone</span>
                                        <p>+1 437-213-1495</p>
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

                                <a href="#" aria-label="GitHub">
                                    <i className="bi bi-github"></i>
                                </a>

                                <a href="#" aria-label="LinkedIn">
                                    <i className="bi bi-linkedin"></i>
                                </a>

                                <a href="#" aria-label="Email">
                                    <i className="bi bi-envelope"></i>
                                </a>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-8">
                        <div className="contact-form-area">

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