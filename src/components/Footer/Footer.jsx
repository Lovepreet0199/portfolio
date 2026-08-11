import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">

            <div className="container">

                <div className="footer-content">

                    <div className="footer-brand">
                        <h3>Lovepreet Sandhu</h3>

                        <p>
                            Full-Stack Web Developer
                        </p>
                    </div>

                    <div className="footer-links">

                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>

                    </div>

                    <div className="footer-socials">

                        <a href="#" aria-label="GitHub">
                            <i className="bi bi-github"></i>
                        </a>

                        <a href="#" aria-label="LinkedIn">
                            <i className="bi bi-linkedin"></i>
                        </a>

                        <a href="mailto:Love.sandhu8@gmail.com" aria-label="Email">
                            <i className="bi bi-envelope"></i>
                        </a>

                    </div>

                </div>

                <div className="footer-bottom">

                    <p>
                        © 2026 Lovepreet Sandhu. All rights reserved.
                    </p>

                </div>

            </div>

        </footer>
    );
}