import { useState } from "react";
import "./Header.css";

export default function Header({ setActivePortfolioTab }) {

    // I use this state to open and close the navigation on smaller screens.
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="site-header">

            <div
                className={`container d-flex align-items-center justify-content-between 
                    ${isMenuOpen ? "header-menu-open" : ""}`}
            >

                <a
                    href="#home"
                    className="header-brand d-flex align-items-center gap-1">
                    <span className="logo-icon">LS</span>
                    <span className="logo-name">Love Sandhu</span>
                </a>

                {/* This button only appears on smaller screens and controls the mobile menu. */}
                <button
                    type="button"
                    className="menu-toggle"
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>

                <nav
                    aria-label="Main navigation"
                    className={`main-navigation ${isMenuOpen ? "main-navigation--open" : ""}`}>

                    <ul className="nav-list">

                        <li>
                            <a
                                href="#home"
                                onClick={() => setIsMenuOpen(false)}>
                                Home</a>
                        </li>

                        <li>
                            <a
                                href="#showcase"
                                onClick={() => {
                                    setActivePortfolioTab("projects");
                                    setIsMenuOpen(false);
                                }}>
                                Projects</a>
                        </li>

                        <li>
                            <a
                                href="#showcase"
                                onClick={() => {
                                    setActivePortfolioTab("skills");
                                    setIsMenuOpen(false);
                                }}>
                                Skills</a>
                        </li>

                        <li>
                            <a
                                href="#showcase"
                                onClick={() => {
                                    setActivePortfolioTab("certifications");
                                    setIsMenuOpen(false);
                                }}>
                                Certifications</a>
                        </li>

                        <li>
                            <a
                                href="#about"
                                onClick={() => setIsMenuOpen(false)}>
                                About</a>
                        </li>

                        <li>
                            <a
                                href="#contact"
                                onClick={() => setIsMenuOpen(false)}>
                                Contact</a>
                        </li>

                        <li>
                            <a
                                href="#guestbook"
                                onClick={() => setIsMenuOpen(false)}>
                                Guestbook</a>
                        </li>

                        {/* I keep a separate Let's Talk button inside the mobile menu. */}
                        <li>
                            <a
                                href="#contact"
                                className="mobile-lets-talk-btn"
                                onClick={() => setIsMenuOpen(false)}>
                                Let&apos;s Talk</a>
                        </li>

                    </ul>

                </nav>

                {/* Desktop version of the Let's Talk button. */}
                <a
                    href="#contact"
                    className="lets-talk-btn">
                    Let&apos;s Talk
                </a>
            </div>

        </header>
    );
}