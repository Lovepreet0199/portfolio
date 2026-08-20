import { useEffect, useState } from "react";
import { motion, useMotionValue, animate, useTransform, useVelocity, useSpring } from "motion/react";
import "./Hero.css";
import lovepreetImage from "../../assets/images/hero/lovepreetImage.jpeg";

const roles = [
    "Full-Stack Developer",
    "React Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "ASP.NET Developer"
];

export default function Hero({ introFinished }) {

    const [roleIndex, setRoleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [charIndex, setCharIndex] = useState(0);

    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        // Wait until the Intro animation is finished before starting typing effect.
        if (!introFinished) {
            return;
        }

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

    }, [charIndex, roleIndex, isDeleting, introFinished]);

    // Stores the card's live horizontal and vertical position.
    // 0, 0 represents the card's original hanging position.
    const cardX = useMotionValue(0);
    const cardY = useMotionValue(0);


    // Creates a dynamic SVG path for the lanyard.
    // It recalculates whenever the card's X or Y position changes.
    const lanyardPath = useTransform(
        [cardX, cardY],
        ([x, y]) => {

            const startX = 300;
            const startY = 0;

            const endX = 300 + x;
            const endY = 500 + y;

            return `
            M ${startX} ${startY}
            C ${startX} 160,
              ${startX + x * 0.7} ${endY - 100},
              ${endX} ${endY}
        `;
        }
    );

    const cardXVelocity = useVelocity(cardX);

    const smoothVelocity = useSpring(cardXVelocity, {
        stiffness: 100,
        damping: 20
    });

    const cardRotation = useTransform(
        smoothVelocity,
        [-1200, 0, 1200],
        [-15, 0, 15]
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

                    <p className={`hero-label ${introFinished ? "hero-show" : ""}`}>
                        PORTFOLIO 2026
                    </p>

                    <h1 className={`hero-title ${introFinished ? "hero-show" : ""}`}>
                        <span className="header-intro">Hi, I&apos;m</span>
                        <span className="hero-first-name">Lovepreet</span>
                        <span className="hero-last-name">Sandhu</span>
                    </h1>

                    <h2 className={`hero-role ${introFinished ? "hero-show" : ""}`}>{displayedText}</h2>

                    <p className={`hero-description ${introFinished ? "hero-show" : ""}`}>
                        I build <span className="hero-main-words">responsive</span>, <span className="hero-main-words">full-stack web applications</span> with a focus on <span className="hero-main-words">clean code</span>, <span className="hero-main-words">practical solutions</span>, and <span className="hero-main-words">great user experiences</span>.
                    </p>

                    <div className={`hero-actions ${introFinished ? "hero-actions-show" : ""}`}>

                        <a href="#projects" className="hero-primary-btn">
                            View My Work
                            <i className="bi bi-arrow-right-short"></i>
                        </a>

                        <a href="/resume.pdf" className="hero-secondary-btn">
                            Download CV
                            <i className="bi bi-download"></i>
                        </a>

                    </div>

                    <div className={`hero-socials ${introFinished ? "hero-socials-show" : ""}`}>

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

                    <div className={`hanging-badge ${introFinished ? "badge-drop" : ""}`}>
                        {/* SVG lanyard that bends and follows the draggable card */}
                        <div className="lanyard">
                            <svg
                                className="lanyard-svg"
                                viewBox="0 0 600 500"
                            >
                                {/* Motion path uses the dynamically calculated lanyard shape */}
                                <motion.path
                                    className="lanyard-path lanyard-path-base"
                                    d={lanyardPath}
                                    fill="none"
                                />

                                <motion.path
                                    className="lanyard-path lanyard-path-highlight"
                                    d={lanyardPath}
                                    fill="none"
                                />

                            </svg>
                        </div>
                        <div className={`badge-swing-wrapper ${introFinished ? "badge-swing" : ""}`}>
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
                                onDragEnd={(event, info) => {
                                    animate(cardX, 0, {
                                        type: "spring",
                                        stiffness: 35,
                                        damping: 6,
                                        mass: 1.8,
                                        velocity: info.velocity.x
                                    });

                                    animate(cardY, 0, {
                                        type: "spring",
                                        stiffness: 30,
                                        damping: 5,
                                        mass: 2.2,
                                        velocity: info.velocity.y
                                    });

                                }}
                            >
                                <div className="card-clip">
                                    <div className="clip-hole"></div>
                                    <div className="clip-connector"></div>
                                </div>

                                <div className="id-card">
                                    <img
                                        src={lovepreetImage}
                                        alt="Image of Lovepreet Sandhu"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </div>

            </div>
        </section >
    );
}