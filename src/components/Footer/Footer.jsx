import "./Footer.css";
import { useEffect, useState } from "react";

export default function Footer() {
    const [footerVisible, setFooterVisible] = useState(false);

    useEffect(() => {

        // Checks the Footer position whenever the user scrolls.
        function handleScroll() {

            const footerSection = document.getElementById("footer");

            if (!footerSection) {
                return;
            }

            const sectionPosition = footerSection.getBoundingClientRect();

            // Start the animation when the Footer is visible in the viewport.
            if (
                sectionPosition.top < window.innerHeight * 0.9 &&
                sectionPosition.bottom > 0
            ) {
                setFooterVisible(true);
            } else {
                setFooterVisible(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        // I check once on load too in case the Footer is already visible.
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);
    return (
        <footer className="footer" id="footer">

            <div className="container">

                <div className={`footer-content ${footerVisible ? "footer-content-show" : ""}`}>

                    <div className="footer-brand">
                        <h3>Lovepreet Sandhu</h3>

                        <p>
                            Full-Stack Web Developer
                        </p>
                    </div>

                    <div className="footer-links">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#showcase">Portfolio</a>
                        <a href="#contact">Contact</a>
                        <a href="#guestbook">Guestbook</a>
                    </div>

                    <div className="footer-socials">

                        <a href="https://github.com/Lovepreet0199"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub">
                            <i className="bi bi-github"></i>
                        </a>

                        <a href="https://www.linkedin.com/in/lovepreet-singh-sandhu-567345164/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn">
                            <i className="bi bi-linkedin"></i>
                        </a>

                        <a href="mailto:Love.sandhu8@gmail.com" aria-label="Email">
                            <i className="bi bi-envelope"></i>
                        </a>

                    </div>

                </div>

                <div
                    className={`footer-bottom ${footerVisible ? "footer-bottom-show" : ""}`}>

                    <p>
                        &copy; {new Date().getFullYear()} Lovepreet Sandhu. All rights reserved.
                    </p>

                </div>

            </div>

        </footer>
    );
}