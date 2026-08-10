import { useEffect, useState } from "react";
import { motion, useMotionValue, animate, useTransform } from "motion/react";
import "./Hero.css";
import lovepreetImage from "../../assets/images/hero/lovepreetImage.jpeg";

const roles = [
    "Full-Stack Developer",
    "React Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "ASP.NET Developer"
];

export default function Hero() {

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

    }, [charIndex, roleIndex, isDeleting]);

    // Stores the card's live horizontal and vertical position.
    // 0, 0 represents the card's original hanging position.
    const cardX = useMotionValue(0);
    const cardY = useMotionValue(0);

    // Creates a dynamic SVG path for the lanyard.
    // It recalculates whenever the card's X or Y position changes.
    const lanyardPath = useTransform(
        [cardX, cardY],
        ([x, y]) => {

            // M 110 0:
            // Fixed starting point (anchor) at the top of the lanyard.

            // C 110 80:
            // First control point stays near the top to keep the
            // upper part of the lanyard stable.

            // 110 + x * 0.35:
            // Second control point follows 35% of the card's
            // horizontal movement. This creates the bend in the strap.

            // 110 + x:
            // The bottom of the lanyard follows the card's full
            // horizontal movement.

            // 180 + y:
            // The bottom also follows the card's vertical movement.
            return `M 110 0 C 110 80, ${110 + x * 0.35} 120, ${110 + x} ${180 + y}`;
        }
    );

    const cardRotation = useTransform(
        cardX,
        [-200, 0, 200],
        [-12, 0, 12]
    );

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

                    {/* SVG lanyard that bends and follows the draggable card */}
                    <div className="lanyard">
                        <svg
                            className="lanyard-svg"
                            viewBox="0 0 220 180"
                        >
                            {/* Motion path uses the dynamically calculated lanyard shape */}
                            <motion.path
                                id="lanyard-path"
                                className="lanyard-path"
                                d={lanyardPath}
                            />

                        </svg>
                    </div>
                    <motion.div
                        className="draggable-badge"
                        drag
                        style={{
                            x: cardX,
                            y: cardY,
                            rotate: cardRotation
                        }}
                        whileDrag={{
                            cursor: "grabbing"
                        }}
                        onDragEnd={() => {
                            animate(cardX, 0, {
                                type: "spring",
                                stiffness: 120,
                                damping: 8
                            });

                            animate(cardY, 0, {
                                type: "spring",
                                stiffness: 120,
                                damping: 8
                            });

                        }}
                    >
                        <div className="card-clip"></div>

                        <div className="id-card">
                            <img
                                src={lovepreetImage}
                                alt="Image of Lovepreet Sandhu"
                            />
                        </div>
                    </motion.div>

                </div>

            </div>
        </section >
    );
}