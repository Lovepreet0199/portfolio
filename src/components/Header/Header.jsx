import { useState } from "react";
import "./Header.css";

export default function Header() {
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
                    aria-label="Open navigation menu"
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
                        <li><a href="#">Home</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#skill">Skills</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <a href="#contact" className="mobile-lets-talk-btn">
                            Let&apos;s Talk
                        </a>
                    </ul>


                </nav>

                <a href="#contact" className="lets-talk-btn">
                    Let&apos;s Talk
                </a>
            </div>

        </header>
    );
}