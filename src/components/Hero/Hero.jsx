import { useEffect, useState } from "react";
import "./Hero.css";
import lovepreetImage from "../../assets/images/hero/lovepreetImage.jpeg";

export default function Hero() {

    const roles = [
        "Full-Stack Developer",
        "React Developer",
        "Node.js Developer",
        "MERN Stack Developer",
        "ASP.NET Developer"
    ];

    const [roleIndex, setRoleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [charIndex, setCharIndex] = useState(0);

    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {

        const currentRole = roles[roleIndex];

        //TYPING
        if (!isDeleting && charIndex < currentRole.length) {

            const timer = setTimeout(() => {
                setDisplayedText(currentRole.slice(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }, 100);

            return () => clearTimeout(timer);
        }

        // FINISHED TYPING
        if (!isDeleting && charIndex === currentRole.length) {

            const timer = setTimeout(() => {
                setIsDeleting(true);
            }, 1500);

            return () => clearTimeout(timer);
        }

        //DELETING
        if (isDeleting && charIndex > 0) {

            const timer = setTimeout(() => {
                setDisplayedText(currentRole.slice(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            }, 75);

            return () => clearTimeout(timer);
        }

        if (isDeleting && charIndex === 0) {

            const timer = setTimeout(() => {
                setIsDeleting(false);
                setRoleIndex((roleIndex + 1) % roles.length);
            }, 300);

            return () => clearTimeout(timer);
        }

    }, [charIndex, roleIndex, roles, isDeleting]);

    return (
        <section className="hero" id="home">

            <div className="container d-flex align-items-center justify-content-between">
                <div className="hero-content">

                    <div className="hero-mobile-image">
                        <img
                            src={lovepreetImage}
                            alt="Lovepreet Sandhu"
                        />
                        <span className="mobile-work-status">
                            <span className="status-dot"></span>
                            Open to Work
                        </span>
                    </div>

                    <p className="hero-label">PORTFOLIO 2026</p>

                    <h1 className="hero-title">
                        <span className="header-intro">Hi, I&apos;m</span>
                        <span className="hero-first-name">Lovepreet</span>
                        <span className="hero-last-name">Sandhu</span>
                    </h1>

                    <h2 className="hero-role">{displayedText}</h2>

                    <p className="hero-description">
                        I build <span className="hero-main-words">responsive</span>, <span className="hero-main-words">full-stack web applications</span> with a focus on <span className="hero-main-words">clean code</span>, <span className="hero-main-words">practical solutions</span>, and <span className="hero-main-words">great user experiences</span>.
                    </p>

                    <div className="hero-actions">

                        <a href="#projects" className="hero-primary-btn">
                            View My Work
                            <i className="bi bi-arrow-right-short"></i>
                        </a>

                        <a href="/resume.pdf" className="hero-secondary-btn">
                            Download CV
                            <i className="bi bi-download"></i>
                        </a>

                    </div>

                    <div className="hero-socials">

                        <a href="#" className="icons" aria-label="Github">
                            <i className="bi bi-github"></i>
                        </a>

                        <a href="#" className="icons" aria-label="LinkedIn">
                            <i className="bi bi-linkedin"></i>
                        </a>

                        <a href="#" className="icons" aria-label="Email">
                            <i className="bi bi-envelope"></i>
                        </a>

                    </div>
                </div>

                <div className="hero-card-area">

                    <div className="lanyard">

                        <div className="lanyard-strap">
                            <span>lovesandhu.com</span>
                            <span>lovesandhu.com</span>
                        </div>
                    </div>

                    <div className="card-clip"></div>

                    <div className="id-card">
                        <img
                            src={lovepreetImage}
                            alt="Image of Lovepreet Sandhu"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}