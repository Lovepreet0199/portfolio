import { useState } from "react";
import "./Header.css";

export default function Header({ setActivePortfolioTab }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="site-header">

            <div className="container d-flex align-items-center justify-content-between">

                <a href="#" className="header-brand d-flex align-items-center gap-1">
                    <span className="logo-icon">LS</span>
                    <span className="logo-name">Love Sandhu</span>
                </a>

                <button
                    type="button"
                    className="menu-toggle"
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav
                    className={`main-navigation ${isMenuOpen ? "main-navigation--open" : ""
                        }`}>

                    <ul className="nav-list">
                        <li>
                            <a
                                href="#"
                                onClick={() => setIsMenuOpen(false)}>
                                Home</a>
                        </li>
                        <li>
                            <a
                                href="#showcase"
                                onClick={() => {
                                    setActivePortfolioTab("projects"); setIsMenuOpen(false)
                                }}>
                                Projects</a>
                        </li>
                        <li>
                            <a
                                href="#showcase"
                                onClick={() => {
                                    setIsMenuOpen(false)
                                    setActivePortfolioTab("skills");
                                }}>
                                Skills</a>
                        </li>
                        <li>
                            <a
                                href="#showcase"
                                onClick={() => {
                                    setIsMenuOpen(false)
                                    setActivePortfolioTab("certifications");
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
                        <li>
                            <a href="#contact" className="mobile-lets-talk-btn" onClick={() => setIsMenuOpen(false)}>
                                Let&apos;s Talk
                            </a>
                        </li>
                    </ul>


                </nav>

                <a href="#contact" className="lets-talk-btn">
                    Let&apos;s Talk
                </a>
            </div>

        </header>
    );
}